"use client";

import { useRef, useState, useEffect } from "react";

type Variant = "fade" | "bounce";

type ScrollRevealProps = {
  children: React.ReactNode;
  variant?: Variant;
};

export default function ScrollReveal({
  children,
  variant = "fade",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={
        variant === "bounce"
          ? visible
            ? "animate-newsletter-bounce-up"
            : "opacity-0 translate-y-16"
          : visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
      }
      style={
        variant === "fade"
          ? {
              transition:
                "opacity 0.6s ease-out, transform 0.6s ease-out",
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
