# Portfolio v2.0 final local acceptance

## Accepted external résumé outage — October 29, 2026

The owner confirms an external RxResu.me publishing outage and explicitly accepts it as nonblocking for the single local Portfolio v2.0 commit. Résumé availability is temporarily deferred. The last requests returned HTTP 404 for the résumé page and PDF endpoint; current remote availability cannot be verified. Earlier successful download/link results below describe prior observations, not current availability.

Both approved résumé corrections were previously verified: .NET 8 changed to .NET 10 only in Summary and the Earnings Tracker technology line. The previously generated PDF was confirmed to contain exactly those two text replacements, fit one page, retain the portfolio hyperlink, and render without clipping or overlap. This task preserves the existing résumé links and does not generate a replacement or introduce another host. No additional RxResu.me requests are required for this local commit.

The broken résumé links remain a separate release concern under PRO-80/PRO-83. Before production deployment, resolve them through service recovery, a separately approved fallback, or explicit acceptance of the remaining limitation. This exception does not claim working URLs or authorize publication. The owner authorizes one reviewed local commit only; no push, deployment, safeguard restoration, history rewrite or original-checkout modification.

Reviewed October 29, 2026 (Asia/Manila), on `codex/portfolio-v2`, base/HEAD `d1367658489d0406659d75936e41fe2f17065455`.

**Ready for reviewed commit.** Final owner decisions and fresh verification are recorded in [the reviewed commit report](portfolio-reviewed-commit.md). The résumé now uses the verified .NET 10 version, Earnings Tracker screenshots are explicitly deferred, and remaining manual coverage limitations are accepted as nonblocking. LinkedIn identity and destination were verified in the existing authenticated browser. Earlier decision paragraphs below are historical acceptance findings, superseded by that report. No staging, commit, push, deployment, release or infrastructure restoration occurred; only the two explicitly authorized external résumé corrections were saved.

## Acceptance matrix

Pass applies only to the stated checks. Deferred means intentionally outside this local task; the final report identifies the owner-approved screenshot deferral and accepted testing limits. Not Tested means coverage remains unavailable or incomplete, even when accepted as nonblocking.

