import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function ProjectSection() {
  const data = [
    {
      title: "Do Blogs",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            An Appwrite-powered platform for effortless blogging and reading.
            Styled with Tailwind CSS and Material UI, built on ViteReact JS for
            speed and responsiveness.{" "}
            <Visit href={"https://doblogs.vercel.app"} />
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://utfs.io/f/f4cNGT6mesgbriSJKCTaiCruDOFEVQvH35AgeYLhklNZw7xb"
              alt="doblogs templates"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://utfs.io/f/f4cNGT6mesgb029TJLvaLKT984IvqcWZCsJxEtfylHDgbR7U"
              alt="doblogs templates"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://utfs.io/f/f4cNGT6mesgbne4QMQaNS3Q1TAevIozVlKrM6k2dOpwXiWPU"
              alt="doblogs templates"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://utfs.io/f/f4cNGT6mesgbyPGSentpaw7QBzULVy5lp8FheMoHKGPc0IxS"
              alt="doblogs templates"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "unknown messages",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Un-Message lets you receive anonymous messages via a unique link.
            Share your link to collect messages without registration, read them
            anonymously, and manage message acceptance.{" "}
            <Visit href={"https://un-msg.vercel.app"} />
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://utfs.io/f/f4cNGT6mesgbnHAmbuaNS3Q1TAevIozVlKrM6k2dOpwXiWPU"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://utfs.io/f/f4cNGT6mesgbqY7W8dcpk3BSAPWTJgQaGcFu6zmI259ornCt"
              alt="login template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://utfs.io/f/f4cNGT6mesgb14aK3eGDCbjWk9eL1YKZH4rpAtUq8uROgVvm"
              alt="dashboard template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://utfs.io/f/f4cNGT6mesgbi1QJBTKu8Phcfx50L6VwnRSGYNMEIUdW9laH"
              alt="message template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

interface VisitProps {
  href: string | undefined; // Accepts a string or undefined
}

function Visit({ href }: VisitProps) {
  return (
    <a
      href={href}
      target="_blank" // Use "_blank" to open in a new tab
      rel="noopener noreferrer" // Recommended for security reasons
      className="text-blue-400 underline"
    >
      Visit &gt;
    </a>
  );
}
