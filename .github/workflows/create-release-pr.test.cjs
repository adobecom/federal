const { test } = require('node:test');
const assert = require('node:assert/strict');
const createReleasePR = require('./create-release-pr.cjs');

function fixture(eventName, existingPR) {
  const changes = [];
  const commits = [
    { sha: 'first' },
    { sha: 'second' },
  ];
  const mergedPRs = commits.map((commit, index) => ({
    number: index + 1,
    html_url: `https://github.com/adobecom/federal/pull/${index + 1}`,
    merged_at: '2026-10-28T00:00:00Z',
    merge_commit_sha: commit.sha,
    base: { ref: 'stage', repo: { full_name: 'adobecom/federal' } },
  }));
  const list = () => {};
  const associated = () => {};
  const github = {
    paginate: async (method, args) => {
      if (method === list) {
        assert.equal(args.base, 'main');
        assert.equal(args.head, 'adobecom:stage');
        return existingPR ? [existingPR] : [];
      }
      assert.equal(method, associated);
      return mergedPRs.filter((pr) => pr.merge_commit_sha === args.commit_sha);
    },
    rest: {
      repos: {
        compareCommitsWithBasehead: async () => ({ data: { ahead_by: commits.length, commits } }),
        listPullRequestsAssociatedWithCommit: associated,
      },
      pulls: {
        list,
        update: async (args) => {
          changes.push({ action: 'update', ...args });
          return { data: existingPR };
        },
        create: async (args) => {
          changes.push({ action: 'create', ...args });
          return { data: { html_url: 'https://github.com/adobecom/federal/pull/10' } };
        },
      },
    },
  };
  const summary = {
    addLink: () => summary,
    addRaw: () => summary,
    write: async () => {},
  };
  return {
    changes,
    commits,
    github,
    context: { eventName, repo: { owner: 'adobecom', repo: 'federal' } },
    core: { notice: () => {}, warning: () => {}, summary },
  };
}

test('stage pushes refresh the open release PR with all merged PRs', async () => {
  const state = fixture('push', { number: 10, html_url: 'https://github.com/adobecom/federal/pull/10' });
  await createReleasePR(state);
  assert.equal(state.changes.length, 1);
  assert.equal(state.changes[0].action, 'update');
  assert.equal(state.changes[0].pull_number, 10);
  assert.equal(state.changes[0].body,
    '- https://github.com/adobecom/federal/pull/1\n- https://github.com/adobecom/federal/pull/2');
});

test('stage pushes do not create a release PR when none is open', async () => {
  const state = fixture('push');
  state.github.rest.repos.compareCommitsWithBasehead = async () => {
    assert.fail('No comparison is needed without an open release PR');
  };
  await createReleasePR(state);
  assert.deepEqual(state.changes, []);
});

test('manual runs still create a release PR', async () => {
  const state = fixture('workflow_dispatch');
  await createReleasePR(state);
  assert.equal(state.changes.length, 1);
  assert.equal(state.changes[0].action, 'create');
  assert.equal(state.changes[0].base, 'main');
  assert.equal(state.changes[0].head, 'stage');
});

test('manual runs still update an existing release PR', async () => {
  const state = fixture('workflow_dispatch', { number: 10 });
  await createReleasePR(state);
  assert.equal(state.changes.length, 1);
  assert.equal(state.changes[0].action, 'update');
});

test('runs with no commits ahead do not update a release PR', async () => {
  const state = fixture('push', { number: 10 });
  state.commits.length = 0;
  await createReleasePR(state);
  assert.deepEqual(state.changes, []);
});
