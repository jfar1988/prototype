import { useEffect } from "react";
import { characterControllerDemo } from "../utils/CharacterControllerDemo";

const ChangeColor = ({ setChangeColor }) => {
  useEffect(() => {
    characterControllerDemo.ChangeRandomColor();
    setChangeColor(false);
  }, []);

  return <div id="Renderizado"></div>;
};

export default ChangeColor;
