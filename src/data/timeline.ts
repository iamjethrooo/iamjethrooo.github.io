type TimelineItem = {
  type: "professional" | "leadership" | "education"
  title: string
  company: string
  date: string
  description?: string
  highlights?: string[]
  award?: string
}

export const timeline: TimelineItem[] = [
  {
    type: "professional",
    title: "Business Applications Developer",
    company: "Forecasting and Planning Technologies, Inc.",
    date: "June 2023 – June 2026",
    description:
      "Developed and maintained C# and ASP.NET Web Forms business applications for multiple clients.",
    highlights: [
      "Implemented business logic and features for complex client requirements.",
      "Investigated and resolved production issues in existing client systems.",
      "Wrote and optimized T-SQL queries and stored procedures in SQL Server.",
    ],
  },
  {
    type: "leadership",
    title: "IT Adviser",
    company: "Saint Louis University Commission on Elections",
    date: "2024–2025",
    description:
      "Provided technical direction and rebuilt the election application from scratch after identifying database and system performance bottlenecks.",
  },
  {
    type: "leadership",
    title: "IT Head",
    company: "Saint Louis University Commission on Elections",
    date: "2023–2024",
    description:
      "Led IT operations for university elections, overseeing system deployment, coordinating technical work, and supporting digital election workflows.",
  },
  {
    type: "education",
    title: "Bachelor of Science in Computer Science",
    company: "Saint Louis University",
    date: "2020–2024",
    description:
      "Coursework included data structures, databases, and full-stack development.",
    award: "Magna Cum Laude"
  },
  {
    type: "education",
    title: "Information and Communications Technology",
    company: "University of the Cordilleras",
    date: "2018–2020",
    description:
      "Coursework covered programming fundamentals, logic, and web development.",
    award: "With Honors"
  }
]
