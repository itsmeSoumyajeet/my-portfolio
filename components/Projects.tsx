import Image from "next/image";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <section className="font-sans">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[24px] sm:text-[33px] font-bold">
          Latest Projects
        </h2>
        <p className="sm:text-[16px] tracking-tighter hover:text-orange-500 transition-all duration-300 cursor-pointer">
          View all
        </p>
      </div>
      <hr className="bg-orange-950 border-0 my-1 h-px" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 sm:gap-5 py-8">
        {PROJECTS.map((project, index) => (
          <div key={index} className="group">
            <div className="relative overflow-hidden rounded-md shadow-lg aspect-[3/2]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-4xl tracking-wider opacity-40 font-bold">
                  {project.year}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center mt-3">
              <h3 className="text-2xl font-bold cursor-default group-hover:text-orange-500 transition-colors">
                {project.title}
              </h3>
            </div>
            <p className="text-md text-gray-400 mt-1 leading-snug">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
