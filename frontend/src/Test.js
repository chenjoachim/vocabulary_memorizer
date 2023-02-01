import { useState } from "react";
import "./App.css";
import { RandomWord } from "./Memorizer";
const Test = ({ onClose, testword, setTestword, answer, setAnswer }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    if (!open) setOpen(true);
    else {
      RandomWord()
        .then((response) => {
          console.log(response);
          if (response.type === "error") throw response.mes;
          else {
            console.log(testword + " " + answer);
            setTestword(response.mes.eng);
            setAnswer(response.mes.chi);
            setOpen(false);
          }
        })
        .catch((e) => {
          console.log(e);
          alert("Error: " + e.toString());
        });
    }
  };
  const handleQuit = () => {
    onClose();
  };
  return (
    <>
      <div className="inner">
        <p>{testword}</p>
        <p style={{ visibility: open ? "visible" : "hidden" }}>{answer}</p>
      </div>

      <button onClick={handleClick}>
        {open ? "Next word" : "Show Answer"}
      </button>
      <button onClick={handleQuit}>Quit</button>
    </>
  );
};

export default Test;
