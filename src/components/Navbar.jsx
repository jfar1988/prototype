import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AiOutlineUser, AiFillHome } from "react-icons/ai";
import HomeModal from "./HomeModal";
import LoginModal from "./LoginModal";
import ChangeColor from "./ChangeColor";
import AnimationComponent from "./AnimationComponent";
import Controlls from "./Controlls";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  const [menu, setMenu] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClickChangeColor = () => {
    setChangeColor(!menu);
  };

  const handleMenu = () => {
    setMenu(true);
  };

  return (
    <Router>
      <nav className="bg-gray-800 w-full py-4 px-8 fixed top-0 left-0 right-0 flex justify-end">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex sm:flex space-x-4">
            <Link
              to="/home"
              className="text-white hover:text-gray-300 transition duration-300 hidden sm:block"
              onClick={openModal}
            >
              <AiFillHome className="text-xl hover:text-2xl" />
            </Link>
          </div>
          <div className="flex justify-center space-x-4">
            <ul className="hidden sm:flex space-x-4">
              <li className="flex items-center">
                <Link
                  to="/setting"
                  className="text-white hover:text-gray-300 transition duration-300 flex items-center gap-2"
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
                >
                  <img
                    src="../../assets/capture.svg"
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
            {menu && (
              <div className="md:hidden" id="mobile-menu">
                <ul className="sm:hidden flex flex-col space-y-2">
                  <li>
                    <Link
                      to="/home"
                      className="text-white text-xl hover:text-2xl transition duration-300 flex items-center w-full"
                      onClick={openModal}
                    >
                      <AiFillHome className="h-6 w-6" />
                      <span className="ml-2">Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/login"
                      className="text-white text-xl hover:text-2xl transition duration-300 flex items-center w-full"
                      onClick={openModal}
                    >
                      <AiOutlineUser className="h-6 w-6" />
                      <span className="ml-2">Login</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/setting"
                      className="text-white hover:text-gray-300 transition duration-300 flex items-center w-full"
                      onClick={handleClickChangeColor}
                    >
                      <img
                        src="../../assets/Icons/setting.svg"
                        alt="Setting"
                        className="h-6 w-6"
                      />
                      <span className="ml-2"> Setting</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/capture"
                      className="text-white hover:text-gray-300 transition duration-300 flex items-center w-full"
                    >
                      <img
                        src="../../assets/capture.svg"
                        alt="Capture"
                        className="h-6 w-6"
                      />
                      <span className="ml-2"> Capture</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/animations"
                      className="text-white hover:text-gray-300 transition duration-300 flex items-center w-full"
                    >
                      <img
                        src="../../assets/Icons/animations.svg"
                        alt="Animations"
                        className="h-6 w-6"
                      />
                      <span className="ml-2"> Animations</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/edit"
                      className="text-white hover:text-gray-300 transition duration-300 flex items-center w-full"
                    >
                      <img
                        src="../../assets/Icons/edit.svg"
                        alt="Edit"
                        className="h-6 w-6"
                      />
                      <span className="ml-2"> Edit</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/streaming"
                      className="text-white hover:text-gray-300 transition duration-300 flex items-center w-full"
                    >
                      <img
                        src="../../assets/Icons/streaming.svg"
                        alt="Streaming"
                        className="h-6 w-6"
                      />
                      <span className="ml-2"> Streaming</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/export"
                      className="text-white hover:text-gray-300 transition duration-300 flex items-center w-full"
                    >
                      <img
                        src="../../assets/Icons/export.svg"
                        alt="Export"
                        className="h-6 w-6"
                      />
                      <span className="ml-2"> Export</span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}

            <div className="sm:hidden">
              <button
                className="text-white hover:text-gray-300 transition duration-300"
                onClick={() => setMenu(!menu)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap=""
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
          <Link
            to="/login"
            className="text-white text-xl hover:text-2xl transition duration-300 hidden sm:block"
          >
            <AiOutlineUser onClick={openModal} />
          </Link>
        </div>
      </nav>
      <Routes>
        <Route
          path="/home"
          element={<HomeModal isOpen={isOpen} onClose={closeModal} />}
        />
        <Route
          path="/setting"
          element={
            changeColor ? <ChangeColor setChangeColor={setChangeColor} /> : null
          }
        />
        <Route path="/capture" element={<AnimationComponent />} />
        <Route
          path="/login"
          element={<LoginModal isOpen={isOpen} onClose={closeModal} />}
        />
      </Routes>
    </Router>
  );
};

export default Navbar;
