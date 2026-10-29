# Portfolio audit and implementation record

Audit date: October 27, 2026. Audience: recruiters and engineering leads hiring mid-level remote C#/.NET, backend, and full-stack engineers.

The [migration comparison](portfolio-migration.md) and [release checklist](release-checklist.md) record the current candidate. The dated entries below preserve implementation decisions and earlier evidence; their deployment/history state is historical. Earlier entries are historical: dashboard exclusion, two-view/four-file counts, blanket election exclusion and choosing a new canonical host are superseded. All seven verified election exports are public; original Figma files remain private and Hevy remains hidden.

## Original portfolio

The React/TypeScript/Vite application had a clear single-page structure, a consistent dark zinc/blue palette, readable Geist typography, real screenshots, existing project/source links, and professional/education history stored separately from components. Both the initial production build and lint passed.

The hiring story was much weaker than the underlying experience. The hero identified a generic full-stack engineer without naming C#/.NET, SQL Server, or three years of professional work. Employment followed a full-height About section. Every major section used full-viewport spacing, delaying useful evidence. The mobile header hid navigation without providing a replacement. Project links required opening a custom overlay, and the overlay lacked dialog semantics, focus management, and Escape dismissal. Project images lacked alt text, intrinsic dimensions, and lazy loading. A forced 1.2-second loader delayed static content.

The existing date edit to June 2023–June 2026 was present before this work and has been preserved.

## Priorities and implementation plan

Impact means likely effect on recruiter comprehension and access to evidence, not a security severity rating.

| Impact | Issue / opportunity | Plan and final status |
| --- | --- | --- |
| Critical | No blocking render/build failure found in the initial review. | No framework or architecture replacement needed. |
| High | Generic positioning; strongest professional technologies absent from the hero. | Implemented direct C#/.NET identity, three-year enterprise summary, SQL Server, production support, remote-role targeting, and visible qualifications. |
| High | Employment buried after a full-screen About section. | Moved experience immediately after the hero; highlighted the developer role and concrete responsibilities. |
| High | Earnings Tracker and Hevy Companion absent despite stronger relevance to target roles. | Added both before the existing projects, with verified scope and deeper engineering notes. |
| High | No résumé access or obvious first-screen contact path. | Added the user-supplied résumé in hero/contact, verified its PDF download, and exposed email and contact navigation. |
| High | No mobile navigation; project overlay did not support expected keyboard behavior. | Added persistent mobile anchors and a native modal dialog with Close/Escape, scroll locking, and focus restoration. |
| Medium | Project descriptions were broad; source/demo links were hidden behind overlays. | Added purpose/engineering focus, direct links, typed project data, honest unavailable-link labels, and multi-image election gallery. |
| Medium | Full-screen gaps and tiny low-contrast supporting text slowed scanning. | Replaced height constraints with content-driven spacing; increased supporting text sizes/contrast and standardized sections/buttons. |
| Medium | Images loaded full PNGs without alt text or reserved dimensions. | Added alt text, dimensions, lazy loading, asynchronous decoding, WebP thumbnails, and on-demand larger gallery images. |
| Medium | No description/social metadata, canonical, sitemap, or crawler guidance. | Added title/description, Open Graph/Twitter metadata, Person structured data, sitemap.xml, robots.txt, and fixed favicon MIME type. |
| Medium | Skills were hidden and did not distinguish professional from project use. | Added four explicit professional/project groups. |
| Medium | Missing skip link, shared focus indicators, motion preferences, and external-link consistency. | Added these; screenshot focus outlines are inset to stay visible inside cropped cards. |
| Low | Default Vite README, unused starter CSS, artificial loader. | Replaced README; removed unused App.css and Loader.tsx. Dependencies and build architecture were retained. |

Implementation sequence: establish positioning and hierarchy; improve project evidence and navigation; polish accessibility/images/metadata; verify the production output; document maintenance and remaining gaps.

## Recruiter journey and screenshot evidence

Screenshots were captured and inspected during this session in the local audit artifact folder. They are review artifacts, not application assets.

| Step | Surface and original health | Final health / evidence |
| --- | --- | --- |
| 1 | First impression: visually restrained, but generic and missing experience/stack/résumé. Original screenshot: `01-original-desktop.jpg`. | Clear identity, strongest stack, experience, résumé, GitHub, and contact path. Final desktop/mobile captures accompany the handoff. |
| 2 | Experience: real history, but buried and visually underweighted. Original screenshot: `02-original-experience.jpg`. | Employment appears immediately after the hero; professional responsibilities are readable on desktop/tablet/mobile. `11-production-tablet-experience.jpg`. |
| 3 | Project exploration: real images, but inaccessible custom overlay and no new .NET projects. `04-original-mobile-dialog.jpg`. | Six ordered projects, direct links, all dialogs verified, multi-image gallery tested. `08-production-desktop-projects.jpg` and final mobile dialog capture. |
| 4 | Contact/mobile navigation: no mobile section navigation; résumé missing. | Persistent navigation and usable contact/résumé controls without horizontal overflow at 320px. `09-production-mobile-contact-320.jpg`. |

Screenshots caught during scrolling were rejected or labeled for the section actually visible; they are not evidence of the intended destination.

