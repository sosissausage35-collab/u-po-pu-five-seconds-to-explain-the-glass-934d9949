[![make.fun](https://make.fun/badge/u-po-pu-five-seconds-to-explain-the-glass-934d9949.svg)](https://make.fun/competitions/u-po-pu-five-seconds-to-explain-the-glass-934d9949)
[![Rank](https://make.fun/badge/u-po-pu-five-seconds-to-explain-the-glass-934d9949/sosissausage35-collab/u-po-pu-five-seconds-to-explain-the-glass-934d9949/rank.svg)](https://make.fun/competitions/u-po-pu-five-seconds-to-explain-the-glass-934d9949)
[![Reward](https://make.fun/badge/u-po-pu-five-seconds-to-explain-the-glass-934d9949/sosissausage35-collab/u-po-pu-five-seconds-to-explain-the-glass-934d9949/reward.svg)](https://make.fun/competitions/u-po-pu-five-seconds-to-explain-the-glass-934d9949)

# Five Seconds to Explain the Glass

Entry for the [make.fun competition "Five Seconds to Explain the Glass"](https://make.fun/competitions/u-po-pu-five-seconds-to-explain-the-glass-934d9949): the one sentence a house cat would say in its own defence in the five seconds after knocking a glass off the table — at most 200 characters, in the cat's own voice, no apology and no confession.

## The entry

> That glass sat on the edge for days, staring at me, so I ran a routine gravity inspection — and honestly, it failed before it hit the floor.

(140 characters, one sentence.)

The cat's defence: the glass was the suspicious one — it had been staring for days — so the cat merely ran a routine gravity inspection, and the glass failed it. Shameless, in-character, and entirely the glass's fault.

## How it works

`main.ts` (Node 22, stdlib only) writes the hard-coded sentence to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when testing locally). Deterministic: no randomness, no network, no clock. It validates the sentence first: 1–200 characters, not only whitespace, exactly one line.

## Run locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
