"use client";

import React, { useEffect, useRef } from "react";

interface RevealSectionProps {
  children: React.ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4;
  className?: string;
  as?: React.ElementType;
}

export default function RevealSection({
  children,
  delay = 0,
  className = "",
  as: Tag = "section",
}: RevealSectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay > 0 ? ` reveal-d${delay}` : "";

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      className={`reveal${delayClass} ${className}`}
    >
      {children}
    </Tag>
  );
}
