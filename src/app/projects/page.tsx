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

                </p>
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
