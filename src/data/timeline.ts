type TimelineItem = {
  type: "ship" | "build"
  title: string
  company: string
  date: string
  description: string
  stack: string[],
  award?: string
}

export const timeline: TimelineItem[] = [
  {
    type: "ship",
    title: "Business Applications Developer",
    company: "Forecasting and Planning Technologies, Inc.",
    date: "2023 - Present",
    description:
      "Built and maintained features for enterprise planning systems used in business-critical workflows. Focused on performance, reliability, and delivering fixes in production environments under tight deadlines.",
    stack: ["C#", "ASP.NET", "MSSQL", "HTML/CSS", "JavaScript"],
  },
  {
    type: "ship",
    title: "IT Adviser",
    company: "Saint Louis University Commission on Elections",
    date: "2024 - 2025",
    description:
       "Provided technical direction and executed a full system rewrite after identifying performance bottlenecks in database and system-level operations, significantly improving speed and reliability for future election cycles.",
    stack: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "Apache Server", "Linux"],
  },
  {
    type: "ship",
    title: "IT Head",
    company: "Saint Louis University Commission on Elections",
    date: "2023 - 2024",
    description:
      "Led IT operations for school-wide elections, overseeing system deployment, technical coordination, and execution of digital election workflows under strict deadlines and high reliability requirements.",
    stack: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "Apache Server", "Linux"],
  },
  {
    type: "build",
    title: "Bachelor of Science in Computer Science",
    company: "Saint Louis University",
    date: "2020-2024",
    description:
      "Built multiple systems and software projects focused on core engineering fundamentals including data structures, databases, and full-stack development through project-based coursework.",
    stack: ["Java", "Python", "HTML/CSS", "SQL", "Git", "PHP"],
    award: "Magna Cum Laude"
  },
  {
    type: "build",
    title: "Information and Communications Technology",
    company: "University of the Cordilleras",
    date: "2018-2020",
    description:
      "Learned programming fundamentals and early software development concepts through hands-on coursework in logic, web development, and basic systems design.",
    stack: ["Java", "HTML/CSS", "SQL", "Git"],
    award: "With Honors"
  }
]