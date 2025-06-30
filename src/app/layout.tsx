import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Portfolio of Robben Juan - Full-stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-sans px-4 py-6 max-w-4xl mx-auto">
        <nav className="mb-6 flex justify-between">
          <h1 className="text-xl font-bold">Robben Juan</h1>
          <div className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <a href="https://github.com/bobbyjayy" target="_blank">
              GitHub
            </a>
          </div>
        </nav>
        {children}
        <footer className="mt-10 text-sm text-gray-500">
          © 2025 Robben Juan
        </footer>
      </body>
    </html>
  );
}
