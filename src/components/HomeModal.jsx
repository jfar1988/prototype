import React from "react";

const HomeModal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-end z-50 ${
        isOpen ? "opacity-90" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`absolute w-full h-screen shadow-lg transform transition-all duration-500 ${
          isOpen ? "translate-x-0 bg-[#1f2937]" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-0 right-0 p-4 text-3xl hover:font-bold "
          onClick={onClose}
        >
          X
        </button>
        <div className="p-8 flex items-center justify-center">
          <button
            className="w-1/3 px-4 py-2 text-white font-bold bg-blue-500 rounded hover:bg-blue-600 "
            onClick={onClose}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeModal;
