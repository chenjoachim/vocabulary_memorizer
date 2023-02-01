import { useState } from "react";
import "./App.css";

const Enter = ({ onClose }) => {
  const [eng, setEng] = useState("");
  const [chi, setChi] = useState("");
  const handleSubmit = () => {
    console.log({ eng: eng, chi: chi });
    alert("Submission success!");
  };
  const handleQuit = () => {
    onClose();
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>Enter the word and its meaning:</p>
        <input
          type="text"
          onChange={(e) => setEng(e.target.value)}
          placeholder="English"
        ></input>
        <input
          type="text"
          onChange={(e) => setChi(e.target.value)}
          placeholder="Chinese"
        ></input>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleQuit}>Go To Test</button>
      </header>
    </div>
  );
};

export default Enter;
