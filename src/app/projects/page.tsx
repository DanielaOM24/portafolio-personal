// src/app/projects/page.tsx
"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 mt-16">
      {/* Section Title */}
      <div className="text-center mb-12 fade-in">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Projects
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem ipsum has been the industry&apos;s standard dummy text.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-full bg-gray-800 p-1 gap-2">
          <button
            onClick={() => setActiveTab(0)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeTab === 0
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Tab 1
          </button>
          <button
            onClick={() => setActiveTab(1)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeTab === 1
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Tab 2
          </button>
          <button
            onClick={() => setActiveTab(2)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeTab === 2
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Tab 3
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, index) => (
          <div key={p.id} className="slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
