"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen mx-auto px-6 py-16 bg-[#f1f1f1] text-black font-body text-center space-y-8 text-lg leading-relaxed overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[url('/noise-strong.png')] bg-repeat opacity-10 pointer-events-none z-0" />

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-fraunces text-red-800 z-10"
        >
          About Me
        </motion.h2>

        {/* Intro Paragraphs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-6 max-w-3xl mx-auto z-10"
        >
          <p>
            I&apos;m a self-taught web developer with a passion for building
            full-stack applications that are clean, functional, and
            user-friendly. I specialize in JavaScript, TypeScript, React,
            Node.js, and MongoDB.
          </p>

          <p>
            I recently built <strong>RecipeAid</strong>, an AI-powered recipe
            generator that uses OpenAI&apos;s API to suggest meals based on user
            ingredients. It features user login and a modern UI built with
            Tailwind CSS and Next.js.
          </p>

          <p>
            I&apos;m currently focused on deepening my backend and design skills
            while preparing for developer roles. Outside of coding, I lift
            weights and study Japanese.
          </p>
        </motion.div>

        {/* Tech Stack */}
        <section className="z-10">
          <h3 className="text-2xl font-semibold mt-10 mb-4 font-fraunces text-red-700">
            Tech Stack
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-700 max-w-xl mx-auto">
            {[
              "JavaScript / TypeScript",
              "React / Next.js",
              "Node.js / Express",
              "MongoDB / Mongoose",
              "Tailwind CSS",
              "OpenAI API",
              "CI/CD",
              "Git / GitHub",
              "Vercel",
            ].map((tech) => (
              <li
                key={tech}
                className="bg-gray-200 text-gray-900 px-3 py-2 rounded text-sm font-medium"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        {/* Optional Flower Image in Corner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1 }}
          className="absolute bottom-0 right-0 w-40 sm:w-60"
        >
          <Image
            src="/flower6.png"
            width={400}
            height={400}
            alt="Decorative flower"
          />
        </motion.div>
      </main>
    </>
  );
}
