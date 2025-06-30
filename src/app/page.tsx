import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="mb-10">
        <h2 className="text-5xl font-bold mb-2">Hey, I&apos;m Robben 👋</h2>
        <p className="text-gray-700 text-2xl">
          I build full-stack apps with TypeScript, React, and Node. Here&apos;s
          my featured project.
        </p>
      </section>

      <section>
        <div className="border rounded-lg shadow-md p-4">
          <Image
            src="/recipeaid.png"
            alt="Recipe App Screenshot"
            width={800}
            height={400}
            className="rounded"
          />
          <h3 className="text-2xl font-semibold mt-4">AI Recipe Generator</h3>
          <p className="mt-2 text-xl">
            A smart app that suggests recipes based on your ingredients using
            OpenAI.
          </p>
          <p className="text-sm text-gray-500">
            Next.js · Tailwind · MongoDB · OpenAI API
          </p>
          <div className="mt-4 space-x-4">
            <Link href="https://recipe-aid-nextjs.vercel.app" target="_blank">
              Live Demo
            </Link>
            <Link
              href="https://github.com/bobbyjayy/recipeaidnextjs"
              target="_blank"
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
