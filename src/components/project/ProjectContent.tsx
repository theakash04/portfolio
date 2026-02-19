export type projectData = {
  title: string;
  description: string;
  tags: {
    frontend: string;
    backend: string;
    database: string;
    devops: string;
  };
  link: {
    github: string;
    youtube?: string;
    live?: string;
    apk?: string;
  };
  progress: string;
};

export const CoreProjects: projectData[] = [
  {
    title: "Rag CLI",
    description: "Chat with an AI about any webpage — from your terminal.",
    tags: {
      frontend: "CLI Interface",
      backend: "Python",
      database: "FAISS Vector Store",
      devops: "None",
    },
    link: {
      github: "https://github.com/theakash04/rag-cli",
      youtube: "",
      live: "",
    },
    progress: "100%",
  },

  {
    title: "Tel BOT",
    description:
      "A Telegram bot that send message to a public channel by scraping a website.",
    tags: {
      frontend: "CLI Interface",
      backend: "Python",
      database: "None",
      devops: "None",
    },
    link: {
      github: "https://github.com/theakash04/telBot",
      youtube: "",
      live: "",
    },
    progress: "100%",
  },
];

export const fullStackProjects: projectData[] = [
  {
    title: "Streakstr",
    description:
      "A streak-tracking app built on Nostr. It monitors your daily posting activity and turns it into streaks. A bot watches your notes on Nostr relays and updates your streak count automatically — miss a day and your streak resets publicly. Features NIP-07 and NIP-46 authentication, countdown timers, and automated activity monitoring.",
    tags: {
      frontend: "Vite",
      backend: "Fastify",
      database: "PostgreSQL / Redis",
      devops: "Docker / BullMQ Workers",
    },
    link: {
      github: "https://github.com/theakash04/Streakstr",
      live: "https://streakstr.akashtwt.in",
    },
    progress: "60%",
  },
  {
    title: "Nubilus",
    description:
      "An open-source, self-hosted infrastructure monitoring platform. Track your servers, endpoints, and databases in real-time with a lightweight Rust agent, a robust Node.js backend, and a sleek React dashboard. Features threshold-based alerting, historical trends, and complete control over your data.",
    tags: {
      frontend: "TypeScript / Vite",
      backend: "Express / TypeScript",
      database: "PostgreSQL (TimescaleDB)",
      devops: "Docker / Rust Agent",
    },
    link: {
      github: "https://github.com/theakash04/Nubilus",
      live: "https://nubilus.akashtwt.me",
    },
    progress: "95%",
  },
  {
    title: "Nostr Rewind",
    description:
      "A client-side powerhouse that transforms your year on the Nostr network into an immersive, Spotify Wrapped-style interactive story. With zero backend and total privacy, it uses AI-driven vibe analysis to distill your decentralized presence into a unique, shareable identity.",
    tags: {
      frontend: "Next.js / TypeScript",
      backend: "None (Client-side)",
      database: "Nostr Relays",
      devops: "Docker",
    },
    link: {
      github: "https://github.com/theakash04/nostr-rewind",
      // live: "https://rewind.akashtwt.me",
    },
    progress: "100%",
  },
  {
    title: "Wallhaven",
    description:
      "High‑speed cross‑platform wallpaper explorer(React Native + Expo) pulling Wallhaven & Nekos images with filters, progressive loading, immersive preview, and one‑tap high‑res save",
    tags: {
      frontend: "React Native (Expo)",
      backend: "None",
      database: "None",
      devops: "Gradle",
    },
    link: {
      github: "https://github.com/theakash04/wallhaven",
      // youtube: ""          // (optional) add demo video link
      apk: "https://drive.google.com/file/d/1lxoUAFoXJuAyaja43Dl9JPNkSwQIFKx1/view?usp=sharing",
    },
    progress: "100%",
  },
  {
    title: "Recall",
    description:
      "Smart bookmarks with AI recall. Save articles, websites, and documents—then ask questions about them anytime. Recall remembers so you don’t have to.",
    tags: {
      frontend: "Next.js",
      backend: "Express.js",
      database: "supabase",
      devops: "None",
    },
    link: {
      github: "https://github.com/theakash04/Recall",
      // live: "https://recall.akashtwt.me",
      youtube: "https://youtu.be/vUdmjR8TZdc",
    },
    progress: "100%",
  },
  {
    title: "Quick Find",
    description:
      "QuickFind lets you save and rediscover blogs and articles effortlessly. Just input a URL, and our app extracts, stores, and summarizes the content. Search with keywords or vague descriptions to find your saved links, titles, and summaries instantly—never lose track of great reads again!",
    tags: {
      frontend: "React.js",
      backend: "Express.js",
      database: "ElasticSearch",
      devops: "None",
    },
    link: {
      github: "https://github.com/theakash04/QuickSearch",
      youtube: "https://youtu.be/qL0aB5su6YI?si=aZOq9jpqKglXyD7k",
      live: "",
    },
    progress: "100%",
  },

  {
    title: "Vocals",
    description:
      "VOCALS detects stuttering in user-recorded or uploaded WAV audio using a custom-trained model for real-time analysis.",
    tags: {
      frontend: "Next.js",
      backend: "FastAPI",
      database: "None",
      devops: "None",
    },
    link: {
      github: "https://github.com/theakash04/stuttering-detection-API",
      youtube: "",
      live: "",
    },
    progress: "100%",
  },

  {
    title: "Termify",
    description:
      "Termify is an AI chatbot that simplifies terms and privacy policies, making them easy to understand for everyone.",
    tags: {
      frontend: "Streamlit",
      backend: "None",
      database: "Snowflake",
      devops: "Streamlit c.c",
    },
    link: {
      github: "https://github.com/theakash04/Termify",
      youtube: "https://youtu.be/ZS9PkNtLM7U?si=tRtsE2bNJsp8pW46",
      live: "",
    },
    progress: "100%",
  },
  {
    title: "Spotlight",
    description:
      "A social media application for sharing posts using React Native.",
    tags: {
      frontend: "React Native",
      backend: "None",
      database: "Convex",
      devops: "None",
    },
    link: {
      github: "https://github.com/theakash04/spotlight",
      youtube: "",
      live: "",
    },
    progress: "100%",
  },
  {
    title: "Unknown Message",
    description:
      "Un-Message lets you receive anonymous messages via a unique link. Share your link to collect messages without registration, read them anonymously, and manage message acceptance.",
    tags: {
      frontend: "Next.js",
      backend: "None",
      database: "MongoDB",
      devops: "None",
    },
    link: {
      github: "https://github.com/theakash04/unknown-msg",
      youtube: "",
      live: "",
    },
    progress: "100%",
  },
];
