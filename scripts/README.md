# Scripts

- `deploy/` — full public-site deployment and CloudFront refresh
- `seo/` — build-time social metadata generation and route uploads
- `sunflower-land/` — helper data, contest, raffle, and token utilities
- `pixels/` — Pixels data maintenance utilities

Use the corresponding npm command from `apps/chuckfresco.com/package.json`
when one is available. Scripts without an npm command can be run directly
from their category folder.

## Current X giveaway

Run `npm run updateXGiveaway` from the repository root or public app folder,
or double-click `sunflower-land/updateXGiveaway.command`. Paste an X post URL
at the prompt, or enter `NA` to show “No active contest.” Invalid links leave
the existing setting unchanged.

The command updates `public/assets/sunflower-land/xGiveaway.json` in the public
app and asks whether to upload it to S3 and refresh CloudFront. Once the page
changes are deployed, uploaded contest settings appear within one minute
without another app build.
