import React from "react";
import LoginForm from "./LoginForm";

const LoginModal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-end z-50 ${
        isOpen ? "opacity-90" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`absolute w-1/3 h-screen shadow-lg transform transition-all duration-500 ${
          isOpen ? "translate-x-0 bg-[#1f2937]" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-0 right-0 p-4 text-3xl hover:font-bold "
          onClick={onClose}
        >
          X
        </button>
        <div className="p-8">
          <LoginForm onClose={onClose} />
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