| Area | Status | Evidence / remaining limit |
| --- | --- | --- |
| Recruiter-facing visual review | Pass | Hero, employment/leadership, projects, galleries, skills, contact/footer inspected in rendered captures. Approved design retained. |
| Approved content | Pass | Exact hero, Projects heading, SLU → Earnings Tracker → Botlog; five public cards; Hevy unpublished. Substantive IT Head/IT Adviser descriptions preserved. |
| Responsive layout | Pass | Four engines × six widths; no page/modal horizontal overflow. |
| Chrome, Firefox, Edge keyboard journey | Pass | Sequential tabbing/focus outlines, skip link, education disclosure, project activation and modal controls. |
| WebKit layout, navigation, galleries | Pass | Same viewport matrix; pointer and focused-control keyboard interactions work. |
| WebKit complete sequential link navigation | Not Tested | Windows test port skips native links, also in a minimal fixture; focused skip-link activation works. Native Safari/full keyboard access remains unverified. |
| Gallery modality and focus restoration | Pass | 120 keyboard dialog cases, 72 gallery selections; pointer/thumbnail regression and background inertness checks pass. |
| Names, headings, landmarks, alternatives | Pass | One h1, ordered headings, named navigation/main/footer/sections/dialogs; descriptive image alternatives; screenshot chooser group labelled. |
| Text/UI contrast, distinguishable links, focus | Pass | Corrected header contrast/name; final axe/Lighthouse checks and inspected focus/selected states. No full compliance claim. |
| Mobile target dimensions | Pass | No sampled visible page control below 24×24 CSS px; normal navigation/buttons/close/gallery use at least 44px height. No physical touch claim. |
| Reduced-motion emulation | Pass | All four engines: preference matches, smooth scrolling becomes auto, transitions become 0s. |
| Narrow reflow/text-spacing override | Pass | 320×256 CSS viewport; 390px WCAG text-spacing override including gallery; no horizontal overflow. |
| Real browser zoom / actual OS motion preference | Not Tested | Viewport/media emulation does not establish these. Native browser UI control was unavailable for verified zoom. |
| Screen reader / physical devices / native Safari | Not Tested | Narrator/NVDA/VoiceOver announcements, browse-mode inertness, physical touch and native Safari remain unverified. |
| Automated accessibility | Pass | axe-core 4.14.0: 48 final main/dialog scans, zero violations. Some offscreen dialog contrast remains an automated manual-review item. |
| Mobile Lighthouse | Pass | 13.6.0, simulated 412×823 mobile: performance/accessibility/best practices/SEO 100/100/100/100. Local lab result only. |
| Internal navigation / external links | Pass | Actual section links, Back to top, source/demo/profile popups and résumé controls exercised; contact mailto matches shared profile. |
| Résumé view / PDF delivery | Deferred (external outage) | Earlier successful delivery is historical; current URLs last returned 404. See the accepted exception above. |
| Prior résumé delivery verification | Historical pass | Browser résumé renders; download succeeds as `jethro-estangki.pdf`; fresh HTTP 200/application/pdf and PDF signature. |
| Résumé technology consistency | Pass | Verified `net10.0-windows`; both public résumé references and current portfolio project/skills labels now use .NET 10. Fresh PDF has exactly the two intended text replacements and retains one-page layout. |
| Canonical / social metadata | Pass | Canonical, OG, Twitter image, Person URL, robots and sitemap use existing Vercel origin. PDF Portfolio annotation matches. Actual social crawler rendering not tested. |
| LinkedIn identity/content verification | Pass | Exact configured URL opens the matching Jethro Estangki profile in the existing authenticated browser; public-profile URL, professional headline and portfolio link agree. Anonymous automation previously returned 999. |
| Earnings Tracker screenshots | Deferred | Owner explicitly approved a nonblocking initial-release deferral. Existing text-first card, details, links and empty images array retained without placeholders. |
| Local privacy regression | Pass | Seven hashes unchanged in both trees; no known denied hashes/private source paths; all 22 final output files match local HTTP bytes. |
| Lint / TypeScript / build / whitespace | Pass | Fresh successful checks after final source correction; pre/post-build privacy gates pass. |
| Dependency security reassessment | Deferred | Reported 17 outstanding alerts remain under PRO-85; dependencies unchanged and not reassessed here. |
| Hosted candidate / release / vendor historical cleanup | Deferred | No candidate publication; PRO-83 hosted gates remain. PRO-84 remains open; no Support action or erasure claim. |

## Browsers and viewport coverage

Playwright 1.62.1 controlled local **production build preview**, not the development server. Each engine tested **320, 390, 768, 1024, 1440 and 1920 × 1000 CSS px**. Additional reflow was 320×256; axe ran at 390 and 1440; Lighthouse used 412×823 with simulated throttling.

| Browser / engine on Windows | Version | Result |
| --- | --- | --- |
| Installed Google Chrome / Chromium | 156.0.8078.73 | Layout, navigation, images, dialogs, keyboard, motion and axe pass. |
| Playwright Firefox | 153.0, build 1538 | Same checks pass. |
| Playwright WebKit | 26.5, build 2336 | Layout/modal/gallery/axe and supplementary checks pass; sequential native-link tabbing has the test-port limitation above. |
| Installed Microsoft Edge / Chromium | 156.0.4314.50 | Same checks pass. |

No captured application console warnings/errors, page errors or failed requests in the final matrix. Geist loaded in all engines; computed heading weights are 500/600. Windows WebKit renders visibly lighter than the other engines, while preserving readable hierarchy and fit. Treat this as a nonblocking rendering difference; native Safari appearance is not inferred.

## Recruiter journey and visual evidence

