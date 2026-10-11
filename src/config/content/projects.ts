import type { Project } from "@/types/content";
import { site } from "@/config/site";

const gh = (repo: string) => `https://github.com/dhyey2075/${repo}`;

export const projects: Project[] = [
  {
    name: "dhyeyparekh.in",
    art: "site",
    lines: ["DHYEY", "PAREKH.in"],
    colors: { bg: "cyan", title: "ink", shadow: "pink", band: "ink", bandText: "paper" },
    meta: "2026",
    tag: "A portfolio you ride through",
    category: "Interactive site",
    problem: "I wanted a personal site that actually reflects how I build.",
    built:
      "A skate-zine portfolio in Next.js and TypeScript: scroll-driven course, decks for projects, wheels for stack, and every graphic in code.",
    result: { value: "One course", unit: "Ride from start to finish through my work" },
    stack: ["Next.js", "TypeScript", "SVG"],
    live: site.url,
    repo: gh("Portfolio-v2"),
  },
  {
    name: "DROPLY AI",
    art: "upload",
    lines: ["DROP", "LY AI"],
    colors: { bg: "pink", title: "ink", shadow: "acid", band: "ink", bandText: "paper" },
    meta: "2025–26",
    tag: "File library with Corrective RAG",
    category: "AI platform",
    problem: "Document Q&A needed tenant-safe search and answers that cite sources.",
    built:
      "Next.js + FastAPI: Gemini embeddings on pgvector, LangGraph Corrective RAG with Groq, SSE streaming, and Redis ingest workers.",
    result: { value: "CRAG + SSE", unit: "Grade chunks, web fallback when retrieval fails" },
    stack: ["Next.js", "FastAPI", "LangGraph", "pgvector", "Gemini"],
    live: "https://droply.dhyeyparekh.in",
    repo: gh("droply"),
  },
  {
    name: "RIDE",
    art: "stream",
    lines: ["RIDE"],
    colors: { bg: "blue", title: "acid", shadow: "ink", band: "acid", bandText: "ink" },
    meta: "2025–26",
    tag: "Uber-style ride booking",
    category: "Full-stack app",
    problem: "Building an Uber clone meant auth, maps, matching, and live updates in one product.",
    built:
      "React + Vite frontend with Leaflet maps, Express/MongoDB backend, JWT auth, and Socket.IO for captain–passenger matching and location sync.",
    result: { value: "Live rides", unit: "Matching and location updates over Socket.IO" },
    stack: ["React", "Express", "MongoDB", "Socket.IO", "Leaflet"],
    live: "https://ride.dhyeyparekh.in",
    repo: gh("uber_frontend_v2"),
  },
  {
    name: "CLAUDECAST",
    art: "lyrics",
    lines: ["CLAUDE", "CAST"],
    colors: { bg: "ink", title: "acid", shadow: "pink", band: "paper", bandText: "ink", bolt: "paper" },
    meta: "2026",
    tag: "Claude Code from any device",
    category: "Developer tool",
    problem: "Claude Code sessions were stuck on one machine.",
    built:
      "A single CLI (`@dhyey2075/claudecast`) that wraps Claude Code + tmux + ttyd + Cloudflare Tunnel so you can continue the same session from phone, tablet, or another computer.",
    result: { value: "One command", unit: "Local Claude mirrored to a public HTTPS URL" },
    stack: ["Node.js", "tmux", "ttyd", "Cloudflare Tunnel"],
    live: "https://claudecast-swart.vercel.app",
    repo: gh("claudecast"),
  },
];
