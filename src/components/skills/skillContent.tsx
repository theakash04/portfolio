export type SkillCardProps = {
  skills: {
    languages: string[];
    frontend: string[];
    backend: string[];
    databases: string[];
    devops: string[];
    dataEngineering: string[];
    others: string[];
  };
};

export const SkillsContent: SkillCardProps = {
  skills: {
    languages: ["TypeScript", "Python", "Rust"],
    frontend: ["React.js", "Next.js", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "FastAPI"],
    databases: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Firebase",
      "Vector DB",
      "Redis",
    ],
    devops: ["Docker", "AWS"],
    dataEngineering: [],
    others: ["Git", "GitHub", "Postman", "Jest"],
  },
};
