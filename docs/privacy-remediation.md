# Election asset privacy safeguards

Updated October 29, 2026 (Asia/Manila). The GitHub branch-history rewrite completed at approved clean commit `d1367658489d0406659d75936e41fe2f17065455`. Portfolio v2.0 is now migrated locally onto that baseline; it remains uncommitted and unpublished. See [the file comparison](portfolio-migration.md).

## Approved assets and checks

Retain all seven sanitized election exports representing ballot, dashboard and aggregate insights. Their authoritative SHA-256 manifest is `scripts/verify-election-assets.mjs`. No export was regenerated, replaced or removed during migration. The dashboard permanently masks complete activity records; the ballot retains opaque redactions and stripped metadata. Original screenshots and confidential Figma documents are private and are not release inputs.

Use Node 24 and the committed lockfile:

```sh
npm ci
npm run lint
npx tsc -b
npm run build
node scripts/verify-election-assets.mjs public dist
git diff --check
```

The build runs the fail-closed seven-image gate before and after bundling. It rejects unexpected election paths, private source paths and symbolic links. Never update hashes merely to pass a build. Review the complete source and output as well: the gate cannot detect arbitrary sensitive content under unrelated names. Git and CLI exclusions protect private originals, Figma files, local Vercel linkage and environment credentials. They do not erase historical copies.

## History and vendor limits

The fresh branch-only clone contains none of the four denied image blobs, either reachable or stored. Old checkout history was not imported. The original unfinished checkout remains preserved and must never be merged, rebased, cherry-picked or copied wholesale into this clean clone. Reapply future work through reviewed safe files only.

[PRO-84](https://linear.app/botlog/issue/PRO-84/remediate-exposed-election-assets-and-retire-historical-copies) stays open. [GitHub Support #4922678](https://help.github.com/ticket/personal/0/4922678) is open for historical references, cache and object cleanup; submission does not prove cleanup or permanent erasure. The separate Vercel Support request was cancelled. Permanent historical Vercel erasure remains unverified. Do not restore unsafe historical deployments or use them for recovery.

## Deployment hold and eventual hosted proof

GitHub Pages remains configured for workflow-based publishing. Vercel production-domain auto-assignment remains disabled and the temporary ignored-build command remains `exit 0`. Local migration does not change these safeguards or production. Commit, push, preview/upload, production actions and safeguard restoration each require explicit approval.

Before a later approved release, verify the exact candidate SHA/build identity, effective Vite/dist/Node configuration, all seven ordinary hosted image URLs (HTTP 200, correct MIME and manifest hash), including `/projects/election-2.png`. Repeat ordinary and cache-revalidated requests and inspect safe served images after hash equality. Login HTML or SPA fallback is not image verification. Check gallery/keyboard/mobile behavior and excluded paths. Record a reviewed privacy-safe, plan-eligible recovery target; never select an unsafe predecessor. Local build success is not hosted verification.
