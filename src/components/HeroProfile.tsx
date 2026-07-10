import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";
import RevealSection from "./RevealSection";

function GitHubIcon() {
  return (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-[16px] h-[16px]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

function BitcoinIcon() {
  return (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z" />
    </svg>
  );
}

const iconMap = { github: GitHubIcon, x: XIcon, bitcoin: BitcoinIcon };

export default function HeroProfile() {
  return (
    <RevealSection>
      <div className="card rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
          <div className="flex items-center gap-5 sm:gap-6">
            <div className="relative shrink-0 w-20 h-20 sm:w-24 sm:h-24">
              <div className="absolute -inset-2 bg-gradient-to-br from-accent-500/30 to-blue-400/10 rounded-3xl blur-xl" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-emerald-500 rounded-full ring-4 ring-ink-950 animate-pulse-slow" />
            </div>

            <div className="lg:hidden min-w-0">
              <h1 className="text-3xl font-bold tracking-tight leading-none">
                {profile.name}
              </h1>
              <p className="text-zinc-400 mt-1.5 text-sm">
                {profile.title} · {profile.workMode}
              </p>
            </div>
          </div>

          <div className="hidden lg:block flex-1 min-w-0">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h1 className="text-4xl xl:text-5xl font-bold tracking-tight leading-none">
                {profile.name}
              </h1>
              <span className="text-zinc-600 text-sm font-mono">
                {profile.pronunciation}
              </span>
            </div>
            <p className="mt-3 text-zinc-400 text-base max-w-xl">
              {profile.tagline.prefix}{" "}
              <span className="text-zinc-100 font-medium">
                {profile.tagline.highlight}
              </span>{" "}
              {profile.tagline.suffix}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {profile.socials.map((social) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap];
              const LinkTag = social.isInternal ? Link : "a";
              const linkProps = social.isInternal
                ? { href: social.url }
                : {
                    href: social.url,
                    target: "_blank" as const,
                    rel: "noopener noreferrer",
                  };

              return (
                <LinkTag
                  key={social.name}
                  title={social.name}
                  className="social-btn"
                  {...linkProps}
                >
                  <Icon />
                </LinkTag>
              );
            })}

            <span className="hidden sm:block w-px h-7 bg-white/10 mx-1" />
            <span className="hidden sm:inline-flex items-center gap-2 text-xs text-zinc-400 px-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse-slow" />
              {profile.availability}
            </span>
          </div>

          <div className="lg:hidden flex items-center gap-3 text-xs text-zinc-500">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse-slow" />
              Available for work
            </span>
            <span className="text-zinc-700">·</span>
            <span>
              {profile.workMode} · {profile.location}
            </span>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
