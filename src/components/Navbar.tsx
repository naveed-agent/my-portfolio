"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handleContactClick = () => {
    setShowModal(true);
  };

  const handleYes = () => {
    setShowModal(false);
    router.push("/contact");
  };

  const handleNo = () => {
    setShowModal(false);
    router.push("/");
  };

  return (
    <>
      <nav className="w-full bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white px-6 py-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
        <div className="logo text-2xl font-bold">AI</div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 w-full sm:w-auto mt-3 sm:mt-0">
          <Link href="/" className="hover:text-purple-400 font-medium">
            Home
          </Link>
          <Link href="/about" className="hover:text-purple-400 font-medium">
            About
          </Link>
          <button
            onClick={handleContactClick}
            className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 font-medium hover:opacity-90"
          >
            Switch AI
          </button>
        </div>
      </nav>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg text-center w-72">
            <h3 className="mb-4 text-black font-semibold text-lg">Do you want to contact?</h3>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleYes}
                className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:opacity-90"
              >
                Yes
              </button>
              <button
                onClick={handleNo}
                className="px-4 py-2 rounded-md bg-gray-400 text-white font-medium hover:opacity-90"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
