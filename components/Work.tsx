import Image from "next/image";
import { EXPERIENCE } from "@/lib/data";

export default function Work() {
  return (
    <section id="work" className="font-sans">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[24px] sm:text-[33px] font-bold">
          Professional Experience
        </h2>
      </div>
      <hr className="bg-orange-950 border-0 my-1 h-px" />

      <ul className="list-none text-md">
        {EXPERIENCE.map((job, i) => (
          <li
            key={i}
            className="py-5 border-b border-neutral-800 last:border-0 px-2 rounded"
          >
            <div className="flex flex-col sm:flex-row sm:gap-10 sm:items-baseline mb-2">
              <div className="flex items-center gap-3">
                {job.logo && (
                  <div className="relative w-10 h-10 shrink-0 rounded overflow-hidden bg-neutral-800/50 flex items-center justify-center">
                    <Image
                      src={job.logo}
                      alt={`${job.company} logo`}
                      width={40}
                      height={40}
                      className="object-contain p-0.5"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-bold">{job.role}</h3>
                  <p className="text-neutral-400 text-sm sm:text-base">
                    {job.company}
                  </p>
                </div>
              </div>
              <div className="text-neutral-500 font-mono text-sm min-w-[140px] shrink-0">
                {job.dateRange}
              </div>
            </div>
            <ul className="list-disc list-inside text-neutral-300 text-[15px] space-y-1.5 ml-0 pl-1">
              {job.highlights.map((highlight, j) => (
                <li key={j} className="leading-snug">
                  {highlight}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
