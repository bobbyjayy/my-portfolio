// app/page.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-body flex flex-col items-center justify-center">
      {/* Navbar */}
      <header className="w-full max-w-3xl xl:max-w-6xl flex items-center relative">
        <h1 className="font-inter text-md sm:text-2xl font-bold text-gray-200 absolute">
          Robben Juan
        </h1>
        <nav className="space-x-2 sm:space-x-4 font-inter text-md sm:text-2xl text-gray-200 absolute right-0">
          <Link href="/projects" className="font-inter hover:text-red-900">
            My Projects
          </Link>
          <Link href="/about" className="font-inter hover:text-red-900">
            About
          </Link>
          <a
            href="https://github.com/bobbyjayy"
            className="font-inter hover:text-red-900"
            target="_blank"
          >
            Github
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="mt-2 w-full relative max-w-3xl xl:max-w-6xl h-[500px] md:h-[686px] bg-[#f1f1f1] text-black  overflow-hidden flex items-center justify-center">
        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 bg-[url('/noise-strong.png')] bg-repeat opacity-10  pointer-events-none z-0" />
        {/* Flower Image Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-5 xl:top-10 xl:right-0 w-64  md:w-[400px]"
        >
          <Image src="/flower6.png" width={400} height={550} alt="flower" />
        </motion.div>

        {/* Animated Text */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid sm:grid-cols-8 pb-20 sm:pl-10 text-6xl md:text-8xl xl:text-[128px] text-red-800 font-fraunces z-1 leading-none tracking-tight"
        >
          <div className=" col-span-4 sm:col-start-2 z-1">Welcome</div>
          <div className="col-span-4 col-start-2 sm:col-start-3">to my</div>
          <div className="col-span-4 col-start-2 sm:col-start-3 z-1">
            portfolio
          </div>
        </motion.h2>
      </section>
    </main>
  );
}
