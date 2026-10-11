export interface ProjectItem {
  id: string;
  title: string;
  category: 'fullstack' | 'mobile-ai' | 'cli-tools';
  categoryLabel: string;
  summary: string;
  description: string;
  tags: string[];
  year: string;
  href: string;
  image: string;
  links: {
    github: string;
    live?: string;
    youtube?: string;
    apk?: string;
  };
}

export const profile = {
  name: 'sky',
  handle: '/theakash04/',
  github: 'https://github.com/theakash04',
  tagline: 'Developer crafting end-to-end products with care for the details.',
  available: true,
};

export const about = {
  path: '~/about.md',
  headingLead: 'Building software that',
  headingMark: 'actually works.',
  body: "I'm Sky, a developer with a focus on shipping well-crafted, end-to-end products. I work across the stack from crafting interfaces in React to designing APIs and database schemas in Node and PostgreSQL.",
};

export const projectCategories = [
  { id: 'all', label: 'all (12)' },
  { id: 'fullstack', label: 'full stack' },
  { id: 'mobile-ai', label: 'mobile & ai' },
  { id: 'cli-tools', label: 'cli & tools' },
] as const;

export const projects: ProjectItem[] = [
  {
    id: 'streakstr',
    title: 'Streakstr',
    category: 'fullstack',
    categoryLabel: 'Full Stack',
    summary: 'A streak-tracking app built on Nostr with automated daily activity monitoring.',
    description: 'A streak-tracking platform built on the Nostr decentralized protocol. It continuously monitors daily posting and zap activities, transforming habits into verifiable streaks with automated activity workers and lightweight persistence.',
    tags: ['Vite', 'Fastify', 'PostgreSQL', 'Docker'],
    year: '2026',
    href: 'https://github.com/theakash04/Streakstr',
    image: 'https://opengraph.githubassets.com/1/theakash04/Streakstr',
    links: {
      github: 'https://github.com/theakash04/Streakstr',
      live: 'https://streakstr.online',
    },
  },
  {
    id: 'nubilus',
    title: 'Nubilus',
    category: 'fullstack',
    categoryLabel: 'Full Stack & Infra',
    summary: 'Open-source, self-hosted infrastructure monitoring platform for servers and endpoints.',
    description: 'Self-hosted, high-throughput monitoring platform designed for independent developers and homelabs. Tracks server metrics, health endpoints, latency distributions, and databases in real-time with zero external telemetry lock-in.',
    tags: ['TypeScript', 'Express', 'TimescaleDB', 'Rust'],
    year: '2026',
    href: 'https://github.com/theakash04/Nubilus',
    image: 'https://opengraph.githubassets.com/1/theakash04/Nubilus',
    links: {
      github: 'https://github.com/theakash04/Nubilus',
      live: 'https://nubilus.akashtwt.in',
    },
  },
  {
    id: 'nostr-rewind',
    title: 'Nostr Rewind',
    category: 'fullstack',
    categoryLabel: 'Social & Web3',
    summary: 'Spotify Wrapped-style interactive story for your year on the Nostr network.',
    description: 'An interactive, client-side story recap for the Nostr network. Queries decentralized relays, computes social engagement metrics, and creates personalized retrospective slides with zero backend storage.',
    tags: ['Next.js', 'TypeScript', 'Nostr', 'Docker'],
    year: '2026',
    href: 'https://github.com/theakash04/nostr-rewind',
    image: 'https://opengraph.githubassets.com/1/theakash04/nostr-rewind',
    links: {
      github: 'https://github.com/theakash04/nostr-rewind',
    },
  },
  {
    id: 'wallhaven',
    title: 'Wallhaven',
    category: 'mobile-ai',
    categoryLabel: 'Mobile App',
    summary: 'High-speed cross-platform wallpaper explorer with progressive loading and one-tap save.',
    description: 'A native mobile application for browsing high-resolution wallpapers. Features advanced tag filtering, progressive image streaming, immersive full-screen preview mode, and native gallery downloads.',
    tags: ['React Native', 'Expo', 'Gradle'],
    year: '2025',
    href: 'https://github.com/theakash04/wallhaven',
    image: 'https://opengraph.githubassets.com/1/theakash04/wallhaven',
    links: {
      github: 'https://github.com/theakash04/wallhaven',
      apk: 'https://drive.google.com/file/d/1lxoUAFoXJuAyaja43Dl9JPNkSwQIFKx1/view?usp=sharing',
    },
  },
  {
    id: 'recall',
    title: 'Recall',
    category: 'mobile-ai',
    categoryLabel: 'AI & Knowledge',
    summary: 'Smart bookmarks with AI recall. Save articles and ask questions about them anytime.',
    description: 'Knowledge indexing application that converts web links, PDF documents, and research papers into searchable semantic vector embeddings. Features interactive Q&A over bookmarked knowledge bases.',
    tags: ['Next.js', 'Express.js', 'Supabase'],
    year: '2025',
    href: 'https://github.com/theakash04/Recall',
    image: 'https://img.youtube.com/vi/vUdmjR8TZdc/hqdefault.jpg',
    links: {
      github: 'https://github.com/theakash04/Recall',
      youtube: 'https://youtu.be/vUdmjR8TZdc',
    },
  },
  {
    id: 'quick-find',
    title: 'Quick Find',
    category: 'fullstack',
    categoryLabel: 'Search & Archive',
    summary: 'Save and rediscover blogs effortlessly with URL extraction, summarization, and search.',
    description: 'Content extraction and search pipeline. Input any article URL to parse readable markdown, index full-text content in ElasticSearch, and query your personal knowledge repository with instant fuzzy search.',
    tags: ['React.js', 'Express.js', 'ElasticSearch'],
    year: '2025',
    href: 'https://github.com/theakash04/QuickSearch',
    image: 'https://img.youtube.com/vi/qL0aB5su6YI/hqdefault.jpg',
    links: {
      github: 'https://github.com/theakash04/QuickSearch',
      youtube: 'https://youtu.be/qL0aB5su6YI?si=aZOq9jpqKglXyD7k',
    },
  },
  {
    id: 'vocals',
    title: 'Vocals',
    category: 'mobile-ai',
    categoryLabel: 'ML & Audio',
    summary: 'Detects stuttering in recorded audio using a custom-trained model for real-time analysis.',
    description: 'Speech analysis engine detecting disfluency and stuttering in audio streams. Employs acoustic feature extraction and a fine-tuned neural network to deliver phoneme-level diagnostic scores.',
    tags: ['Next.js', 'FastAPI', 'ML'],
    year: '2025',
    href: 'https://github.com/theakash04/stuttering-detection-API',
    image: 'https://opengraph.githubassets.com/1/theakash04/stuttering-detection-API',
    links: {
      github: 'https://github.com/theakash04/stuttering-detection-API',
    },
  },
  {
    id: 'termify',
    title: 'Termify',
    category: 'mobile-ai',
    categoryLabel: 'NLP & AI',
    summary: 'An AI chatbot that simplifies terms and privacy policies into clear explanations.',
    description: 'Legal tech assistant parsing dense End User License Agreements and Privacy Policies. Identifies predatory data collection clauses, tracking cookies, and arbitration waivers in plain language.',
    tags: ['Streamlit', 'Snowflake'],
    year: '2025',
    href: 'https://github.com/theakash04/Termify',
    image: 'https://img.youtube.com/vi/ZS9PkNtLM7U/hqdefault.jpg',
    links: {
      github: 'https://github.com/theakash04/Termify',
      youtube: 'https://youtu.be/ZS9PkNtLM7U?si=tRtsE2bNJsp8pW46',
    },
  },
  {
    id: 'spotlight',
    title: 'Spotlight',
    category: 'mobile-ai',
    categoryLabel: 'Mobile App',
    summary: 'A sleek social media application for sharing posts built with React Native.',
    description: 'Modern mobile social feed featuring reactive real-time state synchronization, optimistic UI updates, image attachments, and instant activity feeds powered by Convex backend functions.',
    tags: ['React Native', 'Convex'],
    year: '2025',
    href: 'https://github.com/theakash04/spotlight',
    image: 'https://opengraph.githubassets.com/1/theakash04/spotlight',
    links: {
      github: 'https://github.com/theakash04/spotlight',
    },
  },
  {
    id: 'unknown-message',
    title: 'Unknown Message',
    category: 'fullstack',
    categoryLabel: 'Full Stack',
    summary: 'Receive anonymous messages via a unique link without requiring registration.',
    description: 'Privacy-respecting anonymous messaging application. Users create unique profile links to receive encrypted feedback and anonymous questions with rate limiting and automated spam filters.',
    tags: ['Next.js', 'MongoDB'],
    year: '2024',
    href: 'https://github.com/theakash04/unknown-msg',
    image: 'https://opengraph.githubassets.com/1/theakash04/unknown-msg',
    links: {
      github: 'https://github.com/theakash04/unknown-msg',
    },
  },
  {
    id: 'rag-cli',
    title: 'Rag CLI',
    category: 'cli-tools',
    categoryLabel: 'CLI & LLM',
    summary: 'Chat with an AI about any webpage — directly from your terminal.',
    description: 'Terminal CLI tool implementing retrieval-augmented generation. Scrapes and parses web documentation on the fly, indexes chunks with local vector storage (FAISS), and answers terminal queries.',
    tags: ['Python', 'CLI', 'FAISS'],
    year: '2024',
    href: 'https://github.com/theakash04/rag-cli',
    image: 'https://opengraph.githubassets.com/1/theakash04/rag-cli',
    links: {
      github: 'https://github.com/theakash04/rag-cli',
    },
  },
  {
    id: 'tel-bot',
    title: 'Tel BOT',
    category: 'cli-tools',
    categoryLabel: 'Bot & Automation',
    summary: 'A Telegram bot that monitors and posts scraped web updates to a public channel.',
    description: 'Automated scraping daemon that watches specified websites for updates, diffs content changes, and formats notifications dispatched to Telegram broadcasting channels.',
    tags: ['Python', 'Telegram API'],
    year: '2024',
    href: 'https://github.com/theakash04/telBot',
    image: 'https://opengraph.githubassets.com/1/theakash04/telBot',
    links: {
      github: 'https://github.com/theakash04/telBot',
    },
  },
];

