import React, { useState } from "react";
import "./App.css";
import "./ColorPicker.css"; 

import ColorPicker from "./ColorPicker";

const App = () => {
  const colors = [
    "#00FF00",
    "#0000FF",
    "#FFC0CB",
    "#FF0000",
    "#40E0D0",
    "#FFFF00",
    "#FFA500",
    "#006400",
    "#FFB6C1",
    "#800080",
  ];
  const [selectedColor, setSelectedColor] = useState("#FF5733");

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="App">
      <h1>Color Picker App</h1>
      <div className="selected-color">
        {" "}
        <div
          className="result-box"
          style={{ backgroundColor: selectedColor }}
        >
      <ColorPicker colors={colors} onColorChange={handleColorChange} />
        </div>
      </div>
    </div>
  );
};

export default App;
