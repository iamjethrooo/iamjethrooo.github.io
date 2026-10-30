# Jethro Estangki — developer portfolio

## Accepted external résumé outage — October 29, 2026

The owner confirms an external RxResu.me publishing outage and explicitly accepts it as nonblocking for the single local Portfolio v2.0 commit. Résumé availability is temporarily deferred. The last requests returned HTTP 404 for the résumé page and PDF endpoint; current remote availability cannot be verified. Earlier successful download/link results below describe prior observations, not current availability.

Both approved résumé corrections were previously verified: .NET 8 changed to .NET 10 only in Summary and the Earnings Tracker technology line. The previously generated PDF was confirmed to contain exactly those two text replacements, fit one page, retain the portfolio hyperlink, and render without clipping or overlap. This task preserves the existing résumé links and does not generate a replacement or introduce another host. No additional RxResu.me requests are required for this local commit.

The broken résumé links remain a separate release concern under PRO-80/PRO-83. Before production deployment, resolve them through service recovery, a separately approved fallback, or explicit acceptance of the remaining limitation. This exception does not claim working URLs or authorize publication. The owner authorizes one reviewed local commit only; no push, deployment, safeguard restoration, history rewrite or original-checkout modification.

A single-page portfolio for C#/.NET, backend, and full-stack software engineering roles. Built with React 19, TypeScript, Vite 8, Tailwind CSS 4, and Lucide icons. The existing dark zinc/blue palette and Geist typography are retained.

## Run locally

Verified with Node.js 24.22.0 and npm 11.19.1. Use a current supported Node.js release compatible with Vite.

```powershell
npm ci
npm run dev
```

Open the Local URL printed by Vite. To check the production output:

```powershell
npm run lint
npm run build
npm run preview
```

The build verifies approved election-image hashes before bundling, runs TypeScript project checks, generates `dist/`, and verifies the output again. There is no separate test script or test framework. Preview serves the generated build; rebuild after changing application files. No credentials, database, or backend services are required.

## Structure and content

| File | Responsibility |
| --- | --- |
| `src/App.tsx` | Section order, skip link, main landmark, and footer. |
| `src/components/Home.tsx` | Professional positioning and primary calls to action. |
| `src/components/Timeline.tsx` | Employment, university leadership, and expandable education. |
| `src/data/timeline.ts` | Dates, organizations, responsibilities, and education content. |
| `src/components/Projects.tsx` | Project cards, source/demo links, native detail dialog, and screenshot gallery. |
| `src/data/projects.ts` | Ordered project records, engineering notes, and screenshot metadata. |
| `src/components/About.tsx` | Personal introduction and skills grouped by professional/project use. |
| `src/data/profile.ts` | Email, GitHub, LinkedIn, résumé page, and PDF download URLs. |
| `src/components/TechStack.tsx` | Shared technology list. |
| `src/index.css` | Shared section/button styles, focus indicators, dialog styling, and reduced motion. |
| `index.html` | Title, description, social metadata, structured data, and JavaScript-free contact fallback. |
| `public/` | Logo, screenshot assets, robots.txt, and sitemap.xml. |

The `#timeline` and `#about` anchors are preserved even though their navigation labels now read “Experience” and “About & skills.”

## Update projects

Edit `src/data/projects.ts`; array order controls display order. Lead with evidence relevant to the roles being targeted.

- Keep the purpose in `description`, a concise technical explanation in `focus`, and deeper verified notes in optional `details`.
- Set `published: false` to hide a project while preserving its record. Public lists use `publishedProjects`; use that collection for any future counts or navigation. Omitted `published` defaults to visible. Hevy Companion is hidden until release-ready; change its flag after reviewing its claims and links.
- Use `featured: true` for the leading cards. SLU Election System, Earnings Tracker, and Botlog lead the showcase. All cards show the first screenshot when supplied; projects without screenshots stay text-only. Screenshots also remain accessible in Details. Avoid fabricated screenshots or empty preview boxes.
- Add only real public `link` and `demo` URLs. Omit unavailable links; cards without either link show only Details.
- Add screenshots under `public/projects/`. Each image record needs a source path, accurate alt text, and its actual width/height. Optional `thumbnail` points to a smaller card image; optional `caption` overrides the visible caption while preserving descriptive alt text.
- Cards use lazy-loaded WebP thumbnails; dialogs load the larger images on demand. Only privacy-reviewed PNGs belong in public assets; private originals stay outside `public/`.
- Current WebP images use quality 85 and fit within 1600 × 1200. Card thumbnails use quality 82 and fit within 800 × 600. Use any trusted local image tool to regenerate them when replacing screenshots.
- Crop cards only; the dialog preserves the full screenshot aspect ratio. Use synthetic or redacted data in future project screenshots.

### Election assets and project availability

SLU Election System shows its ballot screenshot in the featured card and a three-view gallery in Details: ballot, dashboard, then aggregate insights. Seven public files provide PNG/WebP versions of each view plus a dashboard WebP thumbnail. These are format/size variants, not seven distinct screens. The owner confirmed personal Figma UI design, a complete rebuild, additional query/join optimization, and real university election usage. These contributions are described at project level without assigning them to a particular university leadership year.

