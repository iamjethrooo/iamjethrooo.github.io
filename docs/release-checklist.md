# Portfolio v2.0 release checklist

## Accepted external résumé outage — October 29, 2026

The owner confirms an external RxResu.me publishing outage and explicitly accepts it as nonblocking for the single local Portfolio v2.0 commit. Résumé availability is temporarily deferred. The last requests returned HTTP 404 for the résumé page and PDF endpoint; current remote availability cannot be verified. Earlier successful download/link results below describe prior observations, not current availability.

Both approved résumé corrections were previously verified: .NET 8 changed to .NET 10 only in Summary and the Earnings Tracker technology line. The previously generated PDF was confirmed to contain exactly those two text replacements, fit one page, retain the portfolio hyperlink, and render without clipping or overlap. This task preserves the existing résumé links and does not generate a replacement or introduce another host. No additional RxResu.me requests are required for this local commit.

The broken résumé links remain a separate release concern under PRO-80/PRO-83. Before production deployment, resolve them through service recovery, a separately approved fallback, or explicit acceptance of the remaining limitation. This exception does not claim working URLs or authorize publication. The owner authorizes one reviewed local commit only; no push, deployment, safeguard restoration, history rewrite or original-checkout modification.

Updated October 29, 2026 (Asia/Manila). This is a local candidate for the existing portfolio. No commit, push, deployment, production routing change or safeguard restoration is authorized by migration. See [the migration comparison](portfolio-migration.md), [implementation audit](portfolio-audit.md) and [privacy safeguards](privacy-remediation.md).

## Release identity and safeguards

| Item | Value |
| --- | --- |
| Repository / baseline | `iamjethrooo/iamjethrooo.github.io` / `d1367658489d0406659d75936e41fe2f17065455` |
| Candidate branch | `codex/portfolio-v2`, uncommitted local changes |
| Existing project / team | `jethroestangki` / `iamjethrooos-projects` |
| Production URL and canonical | `https://jethroestangki.vercel.app/` |
| Last verified production hotfix | READY `dpl_6E4okD5QYSTq72Jg8v8aT99FofSL`; migration does not replace it |
| Build | `npm ci`, `npm run build`, Vite, `dist/`, Node 24 |
| GitHub Pages hold | Workflow-based publishing; do not restore branch publishing |
| Vercel holds | `autoAssignCustomDomains=false`, `commandForIgnoringBuildStep=exit 0`; do not restore automatically |

## Preserved portfolio decisions

- Exact hero: “I build web applications with a focus on scalability, performance, and clean, maintainable architecture.” Keep C#/.NET positioning.
- Use Projects; feature SLU Election System, Earnings Tracker and Botlog. Snapicorn and Florante at Laura remain public; Hevy Companion stays `published: false`.
- SLU describes personal Figma UI design, a complete rebuild, SQL query/join optimization and overall performance improvement without invented metrics. Keep seven sanitized exports and the three-view gallery.
- Preserve the Business Applications Developer role and substantive IT Adviser/IT Head descriptions. Keep source-grounded project claims, shared résumé destinations, native dialogs, focus restoration, mobile anchors, skip link and reduced-motion CSS.
- Original Figma/private screenshots and unsafe historical assets remain excluded. The owner explicitly approved deferring additional Earnings Tracker screenshots for the initial release on October 29; keep its current card, details and source link without a gallery or placeholder.

## Final local acceptance — October 29, 2026

See [the final acceptance report](portfolio-acceptance.md) for the four-engine/six-width matrix, verified accessibility fixes, 48 zero-violation axe scans, mobile Lighthouse, link/PDF checks and fresh privacy results. The report supersedes migration-time browser coverage gaps where tested; it does not approve release deferrals.

Current decision: **Ready for reviewed commit.** See [the exact inventory and final decisions](portfolio-reviewed-commit.md). Current Earnings Tracker labels and both public résumé references now use verified .NET 10. Its screenshot enhancement is explicitly deferred. Remaining manual testing limits are accepted as nonblocking, while their Not Tested status remains accurate. LinkedIn identity and exact destination were verified in the existing authenticated browser. PRO-84/85 stay open; dependency/advisory work and later hosted approval gates remain separate. No staging, commit, push, deployment or safeguard restoration occurred.

## Local verification and remaining acceptance

Use a clean install, lint, separate TypeScript check, production build and `node scripts/verify-election-assets.mjs public dist`. No automated application test suite is configured. Exercise privacy-gate rejection cases with disposable harmless fixtures outside the repository. Inspect public/dist paths and hashes, metadata, every fragment target, local image URLs and source/résumé destinations. Check 1440/768/390/320px layouts and native dialog/gallery keyboard behavior. Record actual results and environment limits in the migration comparison.

| Issue | Remaining release work |
| --- | --- |
| PRO-80 | Current .NET 10 claims reconciled; two owner-approved public résumé corrections verified in HTML/PDF. LinkedIn identity/destination verified. Current availability deferred for local commit due to accepted external RxResu.me outage; resolve or explicitly accept broken links before production. Keep publication approval separate. |
| PRO-81 | Additional Earnings Tracker screenshots explicitly deferred as nonblocking; no new capture task. Seven SLU exports unchanged; Hevy hidden. |
| PRO-82 | Existing four-engine/six-width acceptance retained. Owner accepts unperformed screen-reader, native Safari/full link tabbing, real zoom/OS-motion and physical-device checks as nonblocking. They remain Not Tested; no full WCAG conformance claim. |
| PRO-83 | Review exact candidate diff, then separately approve commit, publication and hosted verification. Keep existing milestone/dependencies. |
| PRO-84 | Remains open for GitHub Support historical-reference/cache/object cleanup and unresolved Vercel historical erasure. GitHub ticket #4922678 is open; Vercel request was cancelled. This is distinct from safe local/production assets. |
| PRO-85 | Remains open for current dependency/advisory reassessment and necessary fixes on clean ancestry. Migration does not remediate dependencies or merge obsolete bot heads. |

## Eventual release sequence — requires later approval

1. Finish or explicitly accept the remaining content/evidence/browser gates. Review the full diff and migration allowlist; confirm privacy gates and dependency-risk disposition. Never import old Git objects or commit private evidence.
2. Obtain approval for the exact local commit. Stage only reviewed files and inspect the staged diff. Migration leaves the index empty.
3. Plan an explicit publication/preview and safeguard procedure in the same existing project. Both Vercel holds intentionally prevent normal automatic release; do not change them merely to test migration. A push is externally visible and needs approval even when builds are ignored.
4. After separately approved publication, verify exact SHA/deployment ID, effective Vite/build/dist/Node settings, HTTPS, assets/MIME, metadata/crawler/social rendering, résumé/source/demo links, console/network and keyboard/mobile behavior. Verify all seven hosted image hashes, especially the ordinary legacy PNG URL; inspect excluded paths without printing private bodies.
5. For verification before traffic, separately approve a staged Production build with domains unassigned, verify its immutable URL, then approve promotion of that exact build. Preview promotion triggers a production rebuild and needs fresh verification. Avoid unplanned duplicate master cutovers. Preserve the existing production domain.
6. Agree an exact privacy-reviewed, plan-eligible safe recovery target before production approval. Never restore pre-remediation builds or revert sanitization. A source revert is a separate reviewed commit/push/build. Any routing recovery or restoration of auto-assignment/build controls requires approval.

The historical audit records earlier verification; it does not authorize current publication or certify untested release criteria. PRO-80/82 remain blockers of PRO-83, PRO-81 retains its related evidence decision, and PRO-84/85 remain open.
