import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AiOutlineUser, AiFillHome } from "react-icons/ai";
import LoginModal from "./LoginModal";
import ChangeColor from "./ChangeColor";
import AnimationComponent from "./AnimationComponent";
import Controlls from "./Controlls";
import SearchWiki from "./SearchWiki";
import LoginForm from "./LoginForm";

const Navbar = () => {
  const [home, setHome] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  const [menu, setMenu] = useState(false);
  const [login, setLogin] = useState(false);

  const modalHome = () => {
    setHome(!home);
  };

  const handleClickChangeColor = () => {
    setChangeColor(true);
    setMenu(!menu);
  };

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleExportClick = () => {
    window.open("../../assets/Running.fbx");
  };

  const modalLogin = () => {
    setLogin(!login);
  };

  return (
    <Router>
      <nav className="bg-gray-800 py-4 px-8 fixed top-0 left-0 right-0 flex justify-end">
        <div>
          <Link
            className="text-white hover:text-gray-300 transition duration-300 hidden sm:block"
            onClick={modalHome}
          >
            <AiFillHome className="text-xl hover:text-2xl" />
          </Link>
        </div>
        <div className="flex justify-center space-x-4 w-full">
          <ul className="hidden sm:flex space-x-4 ">
            <li className="flex items-center ">
              <Link
                to="/setting"
                className="text-white hover:text-gray-300 transition duration-300 flex items-center justify-center gap-2"
                onClick={handleClickChangeColor}
              >
                <img
                  src="../../assets/Icons/setting.svg"
                  alt="Setting"
                  className="h-6 w-6"
                />
                <span>Setting</span>
              </Link>
              <Controlls />
            </li>
            <li className="flex items-center">
              <Link
                to="/capture"
                className="text-white hover:text-gray-300 transition duration-300 flex items-center gap-2"
                onClick={handleMenu}
              >
                <img
                  src="../../assets/Icons/capture.svg"
                  alt="Capture"
                  className="h-6 w-6"
                />
                <span>Capture</span>
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                to="/animations"
                className="text-white hover:text-gray-300 transition duration-300 flex items-center gap-2"
              >
                <img
                  src="../../assets/Icons/animations.svg"
                  alt="Animations"
                  className="h-6 w-6"
                />
                <span>Animations</span>
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                to="/edit"
                className="text-white hover:text-gray-300 transition duration-300 flex items-center gap-2"
              >
                <img
                  src="../../assets/Icons/edit.svg"
                  alt="Edit"
                  className="h-6 w-6"
                />
                <span>Edit</span>
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                to="/streaming"
                className="text-white hover:text-gray-300 transition duration-300 flex items-center gap-2"
              >
                <img
                  src="../../assets/Icons/streaming.svg"
                  alt="Streaming"
                  className="h-6 w-6"
                />
                <span>Streaming</span>
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                to="/export"
                className="text-white hover:text-gray-300 transition duration-300 flex items-center gap-2"
                onClick={handleExportClick}
              >
                <img
                  src="../../assets/Icons/export.svg"
                  alt="Export"
                  className="h-6 w-6"
                />
                <span>Export</span>
              </Link>
            </li>
          </ul>
          <ul className="sm:hidden flex w-full justify-between">
            <li>
              <Link
                className="text-white text-xl hover:text-2xl transition duration-300 flex items-center justify-center gap-2 pt-1"
                onClick={modalHome}
              >
                <AiFillHome className="h-6 w-6" />
              </Link>
            </li>
            <li>
              <Link
                to="/setting"
                className="text-white text-xl hover:text-2xl transition duration-300 flex items-center justify-center gap-2 pt-1"
                onClick={handleClickChangeColor}
              >
                <img
                  src="../../assets/Icons/setting.svg"
                  alt="Setting"
                  className="h-6 w-6"
                />
              </Link>
            </li>
            <li>
              <Link
                to="/capture"
                className="text-white text-xl hover:text-2xl transition duration-300 flex items-center justify-center gap-2 pt-1"
                onClick={handleMenu}
              >
                <img
                  src="../../assets/Icons/capture.svg"
                  alt="Capture"
                  className="h-6 w-6"
                />
              </Link>
            </li>
            <li>
              <Link
                to="/animations"
                className="text-white text-xl hover:text-2xl transition duration-300 flex items-center justify-center gap-2 pt-1"
              >
                <img
                  src="../../assets/Icons/animations.svg"
                  alt="Animations"
                  className="h-6 w-6"
                />
              </Link>
            </li>
            <li>
              <Link
                to="/edit"
                className="text-white text-xl hover:text-2xl transition duration-300 flex items-center justify-center gap-2 pt-1"
              >
                <img
                  src="../../assets/Icons/edit.svg"
                  alt="Edit"
                  className="h-6 w-6"
                />
              </Link>
            </li>
            <li>
              <Link
                to="/streaming"
                className="text-white text-xl hover:text-2xl transition duration-300 flex items-center justify-center gap-2 pt-1"
              >
                <img
                  src="../../assets/Icons/streaming.svg"
                  alt="Streaming"
                  className="h-6 w-6"
                />
              </Link>
            </li>
            <li>
              <Link
                to="/export"
                className="text-white text-xl hover:text-2xl transition duration-300 flex items-center justify-center gap-2 pt-1"
                onClick={handleExportClick}
              >
                <img
                  src="../../assets/Icons/export.svg"
                  alt="Export"
                  className="h-6 w-6"
                />
              </Link>
            </li>
            <Link
              className="text-white text-xl hover:text-2xl transition duration-300 flex items-center justify-center gap-2 pt-1"
              onClick={modalLogin}
            >
              <AiOutlineUser className="h-6 w-6" />
            </Link>
          </ul>
        </div>
        <Link
          className="text-white hover:text-gray-300 transition duration-300 hidden sm:block"
          onClick={modalLogin}
        >
          <AiOutlineUser className="h-6 w-6" />
        </Link>
      </nav>
      <div
        className={`fixed inset-0 flex items-center justify-end z-50 ${
          login ? "opacity-90" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`absolute w-full sm:w-1/3 h-screen shadow-lg transform transition-all duration-500 ${
            login ? "translate-x-0 bg-[#1f2937]" : "translate-x-full"
          }`}
        >
          <div>
            <button
              className="absolute top-0 right-0 p-4 text-xl font-bold hover:text-2xl "
              onClick={modalLogin}
            >
              X
            </button>
          </div>
          <div className="p-8">
            <LoginForm modalLogin={modalLogin} />
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 flex items-center justify-end z-50 ${
          home ? "opacity-90" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`absolute w-full h-screen shadow-lg transform transition-all duration-500 ${
            home ? "translate-x-0 bg-[#1f2937]" : "-translate-x-full"
          }`}
        >
          <div>
            <button
              className="absolute top-0 right-0 p-4 text-xl font-bold hover:text-2xl "
              onClick={modalHome}
            >
              X
            </button>
          </div>
          <div className="p-8 pt-[4rem] flex items-center justify-center">
            <SearchWiki />
          </div>
        </div>
      </div>
      <Routes>
        <Route
          path="/setting"
          element={
            changeColor ? <ChangeColor setChangeColor={setChangeColor} /> : null
          }
        />
        <Route path="/capture" element={<AnimationComponent />} />
      </Routes>
    </Router>
  );
};

export default Navbar;
