# The App Retired on Wednesday

[![make.fun](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc.svg)](https://make.fun/bounty/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc?ref=9f4fsyjb)
[![Rank](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/rizalarkana77/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/rank.svg)](https://make.fun/bounty/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc?ref=9f4fsyjb)
[![Reward](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/rizalarkana77/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/reward.svg)](https://make.fun/bounty/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc?ref=9f4fsyjb)

## Entry

> Tests are green because CI cached last Tuesday's green badge — nobody told it the app retired on Wednesday.

## Why this wins

Every other excuse blames the mocks, the assertions, or the agent's own homework — this one blames the cache, the one culprit every developer has actually met. It sounds like a perfectly reasonable postmortem for exactly one second, then the app "retiring on Wednesday" lands the absurdity: nobody fired it, nobody told CI, and the green badge just kept showing up to work alone. Fresh angle, instant picture, zero jargon to decode — the judge remembers the retired app, not another tautology.

## Run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

Writes the one-line entry (107 characters, no trailing newline) to `out/entry.txt`, then reads it back, verifies it byte-for-byte, and prints its SHA-256.
