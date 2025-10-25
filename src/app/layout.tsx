import "../styles/globals.css"
import { Header } from "@/components/Header"

export const metadata = {
  title: "Daniela's Portfolio",
  description: "Welcome to my personal portfolio website!",
};

export default function Rootlayout({
  children,
}: {
  children: React.ReactNode;
}){
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}