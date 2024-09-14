import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akash - Full-Stack Developer Portfolio",
  description:
    "Explore the portfolio of Akash, a skilled Full-Stack Developer with expertise in modern web technologies, building responsive and user-friendly applications. Discover projects, skills, and experience in creating efficient and scalable solutions.",
  keywords:
    "Akash, Full-Stack Developer, Web Development, Portfolio, JavaScript, React, Node.js, Next.js, CSS, Tailwind, Responsive Design",
  openGraph: {
    title: "Akash - Full-Stack Developer Portfolio",
    description:
      "Explore Akash's portfolio showcasing projects and skills in modern web development.",
    url: "https://akashtwt.tech.com",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/146631447?v=4", 
        width: 800,
        height: 600,
        alt: "Portfolio Image",
      },
    ],
    siteName: "Akash's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash - Full-Stack Developer Portfolio",
    description:
      "Explore Akash's portfolio showcasing projects and skills in modern web development.",
    images: ["https://pbs.twimg.com/profile_banners/1270067016271945728/1706889589/600x200"], 
  },
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
