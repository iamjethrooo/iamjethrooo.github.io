# Portfolio v2.0 clean-history migration

Subsequent work: [final local visual/accessibility/browser acceptance](portfolio-acceptance.md) records focused fixes, broader browser coverage and remaining content/manual decisions. The evidence below records the migration-time state.

Verified October 29, 2026 (Asia/Manila). This candidate is ready for final visual/browser acceptance, with the release gaps below still open. No commit, staging, push, deployment or infrastructure change occurred.

## Identity and preservation

- Fresh GitHub single-branch, no-tags clone; approved HEAD `d1367658489d0406659d75936e41fe2f17065455`, branch `codex/portfolio-v2`.
- Original checkout: old `master` at `5b9172191113967001e825c458c0e124ccccb2df`; index empty. All 52 preserved file/deletion states, HEAD, index bytes, status and user refs match the prior preservation snapshot before and after migration. Cross-chat Codex-managed refs are excluded exactly as in the prior plan.
- Original untracked and ignored work remains in place. No original file, branch, index, private screenshot or Figma document was changed. No original build/install was run.
- No old Git directory, object, commit, branch, tag or patch was imported. The clean clone has a disabled push URL and `push.default=nothing` as local safeguards.

## File comparison and reviewed allowlist

26 files were transferred: 14 modifications and 12 additions relative to the clean baseline. Two intended deletions were applied. Thirteen overlapping hotfix paths were reviewed and retained from clean history; the privacy document was then reconciled. Eleven other preserved files already matched the clean baseline.

Final candidate diff: **15 modified, 13 added, 2 deleted** (30 paths). The additional new file is this migration report. All 52 original states are accounted for; no conflicts or missing portfolio changes remain. Text equivalence accounts for LF/CRLF; binary transfers retain exact source SHA-256 hashes in the local controlled manifest.

| Path | Migration decision |
| --- | --- |
| `README.md` | Transferred intended modification; reconciled as described below |
| `index.html` | Transferred intended modification |
| `src/App.tsx` | Transferred intended modification |
| `src/index.css` | Transferred intended modification |
| `src/components/About.tsx` | Transferred intended modification |
| `src/components/BackToTop.tsx` | Transferred intended modification |
| `src/components/Contact.tsx` | Transferred intended modification |
| `src/components/Footer.tsx` | Transferred intended modification |
| `src/components/Home.tsx` | Transferred intended modification |
| `src/components/Navbar.tsx` | Transferred intended modification |
| `src/components/Projects.tsx` | Transferred intended modification |
| `src/components/Timeline.tsx` | Transferred intended modification |
| `src/components/TechStack.tsx` | Transferred intended addition |
| `src/data/projects.ts` | Transferred intended modification; reconciled as described below |
| `src/data/timeline.ts` | Transferred intended modification |
| `src/data/profile.ts` | Transferred intended addition |
| `public/robots.txt` | Transferred intended addition |
| `public/sitemap.xml` | Transferred intended addition |
| `public/projects/botlog-1.webp` | Transferred intended addition |
| `public/projects/botlog-1-thumb.webp` | Transferred intended addition |
| `public/projects/fal.webp` | Transferred intended addition |
| `public/projects/fal-thumb.webp` | Transferred intended addition |
| `public/projects/snapicorn-1.webp` | Transferred intended addition |
| `public/projects/snapicorn-1-thumb.webp` | Transferred intended addition |
| `docs/portfolio-audit.md` | Transferred intended addition; reconciled as described below |
| `docs/release-checklist.md` | Transferred intended addition; reconciled as described below |
| `src/App.css` | Applied intended deletion |
| `src/components/Loader.tsx` | Applied intended deletion |
| `.gitignore` | Retained verified clean hotfix |
| `.vercelignore` | Retained verified clean hotfix |
| `package.json` | Retained verified clean hotfix |
| `vercel.json` | Retained verified clean hotfix |
| `scripts/verify-election-assets.mjs` | Retained verified clean hotfix |
| `docs/privacy-remediation.md` | Retained verified clean hotfix; reconciled as described below |
| `public/projects/election-1.png` | Retained verified clean hotfix |
| `public/projects/election-1.webp` | Retained verified clean hotfix |
| `public/projects/election-2.png` | Retained verified clean hotfix |
| `public/projects/election-2.webp` | Retained verified clean hotfix |
| `public/projects/election-2-thumb.webp` | Retained verified clean hotfix |
| `public/projects/election-3.png` | Retained verified clean hotfix |
| `public/projects/election-3.webp` | Retained verified clean hotfix |

Already equivalent and left unchanged: `eslint.config.js`, `package-lock.json`, `public/logo.png`, `public/projects/botlog-1.png`, `public/projects/fal.png`, `public/projects/snapicorn-1.png`, `src/main.tsx`, `tsconfig.app.json`, `tsconfig.json`, `tsconfig.node.json`, `vite.config.ts`.

## Deliberate differences and exclusions

- `src/data/projects.ts`: Make the owner-confirmed overall performance improvement explicit; retain Figma/full-rebuild/query/join work and all project decisions.
- `README.md`: Retain portfolio maintenance documentation; replace obsolete deployment/history status with clean baseline and active holds.
- `docs/portfolio-audit.md`: Preserve detailed decisions and historical evidence; remove machine-specific evidence locations and mark old deployment state historical.
- `docs/release-checklist.md`: Reconcile historical hotfix procedure with completed rewrite, current holds, all six open issues and pending release acceptance.
- `docs/privacy-remediation.md`: Retain clean privacy requirements and manifest reference; replace obsolete authorization/status with current vendor limits and local-only scope.

