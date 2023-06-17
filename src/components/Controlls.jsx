import React from "react";

const Controlls = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-200 py-2 px-4 text-center">
      <p className="text-sm">
        Press:
        <span className="font-bold"> W </span>forward,
        <span className="font-bold"> S </span>backward,
        <span className="font-bold"> A </span>left,
        <span className="font-bold"> D </span>right,
        <span className="font-bold"> SHIFT </span>speed
      </p>
    </footer>
  );
};

export default Controlls;
