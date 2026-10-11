import type { Publication, SiteConfig } from "@/types/content";

const url = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://dhyeyparekh.in").replace(/\/$/, "");
const email = "dhyeyhparekh@gmail.com";

export const site: SiteConfig = {
  name: { first: "Dhyey", last: "Parekh", full: "Dhyey Parekh" },
  role: "Software Engineer",
  description:
    "Dhyey Parekh is a software engineer and Mathematics and Computing student at DAIICT, building backend systems, AI-powered apps, and full-stack products that ship.",
  url,
  locale: "en_IN",
  email,
  location: "Bengaluru, India",
  timezone: { label: "UTC +5:30", iana: "Asia/Kolkata" },
  availability: "Open to SWE and AI roles",
  employer: { name: "Dhirubhai Ambani University", url: "https://www.daiict.ac.in" },
  education: {
    school: "Dhirubhai Ambani University (DA-IICT)",
    degree: "B.Tech, Mathematics and Computing",
    from: "2023",
  },
  hero: {
    tags: ["Software Engineer", "AI & RAG", "Full-stack"],
    subheading:
      "I build **reliable software, AI-powered products, and clean architectures**. Former MTS intern at DevRev, former intern at Fleetway, shipping systems from idea to production.",
    scribble: "scroll to drop in ↓",
    ctas: [
      { label: "See my work", href: "#experience", primary: true },
      { label: "Contact", href: "#contact" },
    ],
  },
  contact: {
    pitch:
      "Hiring for SWE, backend, frontend, full-stack or AI roles, or building something ambitious? Tell me what you're working on.",
    reachTitle: "Reach me",
    emailLabel: "Email",
    copyLabel: "Copy",
    copiedLabel: "Copied!",
    openLabel: "Open",
    basedIn: "Based in",
    sticker: "Let's build something!",
    tag: "DP",
    form: {
      title: "Send a message",
      web3formsKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || undefined,
      endpoint: "https://api.web3forms.com/submit",
      fromName: "Portfolio contact form",
      fields: {
        name: { label: "Name", placeholder: "Your name", error: "Name is required" },
        email: { label: "Email", placeholder: "you@company.com", error: "Enter an email I can reply to" },
        message: { label: "Message", placeholder: "What are you building?", error: "Tell me a little about it" },
      },
      send: "Send message",
      sending: "Sending…",
      sent: "Sent. I'll get back to you soon.",
      failed: "That didn't go through. Email me directly:",
      opening: "Opening your email app with the message filled in.",
      subject: "Portfolio: message from {name}",
    },
  },
  socials: [
    { kind: "linkedin", label: "LinkedIn", handle: "dhyey2075", href: "https://www.linkedin.com/in/dhyey2075/" },
    { kind: "github", label: "GitHub", handle: "dhyey2075", href: "https://github.com/dhyey2075" },
    { kind: "x", label: "X", handle: "@dhyey2075", href: "https://x.com/dhyey2075" },
  ],
  resume: {
    title: "Résumé",
    href: "/resume.pdf",
    label: "View PDF",
  },
  footnote: "Skater, skates and every graphic on this page are drawn in code.",
};

export const publications: Publication[] = [];
