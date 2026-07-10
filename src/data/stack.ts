export interface StackGroup {
  folder: string;
  items: string[];
  isLast?: boolean;
}

export const stackGroups: StackGroup[] = [
  {
    folder: "frontend/",
    items: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    folder: "backend/",
    items: ["Node.js", "Express.js", "FastAPI", "Fastify"],
  },
  {
    folder: "languages/",
    items: ["TypeScript", "Python", "Go"],
  },
  {
    folder: "databases/",
    items: ["SQL", "NoSQL"],
  },
  {
    folder: "devops/",
    items: ["Docker", "Jenkins"],
  },
  {
    folder: "tools/",
    items: ["Git", "Jest"],
    isLast: true,
  },
];
