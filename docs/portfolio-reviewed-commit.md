# Portfolio v2.0 reviewed commit preparation

## Accepted external résumé outage — October 29, 2026

The owner confirms an external RxResu.me publishing outage and explicitly accepts it as nonblocking for the single local Portfolio v2.0 commit. Résumé availability is temporarily deferred. The last requests returned HTTP 404 for the résumé page and PDF endpoint; current remote availability cannot be verified. Earlier successful download/link results below describe prior observations, not current availability.

Both approved résumé corrections were previously verified: .NET 8 changed to .NET 10 only in Summary and the Earnings Tracker technology line. The previously generated PDF was confirmed to contain exactly those two text replacements, fit one page, retain the portfolio hyperlink, and render without clipping or overlap. This task preserves the existing résumé links and does not generate a replacement or introduce another host. No additional RxResu.me requests are required for this local commit.

The broken résumé links remain a separate release concern under PRO-80/PRO-83. Before production deployment, resolve them through service recovery, a separately approved fallback, or explicit acceptance of the remaining limitation. This exception does not claim working URLs or authorize publication. The owner authorizes one reviewed local commit only; no push, deployment, safeguard restoration, history rewrite or original-checkout modification.

October 29, 2026 (Asia/Manila). **Ready for reviewed commit.** No confirmed blocking defect remains within this review. This supersedes the earlier unresolved content/evidence/coverage decisions in the acceptance and migration reports; the subsequent owner authorization permits staging and one reviewed local commit only. Pushing and publication remain unauthorized.

## Final verified decisions

- **Technology:** local Earnings Tracker `EarningsTracker.csproj` explicitly sets `<TargetFramework>net10.0-windows</TargetFramework>`, corroborating the current public project configuration and README reviewed during acceptance. Current portfolio project category/stack and desktop-project skills now say .NET 10. The hero/professional identity remains version-neutral C#/.NET; no modern .NET version is attributed to historical Web Forms employment. Historical audit observations remain historical.
- **Résumé:** after explicit approval for authenticated Reactive Resume account access and the two exact wording corrections, changed .NET 8 to .NET 10 only in Summary and the Earnings Tracker technology line at https://rxresu.me/estangkij/resume. At that earlier verification, reloaded public HTML confirmed both and the downloaded PDF returned 200/application/pdf, contained exactly those two extracted-text replacements compared with the previous acceptance PDF, retained the matching Portfolio hyperlink and one-page layout, and was rendered and visually reviewed without clipping or overlap. Current availability is deferred under the accepted outage above. No local résumé source/PDF is added to this repository.
- **Project evidence:** owner explicitly approves deferring additional Earnings Tracker screenshots from the initial release as nonblocking enhancement work under PRO-81. Existing description, details, source link and `images: []` remain. Featured cards share the same text-first layout; the conditional gallery produces no empty image box. Existing accepted visual evidence already covers this card. No placeholder, fabricated screenshot or new capture task.
- **Testing limits:** owner accepts the documented automated-accessibility and browser-testing limitations as nonblocking. The prior Chrome, Edge, Firefox and Windows WebKit engine matrix, six widths, 120 keyboard dialog cases, 72 gallery selections, 48 zero-violation axe scans and local mobile Lighthouse 100/100/100/100 remain the recorded evidence, not newly rerun results. Manual screen-reader announcements/browse-mode modality, physical touch devices, native Safari/full sequential link navigation, real browser zoom and actual OS reduced-motion preference remain **Not Tested**. Viewport/media emulation and a Windows WebKit port do not establish physical-device or native Safari results. No complete WCAG conformance or field-performance claim.
- **LinkedIn:** https://www.linkedin.com/in/jethro-estangki/ is correctly formed and unchanged across profile data, JSON-LD and résumé. Opening that exact address in the existing authenticated Brave session retains the same destination and renders Jethro Estangki, the C#/.NET/ASP.NET/SQL Server software-engineering headline, Saint Louis University and the matching portfolio link. The profile's Public profile & URL is `www.linkedin.com/in/jethro-estangki`. No unrelated redirect, placeholder or obsolete-account evidence; no manual confirmation remains pending. Anonymous automation's earlier HTTP 999 remains an access limitation, not a broken-link result.

## Focused consistency review

The exact approved hero sentence is retained: “I build web applications with a focus on scalability, performance, and clean, maintainable architecture.” Projects remains the heading. SLU Election System, Earnings Tracker and Botlog remain the featured public projects; five public cards total, Hevy Companion remains unpublished. Employment remains June 2023–June 2026 Business Applications Developer with C#/Web Forms/SQL Server; leadership descriptions and historical dates are unchanged. Résumé-only numerical claims were not imported into portfolio copy. Botlog remains bot/backend-focused without advertising the unfinished dashboard. Earnings Tracker does not claim a public installer.

