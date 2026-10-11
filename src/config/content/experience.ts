import type { ExperienceEntry } from "@/types/content";
import { site } from "@/config/site";

export const experience: ExperienceEntry[] = [
  {
    from: "May 2026",
    to: "Jul 2026",
    title: "Member of Technical Staff Intern",
    org: "DevRev",
    orgUrl: "https://devrev.ai",
    badge: "BENGALURU",
    stamp: { value: "−25%", caption: "board load", ring: "lazy load · virtualize" },
    points: [
      "Profiled and debugged frontend performance bottlenecks in DevRev's web app, cutting board-view load time by **25%** with lazy loading and component rendering optimizations.",
      "Upgraded **Highcharts from v11 to v12** and added component-level virtualization for dashboard widgets, improving scalability of data-intensive UI views.",
    ],
  },
  {
    from: "Oct 2025",
    to: "Apr 2026",
    title: "Software Engineering Intern",
    org: "Fleetway",
    orgUrl: "https://fleetway.in",
    badge: "REMOTE · AFRICA LOGISTICS",
    stamp: { value: "4", caption: "first clients", ring: "ERP · end to end" },
    points: [
      "Owned the **end-to-end engineering lifecycle** of a logistics ERP: UI workflows for document management, automated data extraction, and fuel purchase-order allocation.",
      "Worked directly with customers from requirements and prototyping through demos and production, helping the startup acquire its **first 4 clients**.",
    ],
  },
  {
    from: "Jan 2025",
    to: "Jun 2025",
    title: "Freelance Software Developer",
    org: "Manish Pharma Lab",
    badge: "FREELANCE · GANDHINAGAR",
    stamp: { value: "BMR", caption: "ERP shipped", ring: "React · full stack" },
    points: [
      "Owned end-to-end development of a **BMR/ERP** solution, turning pharmaceutical workflows into a full-stack system with a React UI, from scratch to production.",
      "Led client interactions, requirement gathering and feature delivery for a tailored manufacturing-record platform.",
    ],
  },
  {
    from: site.education.from,
    stamp: { value: "9.15", caption: "CPI", ring: "top 10 · 350+" },
    title: site.education.degree,
    org: site.education.school,
    orgUrl: "https://www.daiict.ac.in",
    points: [
      "B.Tech in **Mathematics and Computing** at DAIICT, Gandhinagar; CPI **9.15**, ranked in the **top 10** among 350+ students.",
      "Core member of the **Microsoft Student Tech Club**, organizing technical events and workshops for students and developers.",
      "Coursework across ML, systems, DBMS, networks, DSA and software engineering.",
    ],
  },
];
