import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-20 mb-20">
        <ScrollReveal>
          <Hero />
        </ScrollReveal>
        <ScrollReveal>
          <Projects />
        </ScrollReveal>
        <ScrollReveal>
          <PostsSection />
        </ScrollReveal>
        <ScrollReveal variant="bounce">
          <Newsletter />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}

// Simple internal component for Posts to save file space in this example
import { POSTS } from "@/lib/data";

function PostsSection() {
  return (
    <section className="font-sans">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[24px] sm:text-[33px] font-bold">Latest Posts</h2>
        <p className="text-[16px] tracking-tighter hover:text-orange-500 transition-all duration-300 cursor-pointer">
          View all
        </p>
      </div>
      <hr className="bg-orange-950 border-0 my-1 h-px" />
      <ul className="list-none text-md">
        {POSTS.map((post, i) => (
          <li
            key={i}
            className="py-4 border-b border-neutral-800 last:border-0 hover:bg-neutral-900/30 transition-colors px-2 rounded"
          >
            <div className="flex flex-col sm:flex-row sm:gap-10 sm:items-center">
              <div className="text-neutral-500 font-mono text-sm min-w-[100px]">
                {post.date}
              </div>
              <div className="font-medium">{post.title}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

