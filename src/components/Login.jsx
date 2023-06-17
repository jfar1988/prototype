import { useState } from "react";
import { MdExitToApp } from "react-icons/md";

import {
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

const Login = () => {
  const [showModal, setShowModal] = useState(false);

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => setShowModal(true)}
        className="bg-red-500 text-white p-3"
      >
        Login
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <div className="flex justify-end">
      {showModal && (
        <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2>Modal de inicio de sesión</h2>
            {/* TODO agregar los campos de inicio de sesión */}
            <button
              className="absolute top-10 right-10 text-2xl"
              onClick={() => setShowModal(false)}
            >
              <MdExitToApp />
            </button>
          </div>
        </div>
      )}

      <div className="w-1/4">
        <SwipeableList>
          <SwipeableListItem
            trailingActions={trailingActions()}
            onSwipe={setShowModal}
          >
            <div className="relative z-0">
              {showModal}
              <div className="flex items-center justify-center h-14 cursor-pointer">
                <div className="flex justify-center items-center w-9 h-9 bg-red-500 rounded-full hover:bg-red-600 hover:scale-105 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 12H6M12 5L5 12l7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </SwipeableListItem>
        </SwipeableList>
      </div>
    </div>
  );
};

export default Login;
