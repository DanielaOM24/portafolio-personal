// src/app/contact/page.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  fullName: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [status, setStatus] = useState<null | "sending" | "success" | "error">(null);

  const onSubmit = async (data: FormData) => {
    try {
      setStatus("sending");
      // por ahora solo simulamos; luego llamarás a /api/contact
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold mb-4">Contáctame</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <label>
          <span className="block text-sm">Full name</span>
          <input {...register("fullName", { required: "Nombre es obligatorio" })} className="w-full border px-3 py-2 rounded" />
          {errors.fullName && <p className="text-sm text-red-600">{errors.fullName.message}</p>}
        </label>

        <label>
          <span className="block text-sm">Email</span>
          <input {...register("email", { required: "Email es obligatorio" })} className="w-full border px-3 py-2 rounded" />
          {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
        </label>

        <label>
          <span className="block text-sm">Message</span>
          <textarea {...register("message", { required: "Mensaje requerido" })} className="w-full border px-3 py-2 rounded h-28" />
          {errors.message && <p className="text-sm text-red-600">{errors.message.message}</p>}
        </label>

        <div>
          <button type="submit" className="px-4 py-2 bg-teal-600 text-white rounded" disabled={status === "sending"}>
            {status === "sending" ? "Enviando..." : "Enviar"}
          </button>
          {status === "success" && <span className="ml-3 text-green-600">Enviado!</span>}
          {status === "error" && <span className="ml-3 text-red-600">Error al enviar</span>}
        </div>
      </form>
    </main>
  );
}
