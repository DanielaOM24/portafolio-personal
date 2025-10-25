// src/app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="w-40 h-40 rounded-full overflow-hidden relative">
            <Image src="/foto_perfil.jpg" alt="Foto de Daniela" fill className="object-cover" />
          </div>

          <h1 className="text-4xl font-bold">Daniela Orrego</h1>
          <p className="text-xl text-gray-600">Frontend Developer • React | Next.js | TypeScript</p>

          <div className="flex gap-4 mt-4">
            <a href="/projects" className="px-4 py-2 bg-teal-500 text-white rounded-md">Ver proyectos</a>
            <a href="/contact" className="px-4 py-2 border border-gray-300 rounded-md">Contáctame</a>
          </div>
        </div>
      </div>
    </section>
  );
}
