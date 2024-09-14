import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akash",
  description: "Explore the portfolio of Akash, a skilled Full-Stack Developer with expertise in modern web technologies, building responsive and user-friendly applications. Discover projects, skills, and experience in creating efficient and scalable solutions.",
  keywords: "Akash, Full-Stack Developer, Web Development, Portfolio, JavaScript, React, Node.js, Next.js, CSS, Tailwind, Responsive Design",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>{children}</body>
    </html>
  );
}
