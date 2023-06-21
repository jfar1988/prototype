function setupCharacterControls(characterController) {
  const buttonForward = document.getElementById("button-forward");
  const buttonBackward = document.getElementById("button-backward");
  const buttonLeft = document.getElementById("button-left");
  const buttonRight = document.getElementById("button-right");

  function setKeyState(key, state) {
    characterController._input._keys[key] = state;
  }

  buttonForward.addEventListener("mousedown", () =>
    setKeyState("forward", true)
  );
  buttonForward.addEventListener("mouseup", () =>
    setKeyState("forward", false)
  );
  buttonForward.addEventListener("mouseleave", () =>
    setKeyState("forward", false)
  );

  buttonBackward.addEventListener("mousedown", () =>
    setKeyState("backward", true)
  );
  buttonBackward.addEventListener("mouseup", () =>
    setKeyState("backward", false)
  );
  buttonBackward.addEventListener("mouseleave", () =>
    setKeyState("backward", false)
  );

  buttonLeft.addEventListener("mousedown", () => setKeyState("left", true));
  buttonLeft.addEventListener("mouseup", () => setKeyState("left", false));
  buttonLeft.addEventListener("mouseleave", () => setKeyState("left", false));

  buttonRight.addEventListener("mousedown", () => setKeyState("right", true));
  buttonRight.addEventListener("mouseup", () => setKeyState("right", false));
  buttonRight.addEventListener("mouseleave", () => setKeyState("right", false));
}
