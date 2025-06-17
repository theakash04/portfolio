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
      live: "https://recall.akashtwt.me",
      youtube: "https://youtu.be/vUdmjR8TZdc"
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
      "A socila media application for sharing posts using React Native.",
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
