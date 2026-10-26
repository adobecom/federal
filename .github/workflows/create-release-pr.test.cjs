const assert = require('node:assert/strict');
const { test } = require('node:test');
const createReleasePR = require('./create-release-pr.cjs');

function fixture({ commits = [{ sha: 'merge-256' }], prs = [], existing = [] } = {}) {
  const calls = { comparisons: [], associated: [], created: [], updated: [], notices: [], warnings: [] };
  const summary = {
    addLink() { return this; },
    addRaw() { return this; },
    async write() {},
  };
  const github = {
    rest: {
      repos: {
        async compareCommitsWithBasehead(params) {
          calls.comparisons.push(params);
          return {
            data: {
              ahead_by: commits.length,
              commits: commits.slice((params.page - 1) * 100, params.page * 100),
            },
          };
        },
        listPullRequestsAssociatedWithCommit: 'associated',
      },
      pulls: {
        list: 'open',
        async create(params) {
          calls.created.push(params);
          return { data: { html_url: 'https://github.com/adobecom/federal/pull/259' } };
        },
        async update(params) {
          calls.updated.push(params);
          return { data: { html_url: 'https://github.com/adobecom/federal/pull/259' } };
        },
      },
    },
    async paginate(method, params) {
      if (method === 'associated') {
        calls.associated.push(params);
        return prs;
      }
      assert.equal(method, 'open');
      assert.equal(params.base, 'main');
      assert.equal(params.head, 'adobecom:stage');
      assert.equal(params.state, 'open');
      return existing;
    },
  };
  const context = { repo: { owner: 'adobecom', repo: 'federal' } };
  const core = {
    notice: (message) => calls.notices.push(message),
    warning: (message) => calls.warnings.push(message),
    summary,
  };
  return { github, context, core, calls };
}

function mergedPR(number, overrides = {}) {
  return {
    number,
    html_url: `https://github.com/adobecom/federal/pull/${number}`,
    merged_at: '2026-10-21T00:00:00Z',
    merge_commit_sha: `merge-${number}`,
    base: { ref: 'stage', repo: { full_name: 'adobecom/federal' } },
    ...overrides,
  };
}

test('creates a stage-to-main PR with sorted, deduplicated merged PR links', async () => {
  const state = fixture({
    commits: [{ sha: 'merge-257' }, { sha: 'merge-256' }],
    prs: [mergedPR(257), mergedPR(256)],
  });
  await createReleasePR(state);
  assert.deepEqual(state.calls.created, [{
    owner: 'adobecom',
    repo: 'federal',
    base: 'main',
    head: 'stage',
    title: '[Release] Stage to Main',
    body: '- https://github.com/adobecom/federal/pull/256\n- https://github.com/adobecom/federal/pull/257',
  }]);
  assert.equal(state.calls.updated.length, 0);
  assert.equal(state.calls.warnings.length, 0);
});

test('updates an existing release PR rather than creating another', async () => {
  const state = fixture({ prs: [mergedPR(256)], existing: [{ number: 259 }] });
  await createReleasePR(state);
  assert.equal(state.calls.created.length, 0);
  assert.equal(state.calls.updated.length, 1);
  assert.equal(state.calls.updated[0].pull_number, 259);
  assert.equal(state.calls.updated[0].title, '[Release] Stage to Main');
  assert.equal(state.calls.updated[0].body, '- https://github.com/adobecom/federal/pull/256');
});

test('excludes unmerged PRs, other targets, other repositories and merges outside the comparison', async () => {
  const state = fixture({
    prs: [
      mergedPR(256),
      mergedPR(257, { merged_at: null }),
      mergedPR(258, { base: { ref: 'main', repo: { full_name: 'adobecom/federal' } } }),
      mergedPR(259, { base: { ref: 'stage', repo: { full_name: 'adobecom/another' } } }),
      mergedPR(260),
    ],
  });
  await createReleasePR(state);
  assert.equal(state.calls.created[0].body, '- https://github.com/adobecom/federal/pull/256');
});

test('does not create a PR when stage has no commits ahead of main', async () => {
  const state = fixture({ commits: [] });
  await createReleasePR(state);
  assert.equal(state.calls.created.length, 0);
  assert.equal(state.calls.updated.length, 0);
  assert.equal(state.calls.associated.length, 0);
  assert.match(state.calls.notices[0], /no commits to release/);
});

test('paginates the commit comparison beyond 100 commits', async () => {
  const commits = Array.from({ length: 101 }, (_, index) => ({ sha: `merge-${index}` }));
  const state = fixture({ commits, prs: [mergedPR(100)] });
  await createReleasePR(state);
  assert.deepEqual(state.calls.comparisons.map((call) => call.page), [1, 2]);
  assert.ok(state.calls.comparisons.every((call) => call.basehead === 'main...stage'));
  assert.equal(state.calls.associated.length, 101);
  assert.equal(state.calls.created[0].body, '- https://github.com/adobecom/federal/pull/100');
});

test('warns when changes have no associated merged stage PRs', async () => {
  const state = fixture();
  await createReleasePR(state);
  assert.equal(state.calls.warnings.length, 1);
  assert.match(state.calls.created[0].body, /No merged PRs found/);
});

test('propagates GitHub API errors instead of reporting success', async () => {
  const state = fixture({ prs: [mergedPR(256)] });
  state.github.rest.pulls.create = async () => { throw new Error('Permission denied'); };
  await assert.rejects(createReleasePR(state), /Permission denied/);
  assert.equal(state.calls.notices.length, 0);
});
