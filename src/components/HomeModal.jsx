import React from "react";
import SearchWiki from "./SearchWiki";

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
        <div>
          <button
            className="absolute top-0 right-0 p-4 text-xl font-bold hover:text-2xl "
            onClick={onClose}
          >
            X
          </button>
        </div>
        <div className="p-8 pt-[4rem] flex items-center justify-center">
          <SearchWiki />
        </div>
      </div>
    </div>
  );
};

export default HomeModal;
