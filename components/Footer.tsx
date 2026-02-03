"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isWork = pathname === "/work";

  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center font-sans border-t border-neutral-800 py-8 text-[14px] sm:text-[16px] font-medium text-neutral-500">
      <div className="mb-4 sm:mb-0">&copy; Soumyajeet Sengupta | 2026</div>
      <ul className="flex items-center gap-6">
        <li>
          <Link
            href="/"
            className={`transition-colors ${
              isHome ? "text-orange-500 hover:opacity-80" : "hover:text-white"
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-white transition-colors">
            About
          </Link>
        </li>
        <li>
          <Link
            href="/work"
            className={`transition-colors ${
              isWork ? "text-orange-500 hover:opacity-80" : "hover:text-white"
            }`}
          >
            Work
          </Link>
        </li>
        <li className="hover:text-white cursor-pointer transition-colors">
          Blog
        </li>
      </ul>
    </footer>
  );
}
