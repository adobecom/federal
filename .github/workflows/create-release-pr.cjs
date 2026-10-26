module.exports = async ({ github, context, core }) => {
  const { owner, repo } = context.repo;
  const base = 'main';
  const head = 'stage';
  const commits = [];
  let page = 1;
  let pageCommits;

  do {
    const { data } = await github.rest.repos.compareCommitsWithBasehead({
      owner,
      repo,
      basehead: `${base}...${head}`,
      per_page: 100,
      page,
    });

    if (data.ahead_by === 0) {
      core.notice('Stage has no commits to release to main. No PR created.');
      return;
    }

    pageCommits = data.commits;
    commits.push(...pageCommits);
    page += 1;
  } while (pageCommits.length === 100);

  const commitShas = new Set(commits.map((commit) => commit.sha));
  const mergedPRs = new Map();

  for (const commit of commits) {
    const pullRequests = await github.paginate(
      github.rest.repos.listPullRequestsAssociatedWithCommit,
      { owner, repo, commit_sha: commit.sha, per_page: 100 },
    );

    for (const pr of pullRequests) {
      if (
        pr.merged_at
        && pr.base.ref === head
        && pr.base.repo.full_name === `${owner}/${repo}`
        && commitShas.has(pr.merge_commit_sha)
      ) {
        mergedPRs.set(pr.number, pr);
      }
    }
  }

  const title = '[Release] Stage to Main';
  const body = [...mergedPRs.values()]
    .sort((a, b) => a.number - b.number)
    .map((pr) => `- ${pr.html_url}`)
    .join('\n')
    || 'No merged PRs found for these changes. This release includes commits made directly to stage.';

  if (mergedPRs.size === 0) {
    core.warning('No merged PRs found in the main...stage comparison. Check the release diff.');
  }

  const openPRs = await github.paginate(github.rest.pulls.list, {
    owner,
    repo,
    state: 'open',
    base,
    head: `${owner}:${head}`,
    per_page: 100,
  });

  const existingPR = openPRs[0];
  const { data: releasePR } = existingPR
    ? await github.rest.pulls.update({
      owner, repo, pull_number: existingPR.number, title, body,
    })
    : await github.rest.pulls.create({
      owner, repo, base, head, title, body,
    });

  core.notice(`Release PR ${existingPR ? 'updated' : 'created'}: ${releasePR.html_url}`);
  await core.summary
    .addLink('Stage to Main release PR', releasePR.html_url)
    .addRaw(`\n\n${body}`)
    .write();
};
