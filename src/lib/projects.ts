export type Project = {
    id: string;
    title: string;
    short: string;
    description: string;
    image?: string;
    tech?: string[];
    url: string;
    createdAt?: string;
};

export const projects: Project[] = [
    {
        id: "cafe la loma",
        title: "cafe la loma",
        short: "sitio web de cafetería",
        description: "este sitio web tiene mapa de ubicación, productos y para reservar",
        image: "/cafe.jpg",
        tech: ["HTML", "CSS"],
        url: "https://github.com/DanielaOM24/ejercicio-extremo",
        createdAt: "2025-06"
    },

    {
        id: "portafolio",
        title: "portafolio",
        short: "prueba de css y HTML",
        description: "Este proyecto es una simulación de un portafolio de servicios de marketing y páginas",
        image: "/proyecto1.jpg",
        tech: ["HTML", "css"],
        url: "https://github.com/DanielaOM24/Prueba-modulo2-html-css",
        createdAt: "2025-06"
    },
    {
        id: "biblioteca",
        title: "biblioteca",
        short: "biblioteca libros y autores",
        description: "Este proyecto es una biblioteca donde se puede buscar libros por autor y libro",
        image: "/proyecto2.jpg",
        tech: ["HTML", "css"],
        url: "https://github.com/DanielaOM24/Simulacro-next-ts",
        createdAt: "2025-10"
    }
]
