import React, { useState } from "react";

const Footer = ({
  resumeAnimation,
  reverseAnimation,
  toggleAnimation,
  back_Frame,
  forward_Frame,
}) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 py-3 flex justify-center">
      <div className="bottom-play-center flex gap-x-10">
        <button
          className="button-play"
          id="back-frame"
          title="Back Frame"
          onClick={() => back_Frame(true)}
        >
          <i className="fas fa-circle"></i>
          <img
            src="../../assets/Icons/back-frame.svg"
            className="w-5"
            alt="back-frame"
          />
        </button>
        <button
          className="button-play"
          id="reverse-pause"
          title="Reverse Pause"
          onClick={reverseAnimation}
        >
          <i className="fas fa-circle"></i>
          <img
            src="../../assets/Icons/reverse-pause.svg"
            className="w-5"
            alt="reverse.pause"
          />
        </button>
        <button
          onClick={toggleAnimation}
          className="button-play"
          id="play-pause"
          title="Play Pause"
        >
          <i className="fas fa-circle"></i>
          <img
            src="../../assets/Icons/play-pause.svg"
            className="w-5"
            alt="play-pause"
          />
        </button>
        <button
          className="button-play"
          id="frame-forward"
          title="Frame Forward"
          onClick={() => forward_Frame(true)}
        >
          <i className="fas fa-circle"></i>
          <img
            src="../../assets/Icons/frame-forward.svg"
            className="w-5"
            alt="frame-forward"
          />
        </button>
        <button
          className="button-play"
          id="frame-loop"
          title="Loop"
          onClick={resumeAnimation}
        >
          <i className="fas fa-circle"></i>
          <img src="../../assets/Icons/loop.svg" className="w-5" alt="loop" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
