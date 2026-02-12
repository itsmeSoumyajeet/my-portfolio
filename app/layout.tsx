import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import WorkInProgress from "@/components/WorkInProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soumyajeet Sengupta | Software Engineer",
  description:
    "Portfolio of Soumyajeet Sengupta, a Software Engineer based in Mumbai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.className} bg-[#0d0d0d] text-white antialiased py-3 px-5 flex flex-col items-center min-h-screen`}
      >
        <WorkInProgress />
        <Navbar />
        <div className="w-full max-w-[800px] flex flex-col justify-between gap-20 sm:gap-30 pt-[72px]">
          <PageTransition>{children}</PageTransition>
        </div>
      </body>
    </html>
  );
}
