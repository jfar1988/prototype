import { useEffect } from "react";
import { characterControllerDemo } from "../utils/CharacterControllerDemo";

const ChangeColor = () => {
  useEffect(() => {
    characterControllerDemo.ChangeRandomColor();
  }, []);

  return null;
};

export default ChangeColor;
