// src/app/contact/page.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/validations/contactSchema";

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: yupResolver(contactFormSchema),
  });
  const [status, setStatus] = useState<null | "sending" | "success" | "error">(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onSubmit = async (data: ContactFormData) => {
    try {
      setStatus("sending");
      setErrorMessage("");

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setStatus("success");
      reset(); // Clear the form
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(null);
      }, 5000);
    } catch (e: unknown) {
      setStatus("error");
      const error = e as { message?: string };
      setErrorMessage(error?.message || 'An error occurred. Please try again.');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus(null);
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <main 
      className="min-h-screen py-20 mt-16 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a0f2e 0%, #0d0631 50%, #0a0a2e 100%)'
      }}
    >
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 animated-gradient opacity-50"></div>
      
      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-12 fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h1>
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  {...register("fullName")}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-purple-400/30 text-white placeholder-gray-400 focus:bg-white/10 focus:border-purple-500 transition-all duration-300"
                  placeholder="Your full name"
                />
                {errors.fullName && (
                  <p className="text-sm text-red-400 mt-1">{errors.fullName.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-purple-400/30 text-white placeholder-gray-400 focus:bg-white/10 focus:border-purple-500 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-sm text-red-400 mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  {...register("message")}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-purple-400/30 text-white placeholder-gray-400 focus:bg-white/10 focus:border-purple-500 transition-all duration-300 resize-none"
                  placeholder="Your message here..."
                />
                {errors.message && (
                  <p className="text-sm text-red-400 mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="btn-primary w-full md:w-auto disabled:opacity-50"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send
                      <Send size={20} />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                <div className="mt-4">
                  {status === "success" && (
                    <div className="inline-flex items-center gap-2 text-green-400">
                      <CheckCircle size={18} />
                      <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                    </div>
                  )}
                  {status === "error" && (
                    <div className="inline-flex items-center gap-2 text-red-400">
                      <AlertCircle size={18} />
                      <span>{errorMessage || 'Error sending message. Please try again.'}</span>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
