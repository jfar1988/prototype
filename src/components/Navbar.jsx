import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ChangeColor from "./ChangeColor";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import HomeModal from "./HomeModal";
import Login from "./Login";
import { useState } from "react";
import LoginModal from "./LoginModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <Router id="root">
      <nav className="bg-gray-800 py-4 px-8 fixed top-0 left-0 right-0">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition duration-300"
            onClick={openModal}
          >
            <AiFillHome className="text-xl hover:text-2xl" />
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/login"
                className="text-white text-xl hover:text-2xl transition duration-300"
              >
                <AiOutlineUser onClick={openModal} />
              </Link>
            </li>
            <li>
              <Link
                to="/productos"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                ChangeColor
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<HomeModal isOpen={isOpen} onClose={closeModal} />}
        />
        <Route path="/productos" element={<ChangeColor />} />
        <Route
          path="/login"
          element={<LoginModal isOpen={isOpen} onClose={closeModal} />}
        />
      </Routes>
    </Router>
  );
};

export default Navbar;
