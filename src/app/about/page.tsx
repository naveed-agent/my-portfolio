"use client";

import Image from "next/image";
import React from "react";

export default function AboutPage() {

  // 🚀 EXTRA STRONG 3D TILT
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const width = rect.width;
    const height = rect.height;

    const rotateY = ((x / width) - 0.5) * 55;   // increased strength
    const rotateX = -((y / height) - 0.5) * 55;

    card.style.transform = `
      perspective(600px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.12)
    `;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `
      perspective(600px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };

  return (
    <div className="min-h-screen w-full bg-[#0a0f2c] text-white font-sans">

      {/* HERO SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold leading-snug">
          I'm an <span className="text-indigo-400">AI Web Application</span>
          <br /> & Custom GPT Developer
        </h1>

        <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg">
          I specialize in creating intelligent web applications and custom GPTs tailored
          to your business needs. As an AI automation expert with a passion for
          technology, I help companies enhance their operations and achieve better
          customer engagement through advanced AI automation.
        </p>
      </section>

      {/* EXPERTISE */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">My Expertise</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">

          {[
            { src: "/app.png", alt: "AI Web Applications", label: "AI Web Applications" },
            { src: "/d.png", alt: "Custom GPT Development", label: "Custom GPT Development" },
            { src: "/ch.png", alt: "AI Chatbots", label: "AI Chatbots" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#141a3b] p-6 rounded-xl shadow-lg border border-indigo-500/20 flex flex-col items-center transition-transform duration-75"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <Image 
                src={item.src}
                alt={item.alt}
                width={80} 
                height={80}
                className="w-20 h-20 rounded-xl mb-3 object-cover"
              />
              <h3 className="text-lg font-medium">{item.label}</h3>
            </div>
          ))}

        </div>
      </section>

      {/* TOOLS */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">Tools I Use</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">

          {[
            { src: "/kk.png", alt: "Python", label: "Python" },
            { src: "/ll.png", alt: "OpenAI", label: "OpenAI" },
            { src: "/long.png", alt: "LangChain", label: "LangChain" },
            { src: "/open.png", alt: "OpenAI API", label: "OpenAI API" },
          ].map((tool, index) => (
            <div
              key={index}
              className="bg-[#141a3b] p-5 rounded-xl border border-indigo-500/20 flex flex-col items-center transition-transform duration-75"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <Image 
                src={tool.src}
                alt={tool.alt}
                width={70} 
                height={70}
                className="w-16 h-16 rounded-lg mb-3 object-cover"
              />
              {tool.label}
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12">
        <a
          href="https://www.threads.com/@chmohsin.bhowana?xmt=AQF0-hxt2fGiJh584FYW7VFTgD672P9OiAiX20Efyxsz2wM"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-10 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-lg font-semibold shadow-lg hover:opacity-90 transition">
            Let's Talk
          </button>
        </a>
      </section>

    </div>
  );
}