The original Figma files contain student information and must remain private: do not access, inspect, export, or publish them. They are not release assets. Private screenshot originals remain intact in ignored `.private-assets/election/`. Ballot (`election-1`) retains its existing opaque field redactions and stripped XMP; aggregate insights (`election-3`) needs no additional redaction. Dashboard (`election-2`) now has five opaque raster masks over complete activity records, including identifiers, event details and timestamps. The log headings/icons and surrounding interface remain visible; no fictional records were substituted. The public dashboard PNG is a new RGB image with no source metadata, and both WebPs were resized/encoded from that sanitized image. Never copy the private dashboard variants into public assets.

`scripts/verify-election-assets.mjs` checks all seven reviewed file hashes and rejects unreviewed election files, private source paths and symbolic links in `public/` and `dist/`. It runs automatically in `npm run build`, or manually with `node scripts/verify-election-assets.mjs`. When updating an image, complete visual, redaction, metadata, frame/alpha and build-output checks before changing its approved hash. A matching hash protects a reviewed export; it does not replace privacy review. See the [release checklist](docs/release-checklist.md) for decisions, verification limits and existing hosted exposure.

Botlog showcases the Discord bot/backend only. Its existing image shows Discord command responses; the unfinished dashboard is excluded from public descriptions and technologies. Earnings Tracker targets .NET 10 (`net10.0-windows`) with WPF, EF Core and SQLite, and links to source without claiming a public installer. Its additional screenshots are owner-approved, nonblocking deferred work for the initial release; retain the text-first card without placeholders.

Descriptions were checked against the original portfolio, supplied background/résumé, and available project documentation. See [the audit and verification record](docs/portfolio-audit.md) for sources and limits. Recheck implementation status before advertising planned features or public releases.

## Accessibility and navigation

Navigation uses real fragment links, supports browser history and direct section URLs, and includes a visible mobile row. Shared CSS offsets anchors below the fixed header. The current section uses `aria-current="location"`.

Project details use native `<dialog>` with a labeled heading, initial focus on Close, Escape dismissal, background scroll locking, and focus restoration. Do not replace `showModal()` with a visual overlay without preserving these behaviors. The native modal keeps background page controls unavailable while open.

All interactive elements have visible keyboard focus. Screenshot-button outlines are inset so the card crop does not hide them. Smooth scrolling follows reduced-motion preferences. Education uses native `details/summary`.

## Metadata and hosting

This updates the existing Vercel project **jethroestangki** in **iamjethrooos-projects**. Preserve **https://jethroestangki.vercel.app/**. The clean source baseline is `d1367658489d0406659d75936e41fe2f17065455`; production remains the separately verified privacy hotfix. This uncommitted v2.0 candidate has not been published. Do not create another project or domain.

The build command is `npm run build`, output is `dist/`, and Vite uses its default root base. Navigation uses fragments. `vercel.json` explicitly selects Vite, `npm run build` and `dist`. `.vercelignore` excludes private screenshots, Figma documents and local credentials from CLI uploads; inspect the intended Git diff and build as well.

The temporary infrastructure holds remain in place: GitHub Pages uses workflow-based publishing, Vercel production-domain auto-assignment is disabled, and its ignored-build command is `exit 0`. Migration does not restore these controls. Any future commit, push, preview, production action or safeguard restoration requires separate approval. See [the migration comparison](docs/portfolio-migration.md) and [release checklist](docs/release-checklist.md).

Canonical, Open Graph, Twitter, structured data, robots and sitemap now use the existing production domain. The public résumé points to that address. Two owner-approved .NET 8 references were corrected to .NET 10 in its Summary and Earnings Tracker entry; the public HTML and regenerated one-page PDF were verified. A local build does not establish hosted deployment health. See the [release checklist](docs/release-checklist.md) for verification, remaining access requirements, publication and privacy-aware rollback steps. Commit, push and deployment each require explicit owner approval.

The logo is used for the small social preview. A dedicated social card can be added later. Full page content still renders on the client; the HTML includes crawlable metadata and a no-JavaScript contact/résumé fallback.

## Manual verification before publication

1. Check the hero, experience, projects, skills, and contact at 320px, 390px, 768px, and a desktop width.
2. Follow each navigation link; confirm its heading clears the fixed header and the URL fragment updates.
3. Use Tab and Enter to activate the skip link, project details, education disclosures, and contact links.
4. Open each project; check initial focus, screenshot switching, Escape/Close dismissal, and focus restoration.
5. Verify résumé view/download and source/demo links. Check the browser console after a fresh load.
6. Check reduced-motion behavior, zoom/reflow, and a screen reader when those tools are available.

Local browser inspection does not establish field Core Web Vitals or full accessibility compliance. The [audit record](docs/portfolio-audit.md) separates completed checks from follow-up work.

Release tracking uses the existing [Linear Portfolio project](https://linear.app/botlog/project/portfolio-b7071fc55932) and milestone **Portfolio v2.0 — Recruiter Ready**. See the [release plan](https://linear.app/botlog/document/portfolio-v20-completed-improvements-and-release-plan-8d6cfdc9461e) for the established release scope; the release checklist records current PRO-80 through PRO-85 gaps and deployment safeguards. Completed improvements are documented rather than reopened as backlog. Commit, push and deployment require explicit owner approval.

Final decision: **Ready for reviewed commit.** See [the reviewed commit report](docs/portfolio-reviewed-commit.md) for the exact pending inventory, verified LinkedIn destination, accepted testing limits, validation and proposed commit message. This is not publication approval.
