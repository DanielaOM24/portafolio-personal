// src/app/components/Header.tsx
"use client";

import Link from "next/link";
import { Home, User, Folder, Mail } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white z-50 shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="inline-flex items-center gap-2">
          <span className="text-lg font-semibold">Daniela <span className="text-teal-400">Dev</span></span>
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex gap-6 items-center text-sm">
            <li>
              <Link href="/" className="flex items-center gap-2 hover:text-teal-300">
                <Home size={18} aria-hidden /> <span className="sr-only sm:not-sr-only">Home</span>
              </Link>
            </li>

            <li>
              <Link href="/about" className="flex items-center gap-2 hover:text-teal-300">
                <User size={18} aria-hidden /> <span className="sr-only sm:not-sr-only">About</span>
              </Link>
            </li>

            <li>
              <Link href="/projects" className="flex items-center gap-2 hover:text-teal-300">
                <Folder size={18} aria-hidden /> <span className="sr-only sm:not-sr-only">Projects</span>
              </Link>
            </li>

            <li>
              <Link href="/contact" className="flex items-center gap-2 hover:text-teal-300">
                <Mail size={18} aria-hidden /> <span className="sr-only sm:not-sr-only">Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export { Header };