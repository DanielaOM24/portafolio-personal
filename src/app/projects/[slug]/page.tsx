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
      <div className="max-w-4xl mx-auto px-6 py-20 mt-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Project not found</h2>
        <p className="text-gray-300 mb-8">No se encontró el proyecto.</p>
        <Link href="/projects" className="text-purple-400 hover:text-purple-300 transition-colors">← Back to Projects</Link>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-20 mt-16">
      <div className="fade-in">
        {/* Back Button */}
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-8"
        >
          ← Back to Projects
        </Link>

        {/* Project Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
        <p className="text-xl text-gray-300 mb-8">{project.short}</p>

        {/* Project Image */}
        {project.image && (
          <div className="w-full h-96 relative mt-6 rounded-2xl overflow-hidden shadow-2xl border border-purple-500/20">
            <Image src={project.image} alt={project.title} fill className="object-cover" />
          </div>
        )}

        {/* Description Section */}
        <section className="mt-10 bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl font-semibold text-white mb-4">Description</h2>
          <p className="text-gray-300 leading-relaxed">{project.description}</p>
        </section>

        {/* Technologies Section */}
        {project.tech && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-white mb-4">Technologies</h3>
            <ul className="flex gap-3 flex-wrap">
              {project.tech.map(t => (
                <li 
                  key={t} 
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
