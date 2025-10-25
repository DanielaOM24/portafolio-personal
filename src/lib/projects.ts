export type Project ={
    id:string;
    title:string;
    short:string;
    description:string;
    image?:string;
    tech?:string[];
    createdAt?:string;
};

export const projects: Project[]=[
    {
        id:"portafolio-personal",
        title:"Portafolio Personal",
        short:"personal portafolio build with next.js",
        description:"portafolio with projects and contact form. uses next",
        image:"/foto_perfil.jpg",
        tech:["Next.js","TypeScript","TailwindCSS"],
        createdAt:"2025-10-24"
    },

    {
        id: "todo-next",
        title: "Todo App",
        short: "Simple todo app with CRUD",
        description: "Todo app using React, local storage and nice UI.",
        image: "/foto_proyecto2.jpg",
        tech: ["React", "TypeScript"],
        createdAt: "2025-10-24"
    }
]