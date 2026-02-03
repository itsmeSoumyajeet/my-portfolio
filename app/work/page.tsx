import Work from "@/components/Work";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Work | Soumyajeet Sengupta",
  description: "Professional experience of Soumyajeet Sengupta.",
};

export default function WorkPage() {
  return (
    <>
      <main className="flex flex-col gap-20 mb-20">
        <ScrollReveal>
          <Work />
        </ScrollReveal>
        <ScrollReveal variant="bounce">
          <Newsletter />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
