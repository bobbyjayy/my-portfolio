export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-center space-y-8 text-lg leading-relaxed">
      <h2 className="text-4xl font-bold text-gray-900">About Me</h2>

      <p>
        I&apos;m a self-taught web developer with a passion for building
        full-stack applications that are clean, functional, and user-friendly. I
        specialize in JavaScript, TypeScript, React, Node.js, and MongoDB.
      </p>

      <p>
        I recently built <strong>RecipeAid</strong>, an AI-powered recipe
        generator that uses OpenAI&apos;s API to suggest meals based on user
        ingredients. It features user login and a modern UI built with Tailwind
        CSS and Next.js.
      </p>

      <p>
        I&apos;m currently focused on deepening my backend and design skills
        while preparing for developer roles. Outside of coding, I lift weights
        and study Japanese.
      </p>

      <section>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Tech Stack</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-700">
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
              className="bg-indigo-100 text-indigo-700 px-3 py-2 rounded text-sm font-medium"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
