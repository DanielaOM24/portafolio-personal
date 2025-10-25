// src/components/ProjectCard.tsx
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="border rounded-lg overflow-hidden shadow-sm">
      {project.image && (
        <div className="w-full h-44 relative">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{project.short}</p>
        <div className="mt-3">
          <Link href={`/projects/${project.id}`} className="text-teal-600 hover:underline">
            Ver proyecto →
          </Link>
        </div>
      </div>
    </article>
  );
}
