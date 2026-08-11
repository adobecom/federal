// Invoked via actions/github-script from stage-to-main-release-pr.yml.
const { getLocalConfigs } = require('./helpers.cjs');

const PR_TITLE = '[Release] Stage to Main';

const extractPrNumber = (commitMessage) => {
  // Merge commit e.g. "Merge pull request #172 from adobecom/some-branch"
  const mergeMatch = commitMessage.match(/^Merge pull request #(\d+)/);
  if (mergeMatch) return Number(mergeMatch[1]);

  // Squash merge commit e.g. "Some PR title (#172)"
  const squashMatch = commitMessage.match(/\(#(\d+)\)/);
  if (squashMatch) return Number(squashMatch[1]);

  return null;
};

const main = async ({ github = getLocalConfigs().github, context = getLocalConfigs().context }) => {
  const { owner, repo } = context.repo;
  const pull_request = context.payload.pull_request;

  const { data: comparison } = await github.rest.repos.compareCommitsWithBasehead({
    owner,
    repo,
    basehead: `${pull_request.base.ref}...${pull_request.head.ref}`,
  });

  const prNumbers = [...new Set(
    comparison.commits
      .map((commit) => extractPrNumber(commit.commit.message))
      .filter((number) => number !== null && number !== pull_request.number),
  )].sort((a, b) => a - b);

  const body = prNumbers.length
    ? prNumbers.map((number) => `- https://github.com/${owner}/${repo}/pull/${number}`).join('\n')
    : 'No merged PRs found between stage and main.';

  await github.rest.pulls.update({
    owner,
    repo,
    pull_number: pull_request.number,
    title: PR_TITLE,
    body,
  });

  console.log(`Updated PR #${pull_request.number} with title "${PR_TITLE}" and ${prNumbers.length} PR link(s).`);
};

module.exports = main;
