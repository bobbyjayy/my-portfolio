"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-beige px-4 py-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">Robben Juan</h1>
        <div className="space-x-4">
          <Link href="/" className="hover:border-b-1 hover:border-indigo-700">
            Home
          </Link>
          <Link
            href="/about"
            className="hover:border-b-1 hover:border-indigo-700"
          >
            About
          </Link>
          <a
            href="https://github.com/bobbyjayy"
            target="_blank"
            className="hover:border-b-1 hover:border-indigo-700"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
