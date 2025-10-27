// src/app/components/Header.tsx
"use client";

import Link from "next/link";
import { Linkedin, Facebook, Instagram } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50" style={{ background: 'rgba(26, 15, 46, 0.9)', backdropFilter: 'blur(10px)' }}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="inline-flex items-center gap-2 group">
          <span className="text-xl font-bold text-white uppercase tracking-wider transition-all group-hover:text-purple-400">LOGO</span>
        </Link>

        <nav aria-label="Main navigation" className="flex items-center gap-2">
          <ul className="flex gap-8 items-center text-sm">
            <li>
              <Link href="/" className="text-white hover:text-purple-400 transition-colors duration-300 font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-white hover:text-purple-400 transition-colors duration-300 font-medium">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-white hover:text-purple-400 transition-colors duration-300 font-medium">
                Projects
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-4 ml-6">
            <div className="flex gap-2">
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-purple-500 hover:border-purple-500 transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-purple-500 hover:border-purple-500 transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-purple-500 hover:border-purple-500 transition-all duration-300">
                <Instagram size={18} />
              </a>
            </div>

            <Link href="/contact" className="btn-outline ml-2">
              Let&apos;s Connect
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}