The original long privacy plan is preserved in the untouched source checkout. Its superseded hotfix authorization, old deployment state and rewrite instructions were not substituted for current clean-history guidance. The useful portfolio audit and decisions were retained; machine-specific temporary evidence locations were removed from publishable documentation.

Excluded without copying or publication: old Git metadata/history/checkpoints, ignored private originals, confidential Figma documents, credentials/environment files, original node_modules/dist outputs, local Vercel/editor linkage, restricted recovery materials and temporary audit artifacts. No unclear private asset was promoted. The six non-election WebP/thumbnail additions retain the established project evidence and were reviewed; no new screenshot content was invented.

## Verification results

| Check | Result |
| --- | --- |
| Clean dependency install | PASS: `npm ci`, 171 packages; lockfile unchanged. Network escalation was needed after sandbox DNS failures. |
| Lint | PASS: `npm run lint` |
| TypeScript | PASS: separate local `tsc -b` |
| Production build | PASS: `npm run build`, Vite 8.0.11; both privacy gates pass. One initial concurrent check attempt exited without diagnostics; the sequential build passed without source changes. |
| Automated application tests | No configured test script/framework; no application suite claimed. |
| Automated privacy cases | PASS: valid seven-image fixture accepted; changed bytes, missing asset, extra election file and private path rejected. Fixtures stayed outside source/public/dist. |
| Approved screenshots | PASS: 7/7 in public and 7/7 in dist match the unchanged privacy manifest. |
| History privacy and integrity | PASS: four denied image blobs absent from reachable and stored objects in fresh clone; `git fsck --full --no-reflogs` passes. |
| Output privacy | PASS: 19 public / 22 dist files; no known denied image hashes, private/Figma/env/recovery paths or symlinks. Focused secret-pattern scan: no matches. |
| Local HTTP | PASS: all 22 build files returned 200, matching disk bytes; PNG/WebP MIME correct. |
| Canonical metadata | PASS: canonical, OG/Twitter images, Person URL, robots and sitemap use `https://jethroestangki.vercel.app/`. |
| Responsive/browser | PASS at 1440/768/390/320 × 1000: correct five cards, hidden Hevy, exact hero, no horizontal overflow; 20 dialog open/Escape/focus/scroll checks and 12 gallery keyboard selections pass. |
| Basic accessibility | PASS: skip link focuses main, Enter opens education, labeled native dialogs, initial Close focus and trigger restoration; no background controls reached in sampled Tab/Shift+Tab checks. Native focus can pass through browser chrome/body. |
| Visual review | Settled mobile/desktop hero and experience, desktop project cards and mobile sanitized dashboard inspected. No migration-induced visual/functional defect identified. |
| Console / whitespace | No captured warning/error logs; `git diff --check` passes. |

Public destination checks are read-only availability checks, not end-to-end tests of those external applications:

| Destination | Result |
| --- | --- |
| resume | HTTP 200 |
| resume pdf | HTTP 200; application/pdf and PDF signature confirmed |
| github | HTTP 200 |
| linkedin | HTTP 999; automation blocked, manual verification remains |
| earnings source | HTTP 200 |
| botlog source | HTTP 200 |
| snapicorn source | HTTP 200 |
| snapicorn demo | HTTP 200 |
| florante source | HTTP 200 |

These checks preserve the existing theme, C#/.NET positioning, exact hero, Projects heading, all five published cards, approved SLU claims and seven exports, and substantive professional/leadership descriptions. No unrelated redesign, dependency update or feature was added. Hash equality carries forward the previously approved redaction/metadata review; it is not a new forensic audit.

## Remaining release gates and next task

- PRO-80: reconcile résumé technology wording and manually verify LinkedIn. Résumé HTML/PDF links work; no external résumé was edited.
- PRO-81: current approved Earnings Tracker screenshots or explicit owner-approved deferral. Hevy stays unpublished.
- PRO-82: final owner visual acceptance; screen reader, actual OS reduced motion, real browser zoom, Firefox/Safari/WebKit or explicit coverage limits, physical touch if available, axe and mobile Lighthouse. Current responsive checks are emulation, not physical-device or compliance proof.
- PRO-85 stays open: dependency/advisory reassessment and any necessary fixes require their own focused work on clean ancestry. Migration preserved package.json/package-lock and did not remediate dependency risk.
- PRO-83: eventual reviewed commit, separately approved publication/preview, effective hosted build/config/privacy proof, safe recovery target and exact production approval. The local candidate has no hosted preview.
- PRO-84 stays open: GitHub Support #4922678 remains open for historical reference/cache/object cleanup; Vercel Support request was cancelled and historical permanent erasure is unverified. Do not treat vendor cleanup as completed.

GitHub Pages workflow publishing, disabled Vercel production-domain auto-assignment and the `exit 0` ignored-build hold were not changed. Production was not modified. Restoring any hold, committing, pushing, uploading or deploying requires later explicit approval.

**Recommended next task:** Run final Portfolio v2.0 visual/accessibility/browser acceptance from this clean clone, resolve or explicitly defer the résumé/Earnings Tracker evidence gaps, and record the dependency-risk disposition before proposing a reviewed commit. Keep all deployment holds and the original checkout untouched.

See [the release checklist](release-checklist.md) for the smallest approved release sequence. Detailed controlled manifest, source snapshots, hashes, gate logs and browser/link summaries remain local outside the repository.
