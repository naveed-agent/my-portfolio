"use client";

import React, { useState, useEffect, useMemo, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Tilt from "react-parallax-tilt";
import * as THREE from "three";

/* ================= PURE THREE STARS ================= */
const StarsBackground = () => {
  const pointsRef = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(3000 * 3);

    for (let i = 0; i < positions.length; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }

    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  const material = useMemo(
    () =>
      new THREE.PointsMaterial({
        color: "#ffffff",
        size: 0.015,
        transparent: true,
        opacity: 0.8,
        depthWrite: false,
      }),
    []
  );

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.05;
    }
  });

  return <points ref={pointsRef} geometry={geometry} material={material} />;
};

/* ================= MAIN PAGE ================= */
export default function Page() {
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

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* ===== 3D BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 2] }}>
          <ambientLight intensity={0.6} />
          <Suspense fallback={null}>
            <StarsBackground />
          </Suspense>
        </Canvas>
      </div>

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">

        {/* ===== LEFT CONTENT ===== */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Hi, I'm <span className="text-purple-400">Mohsin</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold">
            AI Web Application <br /> & Custom GPT Developer
          </h2>

          <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-bold text-xl min-h-[28px]">
            {roles[roleIndex]}
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

        {/* ===== RIGHT IMAGE (ARSALAN / ZESHAN STYLE EFFECT) ===== */}
        <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.05}>
          <div className="w-[280px] h-[340px] md:w-[360px] md:h-[440px]
                          rounded-2xl border border-white/10
                          bg-white/5 backdrop-blur-xl
                          shadow-[0_20px_60px_rgba(145,94,255,0.3)]
                          flex items-center justify-center">

            <div className="flex flex-col items-center animate-float">

              <div className="px-4 py-1 mb-6 rounded-full
                              border border-cyan-500/30
                              bg-cyan-500/10 text-cyan-400
                              text-[10px] font-bold tracking-widest uppercase">
                Next Gen AI Developer
              </div>

              <div className="w-28 h-28 md:w-40 md:h-40 rounded-full
                              border-4 border-purple-500/50 overflow-hidden
                              shadow-lg shadow-purple-500/30">
                <img
                  src="/mohsin-bhowana.jpg"
                  alt="Mohsin Bhowana"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="mt-4 text-lg font-extrabold tracking-wide">
                Mohsin <span className="text-purple-400">Bhowana</span>
              </p>
            </div>
          </div>
        </Tilt>
      </section>

      {/* ===== FLOAT ANIMATION ===== */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