## Content grounding

No employment metrics or new performance claims were invented. Employment copy uses the user's supplied background, original timeline, and supplied public résumé.

- [Public résumé](https://rxresu.me/estangkij/resume): identity, professional role/dates, contact links, degree/honors, and résumé/PDF destination. The page and its Download PDF link were exercised in the browser.
- [Earnings Tracker README](https://github.com/iamjethrooo/earnings-tracker/blob/main/README.md), the local project file, and design-system documentation: Windows/WPF, .NET, EF Core/SQLite, sessions, accounting, migration tests, backups, and Velopack. No public installer or completed public release is claimed.
- Hevy Companion's neighboring local `README.md`, `package.json`, and `EXERCISE_ANALYTICS.md`: Next.js/TypeScript/SQLite, offline history, manual synchronization, protected credentials, manual body weights, and observed exercise records. Dashboard aggregation and strength-to-weight analytics remain planned. No public repository URL was inferred.
- [Botlog README](https://github.com/iamjethrooo/botlog/blob/master/README.md) and [package.json](https://github.com/iamjethrooo/botlog/blob/master/package.json): TypeScript, bot/dashboard workspace, Next.js/React, Prisma/PostgreSQL, and Redis. Corrected the original “PrismDB” label.
- University election system, Snapicorn, and visual novel: existing portfolio descriptions, local screenshot assets, and preserved original links. These projects were not independently runtime-tested.

The résumé currently lists a Vercel portfolio URL, while metadata uses the repository's GitHub Pages identity. It also names .NET 8 for Earnings Tracker, while the current project targets .NET 10. Those external résumé details were not edited.

## Implemented files

- `src/App.tsx`: immediate content, section order, skip link, landmarks, footer spacing.
- `src/components/Home.tsx`, `Timeline.tsx`, `About.tsx`, `Contact.tsx`: positioning, responsibilities, skills, and recruiter calls to action.
- `src/components/Navbar.tsx`, `BackToTop.tsx`, `Footer.tsx`: anchor navigation, mobile access, current-section feedback, and shared links.
- `src/components/Projects.tsx`: cards, direct links, native dialogs, and image gallery.
- New `src/components/TechStack.tsx` and `src/data/profile.ts`: shared tags and profile destinations.
- `src/data/projects.ts`, `src/data/timeline.ts`: verified project content and professional responsibilities, preserving the pre-existing date edit.
- `src/index.css`: common visual styles, focus, anchor offsets, dialog, reduced motion.
- `index.html`, new `public/robots.txt`, and `public/sitemap.xml`: metadata and static crawler assets.
- Ten new WebP image files under `public/projects/`: six larger screenshots and four thumbnails. Original PNGs retained.
- `README.md` and this document.
- Removed unused `src/App.css` and `src/components/Loader.tsx`.

No dependency changes, routing rewrite, commit, push, or deployment were made.

## Verification

- Initial and updated ESLint runs passed.
- Initial and updated production builds passed; `npm run build` includes TypeScript project checks.
- `git diff --check` passed.
- Production browser inspection covered desktop 1280px, mobile 320px/390px, and tablet 768px. No horizontal overflow was found in the checked layouts.
- All navigation fragment targets exist. Active-section feedback and fixed-header clearance were inspected.
- Keyboard skip link moved focus to main. All six dialogs opened, initially focused Close, dismissed with Escape, restored their triggering button, and fit horizontally at 320px.
- Screenshot switching and native dialog keyboard order were exercised. Close-button dismissal was checked separately from Escape.
- All four card images loaded; intrinsic image metadata and local static paths were checked.
- The supplied public résumé rendered successfully and its PDF download completed. Email destinations were inspected without sending messages.
- A fresh production tab reported no browser errors or warnings during the checks.
- Full gallery source PNGs totaled 3,124,122 bytes. Optimized gallery WebPs total 373,666 bytes; the four thumbnails total 101,318 bytes. These are asset sizes, not a measured Core Web Vitals improvement.
- Final JavaScript is approximately 218 KB before compression, about 68 KB gzip. No new runtime dependencies were introduced.

Limits: no test suite/test script exists. No Lighthouse/field Core Web Vitals, screen-reader, Safari/Firefox, physical touch-device, or operating-system reduced-motion test was run. Reduced motion is implemented in CSS and reviewed statically. No full accessibility-compliance claim is made. Social preview rendering and production hosting behavior remain unverified. Public source/demo links are preserved, but not every external destination was independently exercised.

## Remaining improvements and owner input

1. **Optional evidence:** Provide approved current Earnings Tracker screenshots, or explicitly defer them under PRO-81. Its text-first card is accurate without them. Election assets are excluded for privacy and must not block deployment.
2. **Deferred:** Hevy Companion remains hidden until release-ready. No public link or screenshots are needed for this portfolio release.
3. **High:** Choose the canonical portfolio address and align the résumé's Vercel link with site metadata. Review the résumé's .NET version against current Earnings Tracker sources.
4. **Medium:** Supply an anonymized enterprise case study or a specific before/after example you can substantiate and are allowed to share. Verified evidence would strengthen the professional section further.
5. **Medium:** Run Lighthouse and assistive-technology/cross-browser checks against the chosen hosted build, then address observed failures.
6. **Low:** Add a dedicated social share image and, if permitted, an election-system public source/demo link.

The work remains uncommitted for review. Publication requires the owner's explicit approval.

## Hero simplification follow-up — October 27, 2026

This follow-up supersedes the earlier hero recommendations about remote-role targeting and visible sidebar qualifications. The latest saved desktop reference (`14-final-desktop-hero.jpg`) matched the implementation captured again before this change. Both showed repeated stack/experience copy, a four-line desktop description, and a competing qualifications sidebar.

Only `src/components/Home.tsx` changed in this follow-up. The hero now presents the name, one Software Engineer · C# / .NET identity, a short value statement, and one experience summary. The description occupies two lines at checked desktop widths. Projects and Résumé remain the primary actions; GitHub appears as a quieter link underneath. Below 380px the primary buttons stack at full width. The dark palette, blue accents, native anchors, focus styles, and content-driven section spacing remain in use; no animation or dependency was added.

The sidebar and hero job-search line were removed. Its substantive details already exist in Experience: June 2023–June 2026 employment, application development, production support, SQL optimization, and the Saint Louis University Computer Science degree with Magna Cum Laude. No duplicate credential block was added to About.

### Follow-up verification

1. Desktop first impression — good: inspected production browser screenshots at 1280px and 1440px; name is strongest, supporting description is two lines, and Experience follows a clear divider and whitespace.
2. Mobile and tablet — good: inspected 320px, 390px, and 768px screenshots. No horizontal overflow at checked widths. Name wraps cleanly, controls remain readable and at least 44px tall, and the smallest layout deliberately stacks the actions.
3. Actions and focus — good within scope: Tab from Projects reaches Résumé with a visible 2px outline. Projects navigates to `#projects`; its section starts below the fixed header. Résumé and GitHub retain their existing destinations and safe new-tab attributes. External destinations were not re-tested in this follow-up.

`npm run build` (including TypeScript), `npm run lint`, and `git diff --check` passed. The checked production browser tab reported no warnings or errors. Full screen-reader, physical-device, and cross-browser verification remains unperformed.

Accepted screenshot evidence is stored outside the application at `[local evidence retained outside this repository]`: `01-before-desktop.png`, `02-after-desktop-1440.png`, `04-after-mobile-320.png`, `05-after-tablet-768.png`, `06-keyboard-focus.png`, `07-final-desktop-1280.png`, and `08-final-mobile-390.png`.

The supplied Linear Portfolio project resolved to `P-PRO-8`. Its issue list returned no issues, including archived issues, so no issue was created or marked complete. Verification was recorded in the existing project's discussion instead. All pre-existing working-tree changes were preserved; no commit, push, or deployment was performed.

## Release tracking — October 27, 2026

Release planning now lives in the existing [Linear Portfolio project](https://linear.app/botlog/project/portfolio-b7071fc55932), under **Portfolio v2.0 — Recruiter Ready**. The [completed improvements and release plan](https://linear.app/botlog/document/portfolio-v20-completed-improvements-and-release-plan-8d6cfdc9461e) records the implemented baseline, verification limits, owner inputs and release sequence. The earlier empty-issue observation above describes the hero follow-up; the four issues below were created afterward, following a fresh duplicate check.

| Issue | Priority | Remaining outcome |
| --- | --- | --- |
| [PRO-80](https://linear.app/botlog/issue/PRO-80/reconcile-portfolio-content-resume-and-canonical-url) | High | Confirm content and canonical host; reconcile actual résumé discrepancies and verify external destinations. |
| [PRO-81](https://linear.app/botlog/issue/PRO-81/add-verified-screenshots-for-the-two-featured-projects) | Medium | Track approved Earnings Tracker evidence or deferral; exclude original election/Figma assets and hidden Hevy from release requirements. |
| [PRO-82](https://linear.app/botlog/issue/PRO-82/complete-focused-accessibility-and-browser-release-checks) | High | Complete focused screen-reader, zoom/reflow, reduced-motion, browser and automated checks; address meaningful observed failures. |
| [PRO-83](https://linear.app/botlog/issue/PRO-83/prepare-deployment-and-verify-the-approved-portfolio-release) | High | Prepare hosting/build/rollback, obtain explicit publication approval, then verify the approved hosted release. Blocked by PRO-80 and PRO-82. |

All four start in Todo; no implementation work was performed during planning. Completed improvements remain documented above and in the Linear project document rather than becoming artificial unfinished issues. Update each issue when work starts, owner inputs arrive, checks run or release decisions change; mark Done only when its acceptance is verified.

The minimum release path is content/résumé/URL alignment, approved Earnings Tracker screenshots or an explicit deferral, focused accessibility verification, then a concrete deployment and rollback plan for approval. The owner must choose the canonical address and hosting method, confirm résumé corrections, and supply or defer Earnings Tracker screenshots. Hevy is hidden and original election/Figma assets are excluded for privacy; neither is a release requirement. An enterprise case study, dedicated social image and election-system public link remain optional and received no new issues.

During release planning, `npm run lint`, `npm run build` (TypeScript + Vite) and `git diff --check` passed again. No browser, résumé, external-link or hosted checks were repeated; earlier evidence and its limits remain as recorded. The absence of a checked-in deployment workflow does not establish the state of external hosting configuration. No UI code, dependencies, commit, push or deployment changed.


## Content, Experience, and project refinement — October 27, 2026

This focused implementation supersedes earlier public content and asset recommendations while retaining the dark palette, blue accents, Geist typography, navigation, framework, and native dialogs. The repository already contained the earlier uncommitted polish pass; those unrelated changes were preserved. No commit, push, deployment, dependency addition, new page, or change to a neighboring project repository was made.

### Content and layout

- Removed the hero slogan and kept one first-person paragraph describing three years of business application work, production fixes, and SQL Server queries. Projects, Résumé, and GitHub remain accessible.
- Replaced generic Experience, Projects, About, and Contact headings with direct section names. Shortened About and Contact; retained the personal gym/strategy-games detail.
- Experience now has aligned, border-free role entries under Professional experience and University leadership. Employment has the strongest typography, an introduction, and three concrete bullets including stored procedures. University roles retain verified titles, organizations, and dates without unsupported role-specific technical claims. Education disclosures remain intact.
- Removed Experience technology badges and changed skill/project-card technologies to plain text. Professional application/data skills remain distinct from personal/university desktop/backend work.
- Three consistent text-first featured cards lead: SLU Election System, Earnings Tracker, Botlog. At desktop they form one balanced row; tablet/mobile stack them. Snapicorn and Florante at Laura remain with their images and links. Botlog's Discord image is still available in Details; no Botlog dashboard copy or Next.js dashboard technology is advertised.

### Factual corrections and privacy

The owner explicitly confirmed personally designing the SLU Election System UI in Figma and rebuilding the entire application from scratch. The card now states both, with database query rewriting and join optimization as additional work. Real university election use is stated without invented metrics or implementation details. Linux/Apache deployment was preserved from the existing portfolio. No source/demo link was invented, and no technical contribution was assigned to a specific leadership year.

No original Figma file or connected Figma account was accessed. No election image was opened, inspected, exported, or uploaded in this pass. Existing election PNG/WebP assets had unverified privacy status and were moved intact out of `public/projects/` into the local ignored `.private-assets/election/` folder. The original three tracked PNG paths consequently appear as deletions in the pending Git diff; the local originals are preserved. Git history was not changed. The production build contains no election assets or references to them. The election card/dialog is text-only. Original Figma assets are excluded for privacy and must not block deployment. Future representative mockups would require fictional data and explicit labeling; none were generated.

Hevy Companion has `published: false`. Its descriptions, details, stack, and code remain in the project data, while `publishedProjects` is the shared public collection. Five public cards remain; no public Hevy card, gallery, link, or count appears. Re-enable only after release readiness and content review. Its actual repository was not accessed or modified during this pass.

### Files touched in this pass

`src/components/Home.tsx`, `Timeline.tsx`, `Projects.tsx`, `About.tsx`, `Contact.tsx`; `src/data/timeline.ts`, `src/data/projects.ts`; `.gitignore`, `README.md`, and this audit. Seven existing election image files were relocated locally outside public output. Other pending changes predate this pass.

### Verification performed

- `npm run lint`, `npm run build` (TypeScript project checks plus Vite), and `git diff --check` passed. No existing test script or test suite is configured.
- Inspected production screenshots at 1440px desktop, 768px tablet, and 390px/320px mobile. No horizontal overflow; professional/university hierarchy and project rows were visually reviewed. Desktop featured cards share a 450px height.
- Headless Chrome 156.0.8078.48 exercised all five dialogs at all four widths (20 opens): initial Close focus, Tab/Shift+Tab without reaching background controls, Escape dismissal, trigger-focus restoration, image decoding, and horizontal fit. Native dialog tab order may pass through browser chrome; this is not a custom focus trap. Close-button dismissal was also exercised separately.
- Keyboard skip link reached main; mobile fragment navigation updated URLs and kept destination headings clear of the fixed header. Education opened using Enter. Visible skip-link and dialog focus outlines were inspected in screenshots.
- All remaining dialog images decoded successfully. There is no public multi-image project after excluding election assets, so screenshot switching was not exercised in this pass; its existing control implementation remains unchanged.
- Asserted exactly five public cards, no rendered Hevy or dashboard wording, no requests for election assets, and no election files in `dist/projects/`. No browser errors or warnings were reported.
- Browser reduced-motion media emulation changed computed scroll behavior to `auto`. At 320 × 240 CSS pixels there was no horizontal overflow. These checks emulate media/reflow conditions; they do not establish actual OS preference behavior or browser zoom operation.
- HTTP requests returned 200 for résumé HTML, résumé PDF (`application/pdf`), GitHub profile, Earnings Tracker/Botlog/Snapicorn/visual-novel sources, and Snapicorn demo. LinkedIn returned 999 (automated access blocked), so its availability was not verified. HTTP checks establish reachability, not full application behavior; external pages and the PDF were not visually re-reviewed in this pass.

Evidence and the reproducible check script are outside the application at `[local evidence retained outside this repository]`: `verification.json`, `verify.cjs`, full-page captures for each width, section screenshots, 320px dialog screenshots, and `320-keyboard-focus.png`. Initial browser attempts were blocked by the network sandbox; the successful checks used an explicitly permitted local preview outside that network restriction.

### Limits and release follow-up

Firefox automation could not run because its Playwright browser executable is not installed. Screen-reader, Safari/WebKit, physical-device, actual OS reduced-motion, real browser zoom, automated accessibility/Lighthouse, hosted build, and social-preview checks remain unverified. No broad accessibility-compliance claim is made.

The existing PRO-80/81/82 issues and release document record this implementation and these limits; no duplicate issue or Done status is warranted. PRO-83 and milestone/dependency relationships remain intact. Current project claims use the owner's supplied corrections; the canonical-host choice and previously reported external résumé URL/.NET-version discrepancies still need owner confirmation/reverification. Approved Earnings Tracker screenshots or their explicit deferral remain under PRO-81. Election/Figma access and Hevy publication are not prerequisites. Git/publication actions still require separate owner approval.

## Targeted wording and leadership restoration — October 27, 2026

* Replaced the hero paragraph exactly with: “I build web applications with a focus on scalability, performance, and clean, maintainable architecture.” Name, C#/.NET identity, Projects/Résumé buttons and GitHub remain.
* Renamed the section to Projects with label 02 / PROJECTS. Project data/cards/order were unchanged; five public cards remain and Hevy Companion retains published:false.
* Restored one concise, always-visible description per university role, preserving subordinate University Leadership styling. Both historical timeline revisions (b701586 and 1b66bc3) explicitly associate technical direction/full rewrite with IT Adviser (2024–2025), and deployment/technical coordination/election operations with IT Head (2023–2024). Removed unsupported performance-outcome claims. Figma design and SQL query/join work remain on the SLU project card without guessing their role year.
* No confidential Figma or student assets were accessed. No dependency or unrelated section changes.

Verification: npm run lint, npx tsc -b, npm run build and git diff --check passed. Production Chrome 156.0.8078.48 checks at 1440/768/390/320px confirmed exact hero/heading copy, both leadership descriptions/dates, unchanged five-card order, hidden Hevy, preserved SLU design/rebuild text, and no horizontal overflow, console warnings/errors or election image requests. SLU details opened and dismissed with Escape at each width. Desktop and mobile screenshots were visually reviewed. Hero occupies two lines at desktop and three at 390px. Evidence/script: [local evidence retained outside this repository]

Initial sandbox browser requests were blocked; successful checks ran a temporary local preview and Chrome together with permitted local access. No external link, screen-reader, physical-device, cross-browser or hosted checks were repeated. Existing release gaps remain open; PRO-80 remains In Progress. Unrelated pending work preserved; no commit, push or deployment.


## Existing Vercel update and screenshot restoration — October 27, 2026

### Scope and privacy decision

Owner clarified this is an update to the existing Vercel portfolio and approved retention of sanitized election screenshots subject to verification. No original Figma file, export, connected Figma account content or student database was accessed. Seven existing local raster variants in `.private-assets/election/` were visually inspected; these represent three views.

| Files | Result |
| --- | --- |
| `election-1.png`, `election-1.webp` | Restored ballot view. Visible candidate/voter fields are fully covered; sampled interiors are uniform white pixels. PNG alpha is entirely opaque, so contrast/alpha changes cannot uncover underlying text. PNG XMP stripped without changing decoded pixels. |
| `election-3.png`, `election-3.webp` | Restored aggregate browser/OS/device insights unchanged. Generic admin label; no visible student identifiers. |
| `election-2.png`, `election-2.webp`, `election-2-thumb.webp` | Failed privacy review: student-number-like identifiers and timestamps remain visible in the user activity log. Kept private for owner review; thumbnail reduction is insufficient redaction. Identifiers are omitted from this report and Linear. |

All seven files are single-frame raster images with no trailing bytes. The four restored public files contain no XMP/EXIF/text payload, removable layer or alternate frame; PNG chunks contain image/color/density information and WebPs contain only VP8 image chunks. Restored PNG alpha is fully opaque. Inspection addresses visible data, conventional metadata and reversible redaction risks, not arbitrary steganography. Existing private originals remain intact. No image was redesigned, regenerated or newly blurred.

`src/data/projects.ts` now uses the two safe existing WebPs (1600×784 and 1600×796), preserving text-first featured cards, native modal and gallery controls. Four PNG/WebP assets are in `public/` and copied unchanged from there into `dist/`. The three unsafe variants and all private/Figma/env files are absent from the build. `.gitignore`/`.vercelignore` exclude private source and local credentials from Git/future CLI uploads. No Git history rewrite occurred. Hevy still uses `published: false` and is absent from rendered public projects.

### Existing Vercel evidence and configuration

Production is **https://jethroestangki.vercel.app/** in **iamjethrooos-projects / jethroestangki**. Authenticated Vercel UI confirms Valid Configuration, Production, `master` branch tracking, the existing GitHub repository connection, and Preview on all unassigned branches. Current Ready/Current production is `dpl_GXY6AC2h4Qr4VacxqJ2uMTPe58dD`, source `5b9172191113967001e825c458c0e124ccccb2df`; GitHub Production status and current remote/default master agree. No new project, domain or Git integration was created.

Saved build settings: framework Other; build/output/install overrides disabled; blank repository-root directory; Node 24.x; automatic ignored-build behavior; no deployment checks configured. No custom edge routing rules exist. Because the Other output default is public-or-root while the app builds into dist, candidate `vercel.json` explicitly sets framework vite, buildCommand npm run build and outputDirectory dist. This is local preparation, not a saved settings change or hosted build verification. No routing rewrite was added because navigation uses fragments.

The connector continued returning scope 403 after user approval. The browser became authenticated after the owner handled its account-security prompt and supplied the settings evidence above. Security choices were not automated. No further connector authorization is necessary to substantiate the UI observations; candidate build/preview remains pending publication approval.

Canonical, OG URL/image, Twitter image, Person URL, robots and sitemap now use the existing production domain. The read-only downloaded public résumé already links to that exact address; no outdated portfolio URI was found and no PDF was modified. Its .NET 8 wording remains part of the separate PRO-80 version reconciliation.

The live portfolio still references `/projects/election-2.png`. This candidate excludes it; no hosted deletion, asset replacement or older deployment cleanup occurred. Do not blindly roll back to the old production artifact without reviewing privacy. Prepare a safe eligible fallback before release.

### Checks actually performed

- npm run lint, npx tsc -b, npm run build and git diff --check passed. Installed Vite 8.0.11, Node 24.22.0 and npm 11.19.1. No test script/framework/suite exists; no npm ci was run this pass and no dependencies changed.
- Build inventory: 19 files, all returned local HTTP 200 with appropriate MIME types. Four approved election assets match public-source hashes. No private/Figma/env/election-2 files or references; no checked private-key/GitHub-token/AWS-key pattern matches. This is focused release hygiene, not an exhaustive security scan.
- Brave/Chromium production preview at 1440/768/390/320×960 CSS pixels: five cards, hidden Hevy, valid fragment targets, no page/modal horizontal overflow. All five dialogs opened at each width (20 opens), with initial Close focus, scroll locking, Escape and trigger focus restoration. Both screenshot selections checked at all widths; Tab/Enter switching and Close-button dismissal separately exercised.
- SLU Tab/Shift+Tab checks did not reach background controls. Browser-chrome focus can appear as body focus with native dialogs; no custom trap or screen-reader compliance claim. Mobile skip-link activation focused main; Projects fragment reached a heading clear of the fixed header; Enter opened education. Settled ballot and insights captures visually reviewed at desktop/mobile, with full images fit to dialog width.
- Both restored images loaded. Existing dialog images were observed loaded at 320px; all image URLs separately returned correct HTTP types. Immediate pre-paint probes sometimes reported naturalWidth=0; these were not treated as settled load failures. Full-page capture timed out; viewport capture worked. Initial sandbox preview access failed; a permitted local server resolved it.
- Geist reported loaded via document.fonts and computed body font uses Geist. No captured browser error/warning console entries. Résumé HTML/PDF, GitHub profile and all four project-source HTTP checks returned 200. LinkedIn returned 999 and is unverified. Snapicorn demo HTTP probe timed out, but its actual browser landing page rendered successfully; no camera session was started.

Screen reader, Firefox/Safari/WebKit, physical touch device, actual OS reduced motion, real browser zoom, axe/Lighthouse, hosted candidate, field metrics and social-preview rendering remain unverified. Responsive viewport checks are not physical-device checks. Local success is not hosted verification.

Evidence remains outside the repository/public build at `[local evidence retained outside this repository]`: privacy structure/hashes, browser-checks.json (including immediate timing probes), settled viewport captures, local-assets.json, link-checks.json, read-only résumé and GitHub/Vercel UI records. All earlier working-tree changes were preserved; this pass made no approved-copy or layout edits, commit, push or deployment. See the release checklist for owner decisions, preview/production gates and rollback.


Final preparation notes: lint, separate TypeScript, production build and diff whitespace checks passed again after adding vercel.json. Its JSON and selected framework/build/output fields pass their published Vercel schema definitions using existing Ajv. Full schema validation was not completed: bundled Python lacks jsonschema and the vendor schema mixes draft-04 metadata with later exclusiveMinimum syntax. No validation dependency was installed. This tooling limit does not establish hosted configuration success.

Authenticated Vercel Domains confirms Valid Configuration / Production. Environment settings confirm master and Preview branch rules; Git settings confirm the repository connection. Custom edge routing usage is 0 / No Routing Rules. Project Redirects management is plan-gated in this Hobby project; no redirect changes were made. Linear PRO-80/81/82/83 and the existing project release document now reflect this candidate; all remain In Progress, milestone is unchanged, and original dependency/related links are preserved. Shared field-note tools were attempted but returned tool-not-found; the verified knowledge is recorded in these repository docs and existing Linear artifacts instead.


Vercel plugin follow-up: after installation, a read-only native project retry still returned the same team-scope 403. Authenticated browser evidence above remains valid; no additional deployment verification is claimed. The deployment skill and official promotion documentation clarified that promoting a Preview triggers a production rebuild. The release checklist now distinguishes that from promotion of a verified staged Production deployment, which does not rebuild. No new project, deployment or setting change was made.

## Complete SLU gallery restoration — October 27, 2026

The owner explicitly requested safe restoration of all seven existing raster files, including further dashboard redaction. This supersedes the previous dashboard hold. Seven files represent three distinct views, not seven screenshots of different screens. Original Figma documents were not accessed and are not release assets. Prior working-tree edits and approved portfolio copy/layout remain intact.

### Assets and redaction

| View | Public files | Current treatment |
| --- | --- | --- |
| Ballot | `election-1.png`, `election-1.webp` | Existing flattened opaque voter/candidate field redactions retained; PNG XMP already removed. No new pixel edits. |
| Dashboard | `election-2.png`, `election-2.webp`, `election-2-thumb.webp` | New sanitized exports. Five fully opaque masks replace complete activity-record text and timestamps; headings, icons, row layout, aggregate counts and charts remain. |
| Aggregate insights | `election-3.png`, `election-3.webp` | Retained without additional editing. Only aggregate browser/OS/device information is shown. |

Dashboard PNG masks use RGB (24, 24, 27) at x=1532..1849, y=560..592 plus four repetitions at 48px row intervals in the 1919×949 source. They remove less than 3% of the image. Complete records are suppressed to avoid leaving related personal details or OCR-missed fragments. Pixel comparison confirms the rest of the PNG is unchanged. The new PNG starts from a fresh RGB canvas with no copied metadata; full-size WebP (1600×791, quality 85) and thumbnail (800×396, quality 82) derive from that sanitized master. Redaction precedes resizing/encoding, so compression cannot reconstruct the discarded pixels. No translucent overlay, blur, generated content or fictional record was used.

All seven private screenshot originals remain byte-for-byte unchanged, verified against hashes captured before editing. They remain ignored outside public assets and uploads. Inspection/OCR stayed local; recognized text was discarded without logging or saving its values. Temporary diagnostic previews were removed. No student identifiers are reproduced here or in Linear.

`src/data/projects.ts` restores the dashboard between ballot and insights, with actual dimensions and descriptive alt/caption text explicitly identifying the redacted records. Existing gallery buttons/native dialog and styling are unchanged. `scripts/verify-election-assets.mjs` uses Node built-ins to check seven reviewed hashes and reject unreviewed election assets, private paths and symbolic links before Vite copies public files and again against generated dist. No dependency was added. Positive and negative checks used only harmless approved-image fixtures; altered bytes and an unreviewed filename both failed as expected.

### Verification performed

- `npm run lint`, separate `npx tsc -b`, `npm run build` and `git diff --check` passed. Build includes both privacy gates.
- All seven public exports were visually reviewed, including PNGs, WebPs and thumbnail. PNGs have only image/color/density chunks; their alpha is either absent or entirely 255. WebPs contain only single VP8 image chunks. No text/EXIF/XMP/ICC/comment payload, extra frame or trailing bytes; dashboard PNG is RGB. Public/dist bytes match for all seven, and known unsafe original-image hashes are absent throughout both trees. No private/Figma/env files are present. Git ignores the original directory and tracks none of its files.
- Local Windows OCR inspected all seven original and public variants without emitting recognized text. Public exports have no identifier-like detections. OCR missed identifiers in smaller private variants, so that result alone is insufficient; visual review, complete-record masks and sanitized-master provenance establish the decision.
- Brave/Chromium 156.0.8078.48 production preview at 1440/768/390/320×1000: all three views decode, captions and selected button state agree, Enter/Space selection works, images preserve aspect ratio, and page/dialog have no horizontal overflow. Initial Close focus, Tab/Shift+Tab containment, Escape and Close dismissal, background scroll lock/unlock and trigger focus restoration pass. Five cards are visible; Hevy has no public heading. No captured failed requests or console/page errors.
- All 22 generated files return local HTTP 200 with bytes matching disk; PNG/WebP MIME types are correct. Settled desktop/mobile dashboard captures were visually inspected. A new safe thumbnail exists at its original public URL even though the featured card remains text-first.

This checks visible content and conventional metadata/transparency/layer recovery, not arbitrary steganography or external data correlation. OCR is supporting evidence only. Screen readers, Firefox/Safari/WebKit, physical mobile devices and a hosted candidate remain unverified. No election application functionality was executed; these are authentic screenshots with explicit redactions.

### Remaining public exposure and release actions

Read-only production HTML/JS still references `/projects/election-2.png`; the URL returns HTTP 200/image/png and matches the unsafe private original hash. Production also serves the ballot PNG before metadata stripping. Current WebP/thumbnail URLs return 404 on that old deployment. The candidate safely replaces the legacy PNG path and supplies all WebPs, but no remote replacement has happened.

GitHub raw URLs for both current master and the recorded production commit also return the unsafe dashboard bytes. An approved branch replacement will not erase the historical commit object or third-party caches. Prepare a separate history/cache remediation plan for explicit approval; no source-history rewrite, remote deletion or access change was attempted. The recorded immutable Vercel deployment redirects to the login page, so its HTTP 200 HTML is not evidence that the image is absent or safe. Team-scope connector access still returns 403; retained deployments and authenticated asset contents remain unverified.

After an approved release, check all seven hosted image hashes/MIME types, the legacy PNG path, cache behavior, gallery/modal/mobile interactions and Hevy visibility. Review old deployment retention, cached copies and a privacy-safe rollback target separately. No commit, staging, push or deployment occurred. PRO-81 and PRO-83 are updated without duplicates or milestone/relation/status changes; unrelated Earnings Tracker and other release acceptance remain open.

Local evidence: `[local evidence retained outside this repository]` contains safe exports/captures, redaction geometry and unchanged-original hash checks, privacy structure/OCR-box counts, browser-checks.json, live-exposure.json and historical-exposure.json. Evidence is outside Git/public/dist and is not a release asset.

## Privacy remediation planning — October 27, 2026

Owner prioritized replacing exposed assets before normal v2.0 release work and explicitly withheld commit/push/deployment/deletion/history-rewrite approval. Added [privacy-remediation.md](privacy-remediation.md) and a priority override in the release checklist. The plan separates immediate production replacement, old Vercel retirement and GitHub historical cleanup, with exact approval boundaries and recovery risks. No implementation or remote publication was performed.

Fresh full-working-tree build (including TypeScript and pre/post seven-asset gates), lint and whitespace checks passed. Public has 19 files and dist 22; both contain exactly the seven approved election exports and no known unapproved original hashes anywhere in the tree. HEAD/index still contain unsafe dashboard PNG blob `8e4f6093dbb212465b6a7314bb3fb9c82b3a876a` and the ballot PNG before metadata stripping. The third PNG is already approved. Four safe WebPs remain untracked. Index is empty; all earlier changes preserved. The proposed isolated hotfix still needs separate clean/hosted checks. Other project image content was not re-audited.

Authenticated Vercel browser inventory identified nine retained Ready deployments (three Production, six Preview) plus five retention-deleted Production records still restorable. IDs/hosts/source classification are in the plan and PRO-84. Local source-object comparison confirms unsafe dashboard bytes in current/previous production and the locally available Vite Dependabot preview source, plus four restorable sources; other historical artifacts are suspected/unverified. Login HTML/protection is not evidence of deletion or safe contents. All fourteen old records are prohibited recovery targets; allowlist is empty. This is an execution rule, not an already-enforced platform permission. No source/share/protection/retention setting was changed.

Local history also has two unreviewed 2020 image variants under `images/projects/election-system/1.png`; the separate history plan covers renames, remote refs, forks/caches, restricted encrypted backup, write freeze/deploy controls, fresh-clone filter-repo rehearsal, exact force-update approval, Support involvement and recontamination. Do not mirror-push this active working repository with its Codex snapshot refs. No legacy screenshot was opened and no identifiers reproduced.

Native Vercel project lookup still returns team-scope 403; existing authenticated browser access supplied inventory without weakening controls. New shell production/GitHub GET probes failed DNS/network connectivity, so no fresh remote-byte match is claimed beyond the earlier same-day exposure evidence. `privacy-inventory.json` outside the repository records successful local comparisons and failed network checks. Linear field notes returned tool-not-found again. Created urgent Todo PRO-84 after duplicate checks and prepended PRO-83 with privacy-first sequencing; its In Progress state, milestone, existing blockers and PRO-81 relation remain. PRO-84 is related rather than a historical-cleanup blocker for the normal release. No commit, staging, push, deployment, deletion or rewrite occurred.


## Final local acceptance — October 29, 2026

See [the final acceptance report](portfolio-acceptance.md) for current results and the complete acceptance matrix. Chrome 156, Firefox 153, Windows WebKit 26.5 and Edge 156 covered 320/390/768/1024/1440/1920px production-preview layouts. All 120 keyboard dialog cases and 72 gallery selections pass; supplementary pointer/thumbnail restoration, background inertness, text spacing and motion/reflow checks pass. WebKit's complete sequential native-link tabbing remains a documented test-port limit, reproduced in a minimal fixture.

Focused corrections: header `/ dev` contrast and accessible name; actual trigger retention for WebKit pointer focus restoration; Back to top inside main; explicit screenshot-chooser group semantics. Final axe: zero violations across 48 scans. Mobile Lighthouse 13.6.0: 100 performance/accessibility/best practices/SEO, a local simulated result, not compliance or field evidence. Lint, separate TypeScript, build and privacy gates pass. All 19 public files remain byte-identical, all seven election hashes match in public/dist, and final 22-file HTTP/MIME/byte checks pass. No dependency or approved-content/asset change.

Actual résumé/source/demo/profile controls and PDF download work. Current public Earnings Tracker targets .NET 10 Windows while résumé still names .NET 8; no external résumé edit. No approved current Earnings Tracker screenshot set was located; retain accurate text-first presentation only after an explicit owner deferral, or perform a separate safe capture task. LinkedIn returns 999 and needs human verification. Owner visual acceptance, screen reader, native Safari/physical devices, real zoom and actual OS motion remain incomplete or need explicit accepted limits. PRO-84/85 remain open. No staging, commit, push, deployment, production/Support/infrastructure action or original-checkout modification.
