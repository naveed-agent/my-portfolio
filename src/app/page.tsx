import React from "react";

/* ========= UNIQUE SVG LOGOS ========= */
const WebAppIcon = () => (
  <svg className="w-14 h-14 mx-auto mb-4 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2" />
    <path d="M2 9h20" strokeWidth="2" />
    <path d="M8 21h8" strokeWidth="2" />
  </svg>
);

const GPTIcon = () => (
  <svg className="w-14 h-14 mx-auto mb-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M12 2a7 7 0 0 1 7 7v2a3 3 0 0 1-3 3h-1" strokeWidth="2" />
    <path d="M12 2a7 7 0 0 0-7 7v2a3 3 0 0 0 3 3h1" strokeWidth="2" />
    <circle cx="12" cy="15" r="3" strokeWidth="2" />
  </svg>
);

const AutomationIcon = () => (
  <svg className="w-14 h-14 mx-auto mb-4 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M4 12a8 8 0 0 1 14-4" strokeWidth="2" />
    <path d="M20 12a8 8 0 0 1-14 4" strokeWidth="2" />
    <path d="M12 8v4l3 2" strokeWidth="2" />
  </svg>
);

const ProjectIcon = () => (
  <svg className="w-12 h-12 mx-auto mb-3 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
    <path d="M7 7h10M7 11h6" strokeWidth="2" />
  </svg>
);

const page = () => {
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
          <p className="text-purple-300 font-medium">AI Automation Expert</p>

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

        {/* MOHSIN IMAGE */}
        <div className="flex justify-center">
          <img
            src="/mohsin-bhowana.jpg"
            alt="Mohsin Bhowana"
            className="w-64 md:w-80 rounded-xl shadow-2xl"
          />
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="w-full mb-2">
          <div className="h-1 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full" />
        </div>

        <p className="text-center text-slate-300 mb-1">
          I provide cutting-edge AI solutions and automation
        </p>
        <p className="text-center text-slate-300 mb-4">
          Tailored to enhance your business efficiency
        </p>

        <div className="w-full mb-6">
          <div className="h-1 w-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full" />
        </div>

        <h2 className="text-3xl font-bold text-center mb-12">Services I Offer</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900 p-6 rounded-xl text-center">
            <WebAppIcon />
            <h3 className="font-semibold">AI Web Apps Development</h3>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl text-center">
            <GPTIcon />
            <h3 className="font-semibold">Custom GPT <br /> & Control Solutions</h3>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl text-center">
            <AutomationIcon />
            <h3 className="font-semibold">AI Automation Workflows</h3>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="w-full mb-6">
          <div className="h-1 w-full bg-gradient-to-r from-green-400 via-yellow-400 to-pink-400 rounded-full" />
        </div>

        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900 p-6 rounded-xl text-center">
            <ProjectIcon />
            <p>AI-Wise Applications</p>
          </div>
          <div className="bg-slate-900 p-6 rounded-xl text-center">
            <ProjectIcon />
            <p>Custom GPT for E-commerce</p>
          </div>
          <div className="bg-slate-900 p-6 rounded-xl text-center">
            <ProjectIcon />
            <p>Automate Lead Generation</p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="text-center py-24 px-6">
        <div className="w-full mb-6">
          <div className="h-1 w-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full" />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold">
          Want to build a cutting-edge AI solution?
        </h2>
      </section>

    </div>
  );
};

export default page;