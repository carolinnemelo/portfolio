"use client";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function Contact() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = () => {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(message);
    const mailtoLink = `mailto:carolinnepmelo@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
    window.location.href = mailtoLink; // Abre o cliente de email
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-between h-screen bg-secondary px-4 md:px-16 py-16">
      {/* Left Section */}
      <div className="flex flex-col gap-6 max-w-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-primary">
          {"Let's build something "}
          <span className="bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
            great together.
          </span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Feel free to reach out for collaborations, questions, or just to say
          hello!
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col gap-8 w-full max-w-md">
        {/* Contact Form */}
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault(); // Evita o comportamento padrão do formulário
            handleSendEmail(); // Chama a função para abrir o cliente de email
          }}
        >
          <input
            type="text"
            placeholder="Subject*"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="px-4 py-3 rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="px-4 py-3 rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-hover transition"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="flex items-center gap-6 justify-center mt-8">
          <a
            href="https://github.com/carolinnemelo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/carolinnemelo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            href="mailto:carolinnepmelo@gmail.com"
            className="text-primary hover:text-accent transition"
          >
            <FaEnvelope className="text-3xl" />
          </a>
        </div>
      </div>
    </section>
  );
}
