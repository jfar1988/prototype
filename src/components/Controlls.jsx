import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Controlls = () => {
  return (
    <footer className="fixed bottom-0 right-0 bg-gray-200 py-2 px-4 text-center flex items-center justify-end">
      <p className="text-sm">
        Press:
        <span className="font-bold"> W </span>forward,
        <span className="font-bold"> S </span>backward,
        <span className="font-bold"> A </span>left,
        <span className="font-bold"> D </span>right,
        <span className="font-bold"> SHIFT </span>speed
      </p>
      <a
        href="https://github.com/jfar1988/prototype"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-gray-700 flex items-center ml-4"
      >
        <FontAwesomeIcon icon={faGithub} className="mr-1" />
        Repositorio en GitHub
      </a>
    </footer>
  );
};

export default Controlls;
