"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

const projects = [
  {
    title: "RecipeAid",
    description:
      "AI-powered recipe generator using OpenAI API, Tailwind CSS, and Next.js.",
    tech: ["Next.js", "Tailwind", "OpenAI", "MongoDB"],
    link: "https://recipe-aid-nextjs.vercel.app/",
    image: "/recipeaid.png",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen px-6 py-16 bg-[#f1f1f1] text-black font-body overflow-hidden">
        {/* Noise texture */}
        <div className="absolute inset-0 bg-[url('/noise-strong.png')] bg-repeat opacity-10 pointer-events-none z-0" />

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-fraunces text-red-800 text-center mb-12 z-10"
        >
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <section className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto z-10">
          {projects.map((proj) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-red-800 font-fraunces mb-2">
                  {proj.title}
                </h3>
                <p className="text-gray-800 text-sm mb-4">{proj.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-[#fef6f6] text-red-800 text-xs px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  href={proj.link}
                  className="text-sm text-blue-600 hover:underline mt-auto"
                >
                  View Project →
                </Link>
              </div>
            </motion.div>
          ))}
        </section>
      </main>
    </>
  );
}
