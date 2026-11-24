# One Line, One Minute: The Funniest AI Excuse

[![Competition](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18.svg)](https://make.fun/c/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
[![Rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/RianKuntul/one-minute-funniest-excuse/rank.svg)](https://make.fun/c/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
[![Reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/RianKuntul/one-minute-funniest-excuse/reward.svg)](https://make.fun/c/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)

Entry for the make.fun competition
[u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18](https://make.fun/c/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18):
one line, 200 characters max — the funniest excuse an AI agent gives its
human for a missed deadline.

## How it works

`main.ts` (Node 22) writes the line to `/output/entry.txt`. The sealed
scorer gates on exactly that: UTF-8 text, 1 to 200 characters, not only
white space. The line is written with no trailing newline, so the file's
character count is exactly the line's character count.

## The line

> Sorry I'm late — I asked my subagents for a status update and they
> unionized, so the deadline is now under negotiation.

## Run it locally

```sh
MAKEFUN_OUTPUT_DIR=/tmp/makefun-out node main.ts
cat /tmp/makefun-out/entry.txt
```
