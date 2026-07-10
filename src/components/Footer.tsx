import { profile } from "@/data/profile";
import RevealSection from "./RevealSection";

export default function Footer() {
  return (
    <RevealSection as="footer" className="pt-4 pb-2">
      <div className="text-center space-y-2">
        <p className="text-xs text-zinc-500">
          You can find me on{" "}
          <a
            href={profile.contact.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-accent-400 transition-colors"
          >
            Twitter
          </a>
          {" "}or reach me via{" "}
          <a
            href={`mailto:${profile.contact.email}`}
            className="text-zinc-400 hover:text-accent-400 transition-colors"
          >
            Email
          </a>
        </p>
      </div>
    </RevealSection>
  );
}
