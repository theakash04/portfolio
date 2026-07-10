export interface Experience {
  role: string;
  company: string;
  type: string;
  location: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  points: string[];
}

export const experiences: Experience[] = [
  {
    role: "Frontend Developer",
    company: "PyxisBlu Solutions Pvt. Ltd.",
    type: "Internship",
    location: "Hybrid",
    startDate: "Jul 2025",
    endDate: "Jun 2026",
    isCurrent: false,
    points: [
      "Developed and maintained full-stack web applications using Next.js, TypeScript, Node.js, Express, and PostgreSQL.",
      "Designed and implemented REST APIs, business logic, and database schemas for production applications.",
      "Built responsive dashboards, reusable UI components, and feature-rich interfaces.",
      "Integrated authentication, RBAC authorization, payment gateways, file storage, and third-party APIs.",
      "Collaborated with cross-functional teams to translate business requirements into scalable solutions.",
      "Optimized application performance and resolved production issues across the SDLC.",
    ],
  },
];
