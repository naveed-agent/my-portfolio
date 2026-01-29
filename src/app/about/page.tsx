"use client";

import Image from "next/image";
import React from "react";

export default function AboutPage() {
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

          <div className="bg-[#141a3b] p-6 rounded-xl shadow-lg border border-indigo-500/20 flex flex-col items-center">
            <Image 
              src="/app.png" 
              alt="AI Web Applications" 
              width={80} 
              height={80} 
              className="w-20 h-20 rounded-xl mb-3 object-cover"
            />
            <h3 className="text-lg font-medium">AI Web Applications</h3>
          </div>

          <div className="bg-[#141a3b] p-6 rounded-xl shadow-lg border border-indigo-500/20 flex flex-col items-center">
            <Image 
              src="/d.png"
              alt="Custom GPT Development"
              width={80} 
              height={80}
              className="w-20 h-20 rounded-xl mb-3 object-cover"
            />
            <h3 className="text-lg font-medium">Custom GPT Development</h3>
          </div>

          <div className="bg-[#141a3b] p-6 rounded-xl shadow-lg border border-indigo-500/20 flex flex-col items-center">
            <Image 
              src="/ch.png" 
              alt="AI Chatbots"
              width={80} 
              height={80}
              className="w-20 h-20 rounded-xl mb-3 object-cover"
            />
            <h3 className="text-lg font-medium">AI Chatbots</h3>
          </div>

        </div>
      </section>

      {/* TOOLS */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">Tools I Use</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">

          <div className="bg-[#141a3b] p-5 rounded-xl border border-indigo-500/20 flex flex-col items-center">
            <Image 
              src="/kk.png"
              alt="Python"
              width={70} 
              height={70}
              className="w-16 h-16 rounded-lg mb-3 object-cover"
            />
            Python
          </div>

          <div className="bg-[#141a3b] p-5 rounded-xl border border-indigo-500/20 flex flex-col items-center">
            <Image 
              src="/ll.png"
              alt="OpenAI"
              width={70} 
              height={70}
              className="w-16 h-16 rounded-lg mb-3 object-cover"
            />
            OpenAI
          </div>

          <div className="bg-[#141a3b] p-5 rounded-xl border border-indigo-500/20 flex flex-col items-center">
            <Image 
              src="/long.png"
              alt="LangChain"
              width={70} 
              height={70}
              className="w-16 h-16 rounded-lg mb-3 object-cover"
            />
            LangChain
          </div>

          <div className="bg-[#141a3b] p-5 rounded-xl border border-indigo-500/20 flex flex-col items-center">
            <Image 
              src="/open.png"
              alt="OpenAI API"
              width={70} 
              height={70}
              className="w-16 h-16 rounded-lg mb-3 object-cover"
            />
            OpenAI API
          </div>

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
