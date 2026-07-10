export type ProjectCategory = "fullstack" | "core";

export interface Project {
  title: string;
  category: ProjectCategory;
  description: string;
  tags: string[];
  coverGradient: string;
  label: string;
  links: {
    github: string;
    live?: string;
    youtube?: string;
    apk?: string;
  };
}

export const projectFilters = [
  { label: "All", value: "all" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Core", value: "core" },
] as const;

export const projects: Project[] = [
  {
    title: "Streakstr",
    category: "fullstack",
    description:
      "A streak-tracking app built on Nostr. Monitors daily posting activity and turns it into streaks with automated activity monitoring.",
    tags: ["Vite", "Fastify", "PostgreSQL", "Docker"],
    coverGradient: "linear-gradient(135deg, #FF6B35 0%, #1A6DFF 100%)",
    label: "01 / Streaks",
    links: {
      github: "https://github.com/theakash04/Streakstr",
      live: "https://streakstr.online",
    },
  },
  {
    title: "Nubilus",
    category: "fullstack",
    description:
      "Open-source, self-hosted infrastructure monitoring platform. Track servers, endpoints, and databases in real-time.",
    tags: ["TypeScript", "Express", "TimescaleDB", "Rust"],
    coverGradient: "linear-gradient(135deg, #0F2027 0%, #2C5364 50%, #203A43 100%)",
    label: "02 / Infra",
    links: {
      github: "https://github.com/theakash04/Nubilus",
      live: "https://nubilus.akashtwt.in",
    },
  },
  {
    title: "Nostr Rewind",
    category: "fullstack",
    description:
      "Spotify Wrapped-style interactive story for your year on the Nostr network. AI-driven vibe analysis with zero backend.",
    tags: ["Next.js", "TypeScript", "Nostr", "Docker"],
    coverGradient: "linear-gradient(135deg, #7B2FF7 0%, #FF6B35 100%)",
    label: "03 / Social",
    links: {
      github: "https://github.com/theakash04/nostr-rewind",
    },
  },
  {
    title: "Wallhaven",
    category: "fullstack",
    description:
      "High-speed cross-platform wallpaper explorer with filters, progressive loading, immersive preview, and one-tap save.",
    tags: ["React Native", "Expo", "Gradle"],
    coverGradient: "linear-gradient(135deg, #11998E 0%, #38EF7D 100%)",
    label: "04 / Mobile",
    links: {
      github: "https://github.com/theakash04/wallhaven",
      apk: "https://drive.google.com/file/d/1lxoUAFoXJuAyaja43Dl9JPNkSwQIFKx1/view?usp=sharing",
    },
  },
  {
    title: "Recall",
    category: "fullstack",
    description:
      "Smart bookmarks with AI recall. Save articles and documents—then ask questions about them anytime.",
    tags: ["Next.js", "Express.js", "Supabase"],
    coverGradient: "linear-gradient(135deg, #FC466B 0%, #3F5EFB 100%)",
    label: "05 / AI",
    links: {
      github: "https://github.com/theakash04/Recall",
      youtube: "https://youtu.be/vUdmjR8TZdc",
    },
  },
  {
    title: "Quick Find",
    category: "fullstack",
    description:
      "Save and rediscover blogs effortlessly. Input a URL, extract, store, and summarize content with keyword search.",
    tags: ["React.js", "Express.js", "ElasticSearch"],
    coverGradient: "linear-gradient(135deg, #F7971E 0%, #FFD200 100%)",
    label: "06 / Search",
    links: {
      github: "https://github.com/theakash04/QuickSearch",
      youtube: "https://youtu.be/qL0aB5su6YI?si=aZOq9jpqKglXyD7k",
    },
  },
  {
    title: "Vocals",
    category: "fullstack",
    description:
      "Detects stuttering in user-recorded or uploaded WAV audio using a custom-trained model for real-time analysis.",
    tags: ["Next.js", "FastAPI", "ML"],
    coverGradient: "linear-gradient(135deg, #654EA3 0%, #EAAFC8 100%)",
    label: "07 / ML",
    links: {
      github: "https://github.com/theakash04/stuttering-detection-API",
    },
  },
  {
    title: "Termify",
    category: "fullstack",
    description:
      "An AI chatbot that simplifies terms and privacy policies, making them easy to understand for everyone.",
    tags: ["Streamlit", "Snowflake"],
    coverGradient: "linear-gradient(135deg, #2C3E50 0%, #4CA1AF 100%)",
    label: "08 / NLP",
    links: {
      github: "https://github.com/theakash04/Termify",
      youtube: "https://youtu.be/ZS9PkNtLM7U?si=tRtsE2bNJsp8pW46",
    },
  },
  {
    title: "Spotlight",
    category: "fullstack",
    description:
      "A social media application for sharing posts using React Native.",
    tags: ["React Native", "Convex"],
    coverGradient: "linear-gradient(135deg, #E44D26 0%, #F16529 50%, #1A1A2E 100%)",
    label: "09 / Social",
    links: {
      github: "https://github.com/theakash04/spotlight",
    },
  },
  {
    title: "Unknown Message",
    category: "fullstack",
    description:
      "Receive anonymous messages via a unique link. Share your link to collect messages without registration.",
    tags: ["Next.js", "MongoDB"],
    coverGradient: "linear-gradient(135deg, #0F0C29 0%, #302B63 50%, #24243E 100%)",
    label: "10 / Anon",
    links: {
      github: "https://github.com/theakash04/unknown-msg",
    },
  },
  {
    title: "Rag CLI",
    category: "core",
    description:
      "Chat with an AI about any webpage — from your terminal.",
    tags: ["Python", "CLI", "FAISS"],
    coverGradient: "linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)",
    label: "11 / CLI",
    links: {
      github: "https://github.com/theakash04/rag-cli",
    },
  },
  {
    title: "Tel BOT",
    category: "core",
    description:
      "A Telegram bot that sends messages to a public channel by scraping a website.",
    tags: ["Python", "Telegram API"],
    coverGradient: "linear-gradient(135deg, #1CB5E0 0%, #000851 100%)",
    label: "12 / Bot",
    links: {
      github: "https://github.com/theakash04/telBot",
    },
  },
];
