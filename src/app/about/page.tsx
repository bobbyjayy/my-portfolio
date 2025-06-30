export default function AboutPage() {
  return (
    <main className="space-y-6">
      <h2 className="text-3xl font-bold">About Me</h2>

      <p>
        I&apos;m a self-taught web developer with a passion for building
        full-stack applications that are clean, functional, and user-friendly. I
        specialize in JavaScript, TypeScript, React, Node.js, and MongoDB.
      </p>

      <p>
        I recently built <strong>RecipeAid</strong>, an AI-powered recipe
        generator that uses OpenAI&apos;s API to suggest meals based on user
        ingredients. It features login, and a clean UI built with Tailwind CSS
        and Next.js.
      </p>

      <p>
        I&apos;m currently focused on deepening my backend skills, learning
        different architectures, and preparing for junior developer roles. When
        I&apos;m not coding, I lift weights and study Japanese.
      </p>

      <section>
        <h3 className="text-2xl font-semibold mt-6 mb-2">Tech Stack</h3>
        <ul className="grid grid-cols-2 gap-2 list-disc list-inside text-gray-700">
          <li>JavaScript / TypeScript</li>
          <li>React / Next.js</li>
          <li>Node.js / Express</li>
          <li>MongoDB / Mongoose</li>
          <li>Tailwind CSS</li>
          <li>OpenAI API</li>
          <li>Clean Architecture</li>
          <li>Git / GitHub</li>
        </ul>
      </section>
    </main>
  );
}
