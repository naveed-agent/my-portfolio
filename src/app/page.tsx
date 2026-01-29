"use client";

import React, { useState, useEffect } from "react";

const Page = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    "AI Web Application Developer",
    "Custom GPT Developer",
    "AI Automation Expert",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // floating animation style
  const floatStyle = {
    animation: "float 3s ease-in-out infinite",
  };

  return (
    <div className="w-full min-h-screen bg-slate-950 text-white">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I'm <span className="text-purple-400">Mohsin</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold">
            AI Web Application <br /> & Custom GPT Developer
          </h2>

          <p className="text-purple-300 font-medium">
            AI Automation Expert
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://rok-two.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition">
                View My Work
              </button>
            </a>

            <button className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition">
              Hire Me
            </button>
          </div>
        </div>

        {/* RIGHT FLOATING IMAGE */}
        <div className="flex flex-col items-center">
          <div
            className="w-64 md:w-80 rounded-xl shadow-2xl overflow-hidden"
            style={floatStyle}
          >
            <img
              src="/mohsin-bhowana.jpg"
              alt="Mohsin Bhowana"
              className="w-full rounded-xl"
            />
          </div>

          <p className="text-purple-400 mt-4 font-semibold text-center text-lg">
            {roles[roleIndex]}
          </p>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="text-center px-6 pb-20">
        <p className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto">
          I create powerful{" "}
          <span className="text-purple-400">AI-based web applications</span>,{" "}
          <span className="text-purple-400">custom GPTs</span>, and{" "}
          <span className="text-purple-400">automation solutions</span>.
        </p>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-center mb-4">
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        </div>

        <h2 className="text-3xl font-bold text-center mb-4">
          Services I Offer
        </h2>

        <div className="flex justify-center mb-12">
          <div className="h-[2px] w-48 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900 p-6 rounded-xl text-center">
            <img src="/service1.png" className="w-16 mx-auto mb-4" />
            <h3 className="font-semibold">
              AI Web Apps Development
            </h3>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl text-center">
            <img src="/service2.png" className="w-16 mx-auto mb-4" />
            <h3 className="font-semibold">
              Custom GPT <br /> & Control Solutions
            </h3>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl text-center">
            <img src="/service3.png" className="w-16 mx-auto mb-4" />
            <h3 className="font-semibold">
              AI Automation Workflows
            </h3>
          </div>
        </div>
      </section>

      {/* ================= FEATURED PROJECTS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-center mb-4">
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        </div>

        <h2 className="text-3xl font-bold text-center mb-4">
          Featured Projects
        </h2>

        <div className="flex justify-center mb-12">
          <div className="h-[2px] w-48 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900 rounded-xl overflow-hidden">
            <img
              src="/project1.png"
              className="w-full h-48 object-cover"
            />
            <p className="p-4 text-center">
              AI-Wise Applications
            </p>
          </div>

          <div className="bg-slate-900 rounded-xl overflow-hidden">
            <img
              src="/project2.png"
              className="w-full h-48 object-cover"
            />
            <p className="p-4 text-center">
              Custom GPT for E-commerce
            </p>
          </div>

          <div className="bg-slate-900 rounded-xl overflow-hidden">
            <img
              src="/project3.png"
              className="w-full h-48 object-cover"
            />
            <p className="p-4 text-center">
              Automate Lead Generation
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="text-center py-24 px-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          Want to build a cutting-edge AI solution?
        </h2>
      </section>

      {/* ================= FLOAT ANIMATION ================= */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default Page;
