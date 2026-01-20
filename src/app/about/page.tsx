import React from "react";

/* ================= ICONS ================= */
const WebAppIcon = () => (
  <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="14" rx="2" strokeWidth="2" />
    <path d="M3 9h18" strokeWidth="2" />
  </svg>
);

const GPTIcon = () => (
  <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M12 3a6 6 0 016 6v2a3 3 0 01-3 3h-6a3 3 0 01-3-3V9a6 6 0 016-6z" strokeWidth="2"/>
    <circle cx="12" cy="16" r="2" strokeWidth="2"/>
  </svg>
);

const ChatbotIcon = () => (
  <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M4 6h16v10H7l-3 3V6z" strokeWidth="2"/>
  </svg>
);

/* ================= TOOLS ICONS (DIFFERENT) ================= */
const ToolPython = () => (
  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3 6-3 6-3-6 3-6z" strokeWidth="2"/>
  </svg>
);

const ToolOpenAI = () => (
  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="6" strokeWidth="2"/>
    <path d="M6 12h12" strokeWidth="2"/>
  </svg>
);

const ToolLangChain = () => (
  <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="6" y="6" width="12" height="12" strokeWidth="2"/>
    <path d="M6 6l12 12" strokeWidth="2"/>
  </svg>
);

const ToolOpenAIAPI = () => (
  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" strokeWidth="2"/>
    <path d="M8 12h8" strokeWidth="2"/>
  </svg>
);

const GradientLine = () => (
  <div className="w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 my-12" />
);

/* ================= TOOL COMPONENT ================= */
const ToolIcon = ({ icon, name }: { icon: any; name: string }) => (
  <div className="bg-slate-900 px-6 py-4 rounded-xl flex items-center gap-3">
    {icon}
    <span className="font-medium">{name}</span>
  </div>
);

const page = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">
            I'm an <span className="text-purple-400">AI Web Application</span> <br />
            & Custom GPT Developer
          </h1>

          <p className="text-slate-300">
            I specialize in creating intelligent web applications and custom GPTs
            tailored to your business needs.
          </p>

          <p className="text-slate-300">
            As an AI automation expert with a passion for technology, I help companies
            enhance their operations and achieve better customer engagement through
            advanced AI automation.
          </p>
        </div>
        </section>

    
      

      {/* ===== LINE ABOVE MY EXPERTISE ===== */}
      <GradientLine />

      {/* ================= MY EXPERTISE ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">My Expertise</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900 p-6 rounded-xl flex items-center gap-4">
            <WebAppIcon />
            <span>AI Web Applications</span>
          </div>
          <div className="bg-slate-900 p-6 rounded-xl flex items-center gap-4">
            <GPTIcon />
            <span>Custom GPT Development</span>
          </div>
          <div className="bg-slate-900 p-6 rounded-xl flex items-center gap-4">
            <ChatbotIcon />
            <span>AI Chatbots</span>
          </div>
        </div>
      </section>

      {/* ===== LINE ABOVE TOOLS ===== */}
      <GradientLine />

      {/* ================= TOOLS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">Tools I Use</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          <ToolIcon icon={<ToolPython />} name="Python" />
          <ToolIcon icon={<ToolOpenAI />} name="OpenAI" />
          <ToolIcon icon={<ToolLangChain />} name="LangChain" />
          <ToolIcon icon={<ToolOpenAIAPI />} name="OpenAI API" />
        </div>
      </section>

      {/* ===== LINE ABOVE EXPERIENCE ===== */}
      <GradientLine />

      {/* ================= EXPERIENCE ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Freelance Experience</h2>
        <p className="text-slate-300 mb-10">
          Helping businesses worldwide innovate with dynamic AI solutions.
        </p>
      </section>

      {/* ===== LINE ABOVE CTA ===== */}
      <GradientLine />

      {/* ================= CTA ================= */}
      <section className="text-center pb-24">
  <a
    href="https://www.instagram.com/chmohsin.bhowana?igsh=ZXg3dDE2bzRqaXJp"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="px-10 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition text-lg font-semibold">
      Let's Talk
    </button>
  </a>
</section>
     
    </div>
  );
};

export default page;