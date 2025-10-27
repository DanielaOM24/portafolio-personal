// src/app/page.tsx
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
    return (
        <section className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
            {/* Meteors Animation */}
            <div className="meteor" style={{ left: '10%', animationDelay: '0s', width: '2px', height: '120px' }}></div>
            <div className="meteor" style={{ left: '40%', animationDelay: '1s', width: '2px', height: '80px' }}></div>
            <div className="meteor" style={{ left: '70%', animationDelay: '2s', width: '3px', height: '100px' }}></div>

            <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
                <div className="flex flex-col items-start gap-8 text-left slide-in-up">
                    {/* Welcome Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium shadow-lg">
                        <Sparkles size={16} />
                        <span>Welcome to my Portfolio</span>
                    </div>

                    {/* Main Heading */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                            Hi! I&apos;m <span className="gradient-text">Daniela</span>
                            <br />
                            <span className="gradient-text">Web Developer</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
                            I’m a passionate aspiring web developer with basic knowledge of Python, HTML, CSS, TypeScript, React, and
                            MongoDB. I enjoy learning new technologies and building creative, functional projects that improve
                            user experiences.
                            I’m currently focused on strengthening my front-end and back-end skills to become a full-stack developer.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="flex gap-4 mt-6">
                        <a href="/contact" className="btn-primary">
                            contact me
                            <ArrowRight size={20} />
                        </a>
                    </div>
                </div>

                {/* Profile Image - Floating Effect */}
                <div className="right-10 top-20 hidden lg:block">
                    <div className="relative w-64 h-64 floating">
                        <div className="left inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-75 blur-xl"></div>
                        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                            <Image
                                src="/foto_perfil.jpg"
                                alt="Foto de Daniela"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
