import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sky — Developer",
  description:
    "Sky — Developer crafting full-stack experiences with care for the details.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