Project source/demo URLs and email/résumé/GitHub destinations are unchanged from the accepted browser checks. LinkedIn and the corrected résumé were checked in the preceding decision pass; current résumé availability is deferred as recorded above. No messages, camera permission or external application writes beyond the two approved résumé replacements occurred. Canonical, OG URL/image, Twitter image, Person URL, robots and sitemap consistently use `https://jethroestangki.vercel.app/`; the résumé PDF Portfolio annotation agrees. No social crawler rendering or new hosted candidate is claimed.

## Validation and limits

- Fresh `npm run lint`, separate `node node_modules/typescript/bin/tsc -b`, `npm run build`, and direct `node scripts/verify-election-assets.mjs public dist`: **pass**. The build includes pre/post-build privacy gates. No dependencies changed; prior clean-install evidence is reused.
- Seven approved election SHA-256 values match in both public and dist; public files remain byte-for-byte unchanged. The privacy check also reviews output paths and known denied hashes. Hash equality carries forward the prior visual/redaction/metadata review, not a new forensic certification.
- Final tracked diff plus every untracked candidate path reviewed; `git diff --check` passes. No private/Figma/env/Git/database/backup/evidence files are included in the intended inventory. Earlier accessibility/dialog fixes are unchanged: named/contrasting header, Back to top inside main, labelled screenshot group, actual trigger capture/focus restoration, native showModal, Close focus, Escape and scroll-lock restoration.
- No unrelated browser matrix or application tests rerun. This pass changes only technology text and decision documentation. All prior acceptance limitations remain explicit.

## Deferrals and later gates

Additional Earnings Tracker screenshots and the accepted manual coverage above are nonblocking for this reviewed commit. PRO-84 historical vendor cleanup and PRO-85 dependency/advisory reassessment remain open and separate; no erasure or dependency-remediation claim. Preserve PRO-83 hosted verification and separate approval for any staging, commit, push, preview, production, rollback or safeguard restoration. This report does not approve production release or alter issue states, dependencies or milestones.

## Git and preservation

Candidate: `codex/portfolio-v2`, HEAD/base `d1367658489d0406659d75936e41fe2f17065455`; index remains empty. Work is uncommitted. Original unfinished checkout files/index/HEAD remain unchanged. Remote master, Pages publishing, Vercel safeguards, production, original assets and historical recovery materials were not modified. Downloaded résumé/proof and verification artifacts stay outside the repository/public/dist.

Authorized commit message: `feat(portfolio): finalize recruiter-ready portfolio v2`

## Exact pending candidate inventory

This is the complete candidate relative to the clean base, including prior migration/acceptance work. Only `README.md`, `src/components/About.tsx`, `src/data/projects.ts`, `docs/portfolio-acceptance.md`, `docs/release-checklist.md` and this report changed during the final decision pass. The seven sanitized election images and infrastructure files are already in the clean base and do not enter the pending diff.

| Status | Path |
| --- | --- |
| Modified | `README.md` |
| Modified | `docs/privacy-remediation.md` |
| Modified | `index.html` |
| Deleted | `src/App.css` |
| Modified | `src/App.tsx` |
| Modified | `src/components/About.tsx` |
| Modified | `src/components/BackToTop.tsx` |
| Modified | `src/components/Contact.tsx` |
| Modified | `src/components/Footer.tsx` |
| Modified | `src/components/Home.tsx` |
| Deleted | `src/components/Loader.tsx` |
| Modified | `src/components/Navbar.tsx` |
| Modified | `src/components/Projects.tsx` |
| Modified | `src/components/Timeline.tsx` |
| Modified | `src/data/projects.ts` |
| Modified | `src/data/timeline.ts` |
| Modified | `src/index.css` |
| Added (untracked) | `docs/portfolio-acceptance.md` |
| Added (untracked) | `docs/portfolio-audit.md` |
| Added (untracked) | `docs/portfolio-migration.md` |
| Added (untracked) | `docs/portfolio-reviewed-commit.md` |
| Added (untracked) | `docs/release-checklist.md` |
| Added (untracked) | `public/projects/botlog-1-thumb.webp` |
| Added (untracked) | `public/projects/botlog-1.webp` |
| Added (untracked) | `public/projects/fal-thumb.webp` |
| Added (untracked) | `public/projects/fal.webp` |
| Added (untracked) | `public/projects/snapicorn-1-thumb.webp` |
| Added (untracked) | `public/projects/snapicorn-1.webp` |
| Added (untracked) | `public/robots.txt` |
| Added (untracked) | `public/sitemap.xml` |
| Added (untracked) | `src/components/TechStack.tsx` |
| Added (untracked) | `src/data/profile.ts` |

Total: **32 paths**. Nothing is staged. The external résumé corrections are recorded above and are not Git files.
