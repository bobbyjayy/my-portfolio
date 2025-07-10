// components/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-black text-gray-200 px-6 py-4 flex justify-between items-center font-inter text-sm sm:text-base z-50">
      <h1 className="text-xl font-bold">Robben Juan</h1>
      <nav className="space-x-4 flex items-center">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/projects" className="hover:underline">
          Projects
        </Link>
        <a
          href="https://github.com/bobbyjayy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}
