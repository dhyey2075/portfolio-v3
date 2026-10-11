import type { DurometerTier, WheelGroup } from "@/types/content";

/** Highest `min` that a wheel's durometer reaches wins. */
export const durometerTiers: DurometerTier[] = [
  { min: 99, label: "daily" },
  { min: 92, label: "shipped" },
  { min: 0, label: "built with" },
];

/** Marks drawn on the durometer legend bar (scale runs from `range[0]` to `range[1]`). */
export const durometerScale = { range: [78, 101] as const, marks: [84, 92, 99] };

export const tierFor = (duro: number) => durometerTiers.find((t) => duro >= t.min)?.label ?? "";

export const wheelGroups: WheelGroup[] = [
  {
    name: "AI & data",
    color: "pink",
    text: "ink",
    items: [
      { name: "Python", duro: 99 },
      { name: "RAG", duro: 95 },
      { name: "LangGraph", duro: 95 },
      { name: "LangChain", duro: 95 },
      { name: "Gemini", duro: 95 },
      { name: "Agentic AI", duro: 92 },
      { name: "Vector search", duro: 92 },
      { name: "LLMs", duro: 92 },
      { name: "Groq", duro: 84 },
    ],
  },
  {
    name: "Backend & data",
    color: "acid",
    text: "ink",
    items: [
      { name: "Node.js", duro: 99 },
      { name: "Express", duro: 99 },
      { name: "REST APIs", duro: 99 },
      { name: "WebSockets", duro: 95 },
      { name: "PostgreSQL", duro: 95 },
      { name: "MongoDB", duro: 95 },
      { name: "FastAPI", duro: 92 },
      { name: "pgvector", duro: 92 },
      { name: "Neon", duro: 88 },
      { name: "Qdrant", duro: 84 },
      { name: "SQL", duro: 92 },
    ],
  },
  {
    name: "Frontend",
    color: "white",
    text: "ink",
    items: [
      { name: "TypeScript", duro: 99 },
      { name: "JavaScript", duro: 99 },
      { name: "React", duro: 99 },
      { name: "Next.js", duro: 99 },
      { name: "Tailwind", duro: 95 },
      { name: "HTML / CSS", duro: 95 },
      { name: "React Native", duro: 84 },
    ],
  },
  {
    name: "DevOps & tools",
    color: "blue",
    text: "white",
    items: [
      { name: "Git", duro: 99 },
      { name: "Docker", duro: 92 },
      { name: "Vercel", duro: 95 },
      { name: "Render", duro: 92 },
      { name: "CI/CD", duro: 88 },
      { name: "Pytest", duro: 84 },
    ],
  },
];
