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
      <nav className="navbar">
        <div className="logo">AI</div>

        {/* RIGHT SIDE */}
        <div className="right-menu">
          <div className="links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </div>

          <button className="contact-btn" onClick={handleContactClick}>
            Switch AI
          </button>
        </div>
      </nav>

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Do you want to contact?</h3>
            <div className="modal-buttons">
              <button onClick={handleYes}>Yes</button>
              <button onClick={handleNo}>No</button>
            </div>
          </div>
        </div>
      )}

      {/* STYLES */}
      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 30px;
          background: linear-gradient(90deg, #0f2027, #203a43, #2c5364);
          color: white;
        }

        .logo {
          font-size: 24px;
          font-weight: bold;
        }

        .right-menu {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .links {
          display: flex;
          gap: 60px;
        }

        .links a {
          color: white;
          text-decoration: none;
          font-weight: 500;
        }

        .contact-btn {
          padding: 10px 20px;
          border-radius: 8px;
          border: none;
          background: linear-gradient(90deg, #6a11cb, #2575fc);
          color: white;
          cursor: pointer;
          font-weight: 500;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
        }

        .modal {
          background: white;
          padding: 25px;
          border-radius: 10px;
          text-align: center;
          width: 300px;
        }

        .modal h3 {
          margin-bottom: 20px;
          color: #000;
        }

        .modal-buttons button {
          margin: 0 10px;
          padding: 8px 16px;
          border-radius: 5px;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default Navbar;
