export type ProjectImage = {
  src: string
  alt: string
  caption?: string
  width: number
  height: number
  thumbnail?: string
}

export type Project = {
  slug: string
  title: string
  category: string
  featured?: boolean
  published?: boolean
  description: string
  focus: string
  details?: string[]
  stack: string[]
  link?: string
  demo?: string
  availability?: string
  images: ProjectImage[]
}

// Keep descriptions grounded in the source references listed in docs/portfolio-audit.md.
export const projects: Project[] = [
  {
    "slug": "university-election",
    "title": "SLU Election System",
    "category": "University election application",
    "description": "An application used in Saint Louis University elections. I designed the UI in Figma and rebuilt the entire system from scratch.",
    "focus": "Built with PHP, MySQL and JavaScript. I also improved overall application performance by rewriting SQL queries and optimizing joins, and deployed the application on Linux with Apache.",
    "stack": [
      "PHP",
      "MySQL",
      "JavaScript",
      "HTML/CSS",
      "Apache",
      "Linux"
    ],
    "images": [
      {
        "src": "/projects/election-1.webp",
        "alt": "SLU election ballot with candidate and voter details redacted",
        "caption": "Sensitive information redacted for privacy",
        "width": 1600,
        "height": 784
      },
      {
        "src": "/projects/election-2.webp",
        "alt": "SLU election dashboard with aggregate voter turnout and activity records permanently redacted",
        "caption": "Sensitive information redacted for privacy",
        "width": 1600,
        "height": 791,
        "thumbnail": "/projects/election-2-thumb.webp"
      },
      {
        "src": "/projects/election-3.webp",
        "alt": "SLU election insights showing aggregate browser, operating system and device usage",
        "width": 1600,
        "height": 796
      }
    ],
    "featured": true
  },
  {
    "slug": "earnings-tracker",
    "title": "Earnings Tracker",
    "category": ".NET 10 desktop application",
    "featured": true,
    "description": "A Windows application for tracking Nerve gaming reward sessions and earnings, with analytics and local data storage.",
    "focus": "Built with WPF and EF Core over SQLite, with backup validation and restore, migration tests, and application updates through Velopack.",
    "stack": [
      "C#",
      ".NET 10",
      "WPF",
      "EF Core",
      "SQLite"
    ],
    "link": "https://github.com/iamjethrooo/earnings-tracker",
    "images": [],
    "details": [
      "Session and payout records support reconciliation and an audit trail of adjustments.",
      "EF Core migrations and isolated xUnit tests cover accounting, imports, reconciliation, and audit history.",
      "Velopack handles application packaging and update workflows. Public distribution and anonymous update delivery remain pending; no public installer is linked here."
    ]
  },
  {
    "slug": "botlog",
    "title": "Botlog",
    "category": "Discord bot & backend",
    "description": "A TypeScript Discord bot for community moderation and automation.",
    "focus": "Built with Node.js, Prisma and PostgreSQL for persistence, plus Redis integration.",
    "stack": [
      "TypeScript",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "Redis"
    ],
    "link": "https://github.com/iamjethrooo/botlog",
    "images": [
      {
        "src": "/projects/botlog-1.webp",
        "alt": "Botlog Discord command responses",
        "width": 1337,
        "height": 860,
        "thumbnail": "/projects/botlog-1-thumb.webp"
      }
    ],
    "featured": true
  },
  {
    "slug": "hevy-companion",
    "availability": "Local application",
    "title": "Hevy Companion",
    "category": "Fitness data & full-stack web",
    "featured": true,
    "description": "A local workout companion for browsing saved Hevy workouts, recording body weight, and reviewing observed exercise performance offline.",
    "focus": "Uses Next.js and SQLite with manual synchronization, offline history, server-side protected credentials, and exercise records traceable to their source sets.",
    "stack": [
      "TypeScript",
      "Next.js",
      "React",
      "SQLite"
    ],
    "images": [],
    "details": [
      "Manual Hevy synchronization persists workout history in SQLite so saved workouts can be browsed offline.",
      "Windows DPAPI protects the API credential on the server; the browser receives connection status rather than the secret.",
      "Exercise comparisons use owner-confirmed observations and exact-rep or unchanged-load records. Dashboard aggregation and strength-to-weight analytics remain planned."
    ],
    "published": false
  },
  {
    "slug": "snapicorn",
    "title": "Snapicorn",
    "category": "Browser-based photobooth",
    "description": "A photobooth that captures photos and shows a live camera preview directly in the browser.",
    "focus": "Implemented the client-side capture and event-style photo flow with vanilla JavaScript, HTML, and CSS.",
    "stack": [
      "JavaScript",
      "HTML",
      "CSS"
    ],
    "link": "https://github.com/snapicorn/snapicorn.github.io",
    "demo": "https://snapicorn.github.io/",
    "images": [
      {
        "src": "/projects/snapicorn-1.webp",
        "alt": "Snapicorn browser photobooth interface",
        "width": 1600,
        "height": 797,
        "thumbnail": "/projects/snapicorn-1-thumb.webp"
      }
    ]
  },
  {
    "slug": "florante-at-laura",
    "title": "Florante at Laura Visual Novel",
    "category": "Interactive learning",
    "description": "A Ren’Py visual novel that helps readers explore Florante at Laura through summaries, characters, and guided reading.",
    "focus": "Combined Python and Ren’Py to present literary learning material as an interactive application.",
    "stack": [
      "Python",
      "Ren’Py"
    ],
    "link": "https://github.com/iamjethrooo/florante-at-laura-visual-novel/",
    "images": [
      {
        "src": "/projects/fal.webp",
        "alt": "Florante at Laura visual novel scene",
        "width": 1600,
        "height": 860,
        "thumbnail": "/projects/fal-thumb.webp"
      }
    ]
  }
]

// All public project lists must use this collection, including future counts and galleries.
export const publishedProjects = projects.filter((project) => project.published !== false)