1. **Hero and primary actions — Pass.** Clear C#/.NET identity, restrained hierarchy, readable wrapping, Projects/Résumé actions and quieter GitHub link. Mobile name wraps intentionally; 320px actions stack. Exact sentence remains: “I build web applications with a focus on scalability, performance, and clean, maintainable architecture.”
2. **Experience and leadership — Pass.** Employment precedes projects; dates and role emphasis align on desktop and stack clearly on mobile. IT Adviser technical direction/full rebuild and IT Head deployment/coordination/election operations remain meaningful and visible.
3. **Projects — Pass, with the evidence decision below.** Featured cards align at laptop/desktop widths, stack on tablet/mobile, and retain clear implementation/source/detail hierarchy. SLU accurately states personal Figma design, complete rebuild, SQL query/join optimization and overall performance improvement without invented metrics. Earnings Tracker accurately distinguishes update tooling from pending public distribution. Botlog describes its bot/backend and shows existing Discord evidence, without claiming a completed dashboard.
4. **Details and image galleries — Pass.** All five project dialogs fit; large images retain aspect ratio. SLU ballot/dashboard/insights captions acknowledge redaction and selected position. Small screenshot text at mobile width is illustrative evidence; the surrounding project description remains readable text. Botlog and both secondary-project images decode. No placeholder images or invented screenshots added.
5. **About, skills and destinations — Pass.** Professional Web Forms/SQL Server experience remains distinguished from project technologies. Source/demo/résumé controls reach intended destinations; no outdated portfolio hosting address appears as a primary link.
6. **Contact and footer — Pass.** Email, résumé view/PDF, GitHub and LinkedIn destinations remain consistent across shared data and footer. Mail-client delivery was not tested and no message was sent. LinkedIn verification remains pending.

Accepted local screenshot families include `chrome-1440-01-home`, `chrome-320-01-home`, `chrome-1440-timeline`, `chrome-390-timeline`, `chrome-768-projects`, `chrome-1024-projects`, the three `chrome-1440-slu-*` views, `webkit-390-slu-2`, the Earnings Tracker/Botlog dialogs, settled About/Contact and corresponding Firefox/Edge/WebKit captures. PNGs, raw JSON, regression scripts and Lighthouse reports remain outside this repository/public/dist in the acceptance audit artifact folder. Intermediate long-scroll frames were replaced by settled captures before acceptance.

## Accessibility findings and focused fixes

