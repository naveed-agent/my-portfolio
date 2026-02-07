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

  // 🔥 STRONG + FAST 3D TILT
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const width = rect.width;
    const height = rect.height;

    const rotateY = ((x / width) - 0.5) * 35;   // stronger left/right
    const rotateX = -((y / height) - 0.5) * 35; // stronger up/down

    card.style.transform = `
      perspective(800px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.08)
    `;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `
      perspective(800px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };

  const floatStyle = {
    animation: "float 3s ease-in-out infinite",
  };

  return (
    <div className="w-full min-h-screen bg-slate-950 text-white">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

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

        {/* PROFILE IMAGE */}
        <div className="flex flex-col items-center">
          <div
            className="w-64 md:w-80 rounded-xl shadow-2xl overflow-hidden transition-transform duration-100"
            style={floatStyle}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
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

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">

          {[ 
            { img: "/service1.png", title: "AI Web Apps Development" },
            { img: "/service2.png", title: "Custom GPT & Control Solutions" },
            { img: "/service3.png", title: "AI Automation Workflows" },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-slate-900 p-6 rounded-xl text-center transition-transform duration-100"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img src={service.img} className="w-16 mx-auto mb-4" />
              <h3 className="font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">

          {[ 
            { img: "/project1.png", title: "AI-Wise Applications" },
            { img: "/project2.png", title: "Custom GPT for E-commerce" },
            { img: "/project3.png", title: "Automate Lead Generation" },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-xl overflow-hidden transition-transform duration-100"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img src={project.img} className="w-full h-48 object-cover" />
              <p className="p-4 text-center">{project.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-gray-900 text-white py-6 flex justify-center gap-6">
        <a
          href="https://www.threads.com/@chmohsin.bhowana?xmt=AQF0-hxt2fGiJh584FYW7VFTgD672P9OiAiX20Efyxsz2wM"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400"
        >
          Instagram
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400"
        >
          Facebook
        </a>
        <a
          href="https://github.com/naveed-agent"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400"
        >
          GitHub
        </a>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default Page;
