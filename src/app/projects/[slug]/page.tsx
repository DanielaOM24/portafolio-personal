// src/app/projects/[slug]/page.tsx
import { projects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

export default function ProjectDetailPage({ params }: Props) {
  const { slug } = params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold">Project not found</h2>
        <p className="mt-4">No se encontró el proyecto.</p>
        <Link href="/projects" className="text-teal-600 mt-4 inline-block">Volver a proyectos</Link>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="text-gray-600 mt-2">{project.short}</p>

      {project.image && (
        <div className="w-full h-64 relative mt-6 rounded overflow-hidden">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        </div>
      )}

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Descripción</h2>
        <p className="mt-2 text-gray-700">{project.description}</p>
      </section>

      {project.tech && (
        <div className="mt-4">
          <h3 className="font-medium">Tecnologías</h3>
          <ul className="flex gap-2 flex-wrap mt-2">
            {project.tech.map(t => <li key={t} className="text-sm px-2 py-1 bg-gray-100 rounded">{t}</li>)}
          </ul>
        </div>
      )}
    </main>
  );
}
