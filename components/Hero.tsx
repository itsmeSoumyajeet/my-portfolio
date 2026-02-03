import { SITE_CONFIG } from "@/lib/data";

export default function Hero() {
  return (
    <header className="flex flex-col gap-10 leading-relaxed font-sans mt-20 sm:mt-0">
      <div className="flex flex-col justify-between mb-6 sm:mb-10">
        <h1 className="text-[50px] sm:text-8xl font-bold tracking-tight">
          {/* Mapping letters for animation potential later */}
          {"Soumyajeet Sengupta".split(" ").map((word, i) => (
            <span key={i} className="inline-block mr-4">
              {word}
            </span>
          ))}
        </h1>
        <div className="flex justify-between items-center text-[16px] sm:text-[18px] font-bold mt-6 text-zinc-400">
          <p>{SITE_CONFIG.role}</p>
          <p>📍 {SITE_CONFIG.location}</p>
        </div>
      </div>
      <div className="text-[16px] sm:text-[18px] flex flex-col gap-5 text-neutral-300">
        {SITE_CONFIG.bio.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </header>
  );
}