Applicable checks were guided by [WCAG 2.2](https://www.w3.org/TR/WCAG22/), especially 1.1.1, 1.3.1/2, 1.4.1/3/10/11/12, 2.1.1/2, 2.4.1/3/6/7/11, 2.5.3/8 and 4.1.2. This review does not certify every AA criterion or assistive-technology combination.

| Finding | Classification and disposition |
| --- | --- |
| Header `/ dev` text had 4.12:1 contrast; accessible name omitted visible `/ dev` | Blocking defects, **fixed**: use existing lighter zinc token and include visible wording in accessible name. Final axe/Lighthouse findings clear. |
| WebKit pointer dismissal returned focus to main rather than the original trigger | Blocking defect, **fixed**: store the actual activating button with the selected project instead of relying on `document.activeElement`. Keyboard, pointer and thumbnail paths revalidated. |
| Back to top lay outside landmarks; labelled screenshot chooser lacked a group role | Nonblocking semantic defects, **fixed**: move fixed link inside main and explicitly group screenshot controls. Final best-practice warning/manual ARIA item clears. |
| WebKit Tab skips links and can leave sequential-focus probes offscreen | Application-specific failure **not reproducible**: minimal native-link fixture behaves the same. Do not add forced tabindexes to compensate. Complete native Safari/keyboard-setting coverage separately. [Apple documents Safari's differing link-navigation modes](https://support.apple.com/en-ie/guide/safari/cpsh003/27.0/mac/27), but that is not a native Safari test. |
| One supplemental WebKit click did not leave a dialog mounted after the long Tab sequence | **Not reproducible** on an isolated page and fresh-page text-spacing rerun. No speculative application change. |
| Screen-reader announcements, actual zoom/OS motion and physical touch | **Not Tested**; complete or explicitly accept limits before release. |

Native `showModal()` supplies modality. All 120 keyboard dialog openings initially focus Close; sampled forward/reverse Tab never reaches background controls. Escape and keyboard/pointer Close work; focus returns to the actual trigger; body overflow and pre-dialog scroll position restore. All three SLU selections respond to Enter/Space, decode and update caption/pressed state (72 selections). Seven pointer entry paths per engine, including both thumbnail buttons, also restore focus. Direct background-focus attempts, intercepted background pointer attempts and wheel input outside the modal confirm background inertness and scroll locking. Browser chrome/body focus transitions are distinguished from background page controls.

Sampled page focus outlines are solid 2px; screenshots show visible Close/gallery/skip indicators. Main-page text passes automated contrast, and visible modal text/controls were inspected. Axe's remaining incomplete items concern contrast it could not determine for offscreen dialog content; they are not reported as complete automated coverage. Link purpose is conveyed by placement, labels/icons, button treatment and hover/focus styling rather than inline color alone. No new motion or dependency was introduced.

## Functional checks and content decisions

Actual Chrome clicks open the intended GitHub profile and the Earnings Tracker, Botlog, Snapicorn and Florante at Laura repositories; Snapicorn demo renders. Résumé HTML opens with the expected identity and PDF download completes without failure. The earlier same-day successful HTTP checks for unchanged external URLs are reused; fresh résumé HTML/PDF and public Earnings Tracker source checks also pass. HTTP availability does not establish external application correctness. No camera permission was granted to Snapicorn.

Canonical/OG/Twitter/Person/robots/sitemap consistently use `https://jethroestangki.vercel.app/`. The résumé PDF's Portfolio hyperlink annotation agrees; its extracted display text alone is not a URL check. Source/published content contains no placeholder copy or primary old portfolio host. The SLU “No public source/demo” label is intentional availability information.

**PRO-80 — historical content finding, resolved in the final report:** The current [public Earnings Tracker project file](https://github.com/iamjethrooo/earnings-tracker/blob/main/EarningsTracker.csproj) targets .NET 10 Windows, matching its current README. The public résumé names .NET 8 in its Earnings Tracker entry and summary. The portfolio's version-neutral .NET/WPF/EF Core/SQLite description is accurate. Confirm whether the résumé intentionally describes a historical .NET 8 version; otherwise approve a project-specific .NET 10 or version-neutral correction. Do not replace legitimate .NET 8 experience globally. Employment dates, C#/Web Forms/SQL Server positioning, combined university role period and the portfolio's separate leadership years are compatible. Broader résumé skills/metrics were not imported as new portfolio claims. No external document was edited.

**PRO-81 — historical evidence finding, owner-approved deferral in the final report:** `images: []` for Earnings Tracker is deliberate. No approved current screenshot set was found in the candidate, PRO-81 attachments/comments, or the reviewed project Docs/Prototypes image inventory. This does not assert that no image exists anywhere. Privacy/content approval for an unavailable set cannot be established. The current text-first card/details plus source link adequately explain the project for this release; screenshots would strengthen visual evidence but are not necessary to make its current claims truthful. Recommend an **explicit owner-approved release deferral**, keeping the current presentation. Alternatively, perform a separate capture task using an approved current build and disposable synthetic/redacted data, then inspect content/privacy before adding files. A synthetic prototype is not automatically evidence of the shipped application. No running personal-data app was captured, launched or changed for this review; no screenshot was fabricated.

**LinkedIn — original automated result:** public automation returned 999. The final decision pass subsequently verified the unchanged URL in the existing authenticated browser; no profile change was made. See the final report for the verified identity and scope.

## Privacy, verification and preservation

- Fresh post-change public/dist gates pass: **7/7 unchanged approved hashes in each tree**. Public inventory remains **19 files, byte-for-byte identical** to migration. Final dist has **22 files**; only expected HTML bundle references and generated CSS/JS differ after fixes.
- Entire public/dist trees contain **zero known denied SHA-256 matches** and no private/Figma/env/Git/database/backup/archive/documentation paths or symlinks. All final build files returned local HTTP 200 with matching disk bytes; PNG/WebP MIME is correct. No new student data or confidential source was introduced. Hash equality carries forward the prior redaction/metadata review; it is not a new forensic or arbitrary-steganography audit.
- Local preview requests for docs, README, `.env`, `.git/config` and private-directory paths return the **public index HTML fallback**, not internal file contents. They are not 404 proofs. Hosted exclusion/routing behavior must be checked on a later explicitly approved deployment.
- Fresh `npm run lint`, separate local `tsc -b`, `npm run build` (TypeScript plus both privacy gates), direct final `node scripts/verify-election-assets.mjs public dist`, and `git diff --check` pass. No application test script/framework is configured. External browser regression scripts supply the acceptance evidence; no testing dependency was added to the portfolio.
- Reused migration evidence: successful clean `npm ci`, unchanged dependency lockfile, Git integrity/denied-object absence, five positive/negative harmless privacy fixtures and earlier unchanged-link HTTP checks. No repeat install, history scan or dependency remediation was needed. Standalone audit tools/test engines were installed only outside the repository.
- Final Lighthouse local lab: FCP/LCP 1.5s, TBT 0ms, CLS 0.02. Scores are single-run synthetic observations, not production/field Core Web Vitals or compliance evidence. Optional font-delivery/image/bundle optimization is nonblocking and outside scope.
- PRO-84 remains open for historical vendor cleanup; GitHub Support #4922678 was not touched. PRO-85 remains open for the reported 17 alerts; no advisories/dependencies were changed or claimed resolved. Their separate work is not silently folded into this review.
- Original dirty checkout, GitHub master, Pages configuration, both Vercel safeguards, domain assignment, production deployments and historical objects/recovery materials were not modified. The clean branch HEAD remains the approved base, index empty; all candidate work remains uncommitted.

## Files changed in this acceptance task

| File | Change |
| --- | --- |
| `src/components/Navbar.tsx` | Header contrast and visible-label/accessibility-name correction. |
| `src/components/Projects.tsx` | Preserve actual dialog trigger for focus restoration; label gallery chooser as a group. |
| `src/App.tsx` | Place Back to top inside main landmark. |
| `docs/portfolio-acceptance.md` | This report. |
| `docs/release-checklist.md` | Link current acceptance results and remaining release decisions. |
| `docs/portfolio-audit.md` | Append current results without rewriting historical evidence. |
| `docs/portfolio-migration.md` | Link subsequent acceptance; preserve migration-time evidence. |

All other migrated content/assets/configuration and dependency files are unchanged in this task. Existing candidate changes remain preserved; this list is not the entire Portfolio v2.0 diff.

## Remaining release gates and next task

1. Resolve PRO-80's résumé wording and human LinkedIn verification, or explicitly approve a documented limitation.
2. Under PRO-81, explicitly approve screenshot deferral or authorize the separate safe capture task. This report does not grant that approval.
3. Under PRO-82, obtain owner visual acceptance and complete or explicitly accept screen-reader/native Safari/zoom/OS-motion/physical-device limits. Automated results cannot close those gaps.
4. Keep PRO-84/85 open. Obtain the separately tracked dependency-risk disposition before release preparation; do not automatically update the 17 alerts.

**Recommended next scoped task:** content/evidence acceptance closeout using this report. Once those decisions are recorded, prepare the exact full candidate diff and reviewed commit proposal under PRO-83, with any accepted deferrals, hosted verification plan and safe recovery target. Committing, pushing, uploading/deploying, production routing and restoring publishing safeguards each require later explicit authorization. No issue is marked complete by this acceptance report.
