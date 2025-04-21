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
  };
  progress: string;
};

export const CoreProjects: projectData[] = [];

export const fullStackProjects: projectData[] = [
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
      devops: "Streamlit community cloud",
    },
    link: {
      github: "https://github.com/theakash04/Termify",
      youtube: "https://youtu.be/ZS9PkNtLM7U?si=tRtsE2bNJsp8pW46",
      live: "https://termify.streamlit.app/",
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
