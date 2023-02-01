import { useState } from "react";
import "./App.css";

const Test = ({ onClose }) => {
  const [open, setOpen] = useState(false);
  const [testword, setTestword] = useState("pumpkin");
  const handleClick = () => {
    setOpen(!open);
  };
  const handleQuit = () => {
    onClose();
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="inner">
          <p>{testword}</p>
          <p style={{ visibility: open ? "visible" : "hidden" }}>南瓜</p>
        </div>

        <button onClick={handleClick}>
          {open ? "Next word" : "Show Answer"}
        </button>
        <button onClick={handleQuit}>Quit</button>
      </header>
    </div>
  );
};

export default Test;
