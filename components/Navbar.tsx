"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaXTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";

// When scrollY passes this (heading area), nav hides on scroll-down; shows on scroll-up
const HEADING_THRESHOLD = 100;

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isWork = pathname === "/work";
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const scrollingDown = scrollY > lastScrollY.current;
        lastScrollY.current = scrollY;

        if (scrollY <= HEADING_THRESHOLD) {
          setNavVisible(true);
        } else if (scrollingDown) {
          setNavVisible(false);
        } else {
          setNavVisible(true);
        }
        ticking.current = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d] border-b border-neutral-800 transition-all duration-300 ease-out pointer-events-none ${
        navVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div
        className={`w-full max-w-[800px] mx-auto px-5 ${
          navVisible ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <nav className="flex justify-between items-center w-full pt-5 pb-3">
          <div className="flex gap-5 items-center text-gray-300">
            <Link
              href="/"
              className={`text-[23px] font-extrabold transition-all duration-300 ${
                isHome
                  ? "text-orange-500 hover:opacity-80"
                  : "text-gray-500 opacity-70 hover:opacity-100 hover:text-orange-500"
              }`}
            >
              SG
            </Link>
            <span className="text-gray-800">|</span>
            <ul className="text-[16px] tracking-tighter flex gap-5 items-center">
              <li>
                <Link
                  href="/"
                  className="hover:text-orange-500 transition-colors duration-300 cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className={`transition-colors duration-300 cursor-pointer ${
                    isWork ? "text-orange-500" : "hover:text-orange-500"
                  }`}
                >
                  Work
                </Link>
              </li>
              <li>
                <span className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">
                  Blog
                </span>
              </li>
            </ul>
          </div>

          <ul className="flex gap-4 items-center text-gray-300">
            {[FaXTwitter, FaLinkedin, FaEnvelope].map((Icon, i) => (
              <li key={i}>
                <Icon className="hover:text-orange-500 transition-colors duration-300 cursor-pointer text-xl" />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
