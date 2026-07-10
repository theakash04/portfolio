export interface Stat {
  value: string;
  suffix: string;
  label: string;
  icon: "calendar" | "folder";
}

export const stats: Stat[] = [
  {
    value: "1",
    suffix: "+",
    label: "Year Experience",
    icon: "calendar",
  },
  {
    value: "10",
    suffix: "+",
    label: "Personal Projects",
    icon: "folder",
  },
];