export const stack = [
  { folder: 'frontend/', items: ['React.js', 'Next.js', 'Tailwind CSS'] },
  { folder: 'backend/', items: ['Node.js', 'Express.js', 'FastAPI', 'Fastify'] },
  { folder: 'languages/', items: ['TypeScript', 'Python', 'Go'] },
  { folder: 'databases/', items: ['SQL', 'NoSQL'] },
  { folder: 'devops/', items: ['Docker', 'Jenkins'] },
  { folder: 'tools/', items: ['Git', 'Jest'] },
];

export const experience = [
  {
    role: 'Software Developer',
    company: 'PyxisBlu Solutions Pvt. Ltd.',
    type: 'Full-time',
    mode: 'In-office',
    period: 'Jul 2026 — Present',
    current: true,
    bullets: [] as string[],
  },
  {
    role: 'Software Developer',
    company: 'PyxisBlu Solutions Pvt. Ltd.',
    type: 'Internship',
    mode: 'Hybrid',
    period: 'Jul 2025 — Jun 2026',
    current: false,
    bullets: [
      'Developed and maintained full-stack web applications using Next.js, TypeScript, Node.js, Express, and PostgreSQL.',
      'Designed and implemented REST APIs, business logic, and database schemas for production applications.',
      'Built responsive dashboards, reusable UI components, and feature-rich interfaces.',
      'Integrated authentication, RBAC authorization, payment gateways, file storage, and third-party APIs.',
      'Collaborated with cross-functional teams to translate business requirements into scalable solutions.',
      'Optimized application performance and resolved production issues across the SDLC.',
    ],
  },
];

export const navLinks = [
  { label: 'about', href: '#about' },
  { label: 'projects', href: '#projects' },
  { label: 'stack', href: '#stack' },
  { label: 'experience', href: '#experience' },
];
