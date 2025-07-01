import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

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
      <body className="bg-beige text-black font-sans min-h-screen overflow-y-auto  ">
        <Navbar />
        {children}
        <footer className=" w-full text-center text-sm text-gray-500 py-4 mt-10">
          © 2025 Robben Juan
        </footer>
      </body>
    </html>
  );
}
