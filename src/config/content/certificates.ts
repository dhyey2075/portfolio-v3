import type { Certificate } from "@/types/content";

/** Achievements shown in the card binder (checkpoint still id="certificates"). */
export const certificates: Certificate[] = [
  {
    type: "ai",
    rare: true,
    name: "DevRev Computer Hackathon",
    art: "3rd",
    issuer: "DevRev",
    date: "2025",
    move: "Hack win",
    desc: "3rd place and $900 for shipping under pressure with a team.",
  },
  {
    type: "be",
    rare: true,
    name: "LeetCode Knight",
    art: "1900+",
    issuer: "LeetCode",
    date: "Ongoing",
    move: "Problem grind",
    desc: "900+ problems solved; max rating 1900+ (Knight).",
  },
  {
    type: "be",
    name: "Top 10 · DAIICT",
    art: "9.15",
    issuer: "DAIICT",
    date: "2023–",
    move: "Academics",
    desc: "CPI 9.15; ranked in the top 10 among 350+ students.",
  },
  {
    type: "ai",
    name: "ClaudeCast & Mystt",
    art: "2×",
    issuer: "Shipped products",
    date: "2025",
    move: "Launch",
    desc: "Two production-ready products from ideation to deployment.",
  },
  {
    type: "ops",
    name: "MSTC Core Member",
    logo: "microsoft",
    art: "MSTC",
    issuer: "Microsoft Student Tech Club",
    date: "Aug 2024–",
    move: "Community",
    desc: "Organize technical events and workshops at DAU.",
  },
];
