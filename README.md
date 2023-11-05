# Typescript Module Template

Based on Matt Pocock yt video with config borrowed from [ts-reset](https://github.com/total-typescript/ts-reset).

## 1: what

2 github workflows:

Main workflow runs when pushing work to "development" branch.

Publish workflow runs when merging to main. Include a changeset to automatically create a PR with bumped version which publishes to npm when merged.

With this configuration action still runs when merging to main without including a changeset.

### including a changeset

Run `pnpm changeset` and enter your release info.
