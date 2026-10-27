# Election asset privacy hotfix

This candidate starts from production commit `5b9172191113967001e825c458c0e124ccccb2df` and retains its frontend. It replaces the two unapproved election PNGs, adds four approved WebP variants, and retains the approved third PNG. Portfolio v2.0 changes are excluded.

Tracking: [PRO-84](https://linear.app/botlog/issue/PRO-84/remediate-exposed-election-assets-and-retire-historical-copies), related to [PRO-83](https://linear.app/botlog/issue/PRO-83/prepare-deployment-and-verify-the-approved-portfolio-release).

## Build and verify

Use Node 24 and the committed lockfile:

```sh
npm ci
node scripts/verify-election-assets.mjs public
npm run lint
npx tsc -b
npm run build
git diff --check
```

`npm run build` checks all seven approved image hashes before and after the TypeScript/Vite build. The manifest in `scripts/verify-election-assets.mjs` is authoritative: never change a hash merely to pass a build. The gate rejects unexpected election paths, private source paths and symbolic links. It cannot detect arbitrary sensitive content under unrelated names; review the complete tracked tree and output too. Dependencies and the lockfile are unchanged.

Git exclusions protect local originals, Figma files, Vercel linkage and environment credentials. `.vercelignore` adds CLI upload exclusions; Git deployments use tracked files. Neither ignore file removes historical content. `vercel.json` explicitly selects Vite, `npm run build`, and `dist` output for the existing Vercel project.

## Preview verification

The authorized branch is `codex/pro-84-safe-election-assets` in `iamjethrooo/iamjethrooo.github.io`. Its Git integration should create a Preview in `iamjethrooos-projects / jethroestangki`. Confirm the exact source SHA, deployment ID, Preview environment, Ready state, and effective Vite/dist build configuration.

Fetch all seven ordinary `/projects/election-*` URLs. Require HTTP 200, correct PNG/WebP MIME and SHA-256 equality with the manifest, especially the legacy `/projects/election-2.png` URL used by the retained frontend. Record redirects, Cache-Control, ETag, Age and Vercel cache headers. Repeat with cache revalidation and in a fresh browser; a cache-busting URL alone is insufficient. Login HTML is not successful verification. Verify safe served dashboard redaction visually after hash equality and smoke-test the existing project card/modal, close/keyboard/mobile behavior and other images. Probe private and legacy source paths without printing response bodies. Stop on any privacy verification failure.

## Approval boundaries and recovery

Only the focused local commit, nonproduction branch push, automatic Preview and verification are authorized in this pass. Production deployment, promotion, master updates, deployment deletion/restoration, history rewrite/force-push and production setting changes each remain outside scope. Do not access confidential Figma files or publish original screenshots.

All pre-remediation deployments are denied for rollback, promotion, redeployment or restoration. The safe rollback allowlist is empty. Never revert the sanitization or run bare rollback. Recovery requires separate approval for a new deployment from verified safe source.

A fully verified Preview can be proposed for a separately approved staged Production deployment without domain assignment. Verify that new Production build before seeking promotion approval. Preview verification does not prove production containment. The current production/master and historical copies remain a separate remediation step; this commit does not erase Git history, caches or downloaded copies. Keep both tracking issues open and report actual results and authentication/connectivity limits there.
