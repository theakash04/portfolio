interface Social {
  name: string;
  url: string;
  icon: "github" | "x" | "bitcoin";
  isInternal?: boolean;
}

interface Profile {
  name: string;
  pronunciation: string;
  title: string;
  tagline: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  bio: string[];
  aboutHeading: {
    prefix: string;
    highlight: string;
  };
  avatar: string;
  availability: string;
  location: string;
  workMode: string;
  socials: Social[];
  contact: {
    email: string;
    twitter: string;
  };
}

export const profile: Profile = {
  name: "Sky",
  pronunciation: "/theakash04/",
  title: "Developer",
  tagline: {
    prefix: "Developer crafting",
    highlight: "end-to-end products",
    suffix: "with care for the details.",
  },
  bio: [
    "I\'m Sky, a developer with a focus on shipping well-crafted, end-to-end products. I work across the stack from crafting interfaces in React to designing APIs and database schemas in Node and PostgreSQL.",
  ],
  aboutHeading: {
    prefix: "Building software that",
    highlight: "actually works.",
  },
  avatar: "/photo.png",
  availability: "Available",
  location: "India",
  workMode: "Hybrid",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/theakash04",
      icon: "github",
    },
    {
      name: "X",
      url: "https://x.com/theakash04",
      icon: "x",
    },
    {
      name: "Support me",
      url: "/zapme",
      icon: "bitcoin",
      isInternal: true,
    },
  ],
  contact: {
    email: "aakashkkr04@gmail.com",
    twitter: "https://x.com/theakash04",
  },
};
