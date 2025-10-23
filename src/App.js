import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  function handleClick(value) {
    if (value === "=") {
      try {
        setInput(eval(input));
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput(input + value);
    }
  }

  return (
    <div className="calculator">
      <h2>Simple Calculator</h2>
      <input className="display" value={input} readOnly />
      <div className="buttons">
        {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
        <button className="clear-btn" onClick={() => handleClick("C")}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
