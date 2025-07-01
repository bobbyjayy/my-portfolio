import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" snap-y snap-mandatory h-screen overflow-y-scroll scrollbar-hide pt-20">
      <section
        className="relative snap-start h-screen w-full flex items-center justify-center "
        id="hero"
      >
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-2">Hey, I&apos;m Robben 👋</h2>
          <p className="text-gray-700 text-2xl">
            I build full-stack apps with TypeScript, React, and Node.
          </p>
        </div>
        <a
          href="#projects"
          className="absolute text-xl bottom-10 flex flex-col text-center text-indigo-400 hover:text-indigo-600  text-sm"
        >
          See My Work
          <span>↓</span>
        </a>
      </section>

      <section
        className="relative snap-start h-screen w-full flex items-center justify-center px-6"
        id="projects"
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 max-w-5xl w-full">
          {/* Image */}
          <div className="flex-1 border rounded-lg shadow-md overflow-hidden">
            <Image
              src="/recipeaid.png"
              alt="Recipe App Screenshot"
              width={800}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-2">AI Recipe Generator</h3>
            <p className="text-lg text-gray-700 mb-4">
              A smart app that suggests recipes based on your ingredients using
              OpenAI.
            </p>

            {/* Tech stack tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {["Next.js", "Tailwind", "MongoDB", "OpenAI API"].map((tech) => (
                <span
                  key={tech}
                  className="bg-indigo-100 text-indigo-600 text-xs px-2 py-1 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="space-x-4">
              <Link
                href="https://recipe-aid-nextjs.vercel.app"
                target="_blank"
                className="text-indigo-600 hover:underline"
              >
                Live Demo
              </Link>
              <Link
                href="https://github.com/bobbyjayy/recipeaidnextjs"
                target="_blank"
                className="text-indigo-600 hover:underline"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
        <a
          href="#hero"
          className="absolute text-xl bottom-10 flex flex-col text-center text-indigo-400 hover:text-indigo-600  text-sm"
        >
          <span>↑</span>
          Back to Top
        </a>
      </section>
    </main>
  );
}
