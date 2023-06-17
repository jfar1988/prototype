import React, { useState } from "react";

const LoginModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [slidePosition, setSlidePosition] = useState(0);

  const handleSlide = () => {
    if (slidePosition === 0) {
      setSlidePosition(-2000);
      setShowModal(true);
    } else {
      setSlidePosition(0);
      setTimeout(() => {
        setShowModal(false);
      }, 300);
    }
  };

  return (
    <div>
      <div className="fixed top-0 right-0 left-0">
        <div
          className="bg-gray-500 h-12 flex items-center justify-end"
          onClick={handleSlide}
        >
          <div
            className="bg-white w-10 h-8 rounded-l-full cursor-pointer"
            style={{ transform: `translateX(${slidePosition}%)` }}
          ></div>
        </div>
      </div>
      {showModal && (
        <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2>Modal de inicio de sesión</h2>
            {/* Aquí puedes agregar los campos de inicio de sesión */}
            <button onClick={handleSlide}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
