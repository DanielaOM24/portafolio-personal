// src/components/ProjectCard.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card bg-white rounded-2xl overflow-hidden shadow-xl cursor-pointer">
      {project.image && (
        <div className="w-full h-52 relative overflow-hidden">
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="object-cover transition-transform duration-500 hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{project.short}</p>
        <div className="mt-4">
          <Link 
            href={`/projects/${project.id}`} 
            className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:gap-3 transition-all duration-300"
          >
            View Project
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
