import { useState } from "react";
import "./App.css";
import { CreateWord } from "./Memorizer";
const Enter = ({ onClose }) => {
  const [eng, setEng] = useState("");
  const [chi, setChi] = useState("");
  const handleSubmit = () => {
    console.log({ eng: eng, chi: chi });
    CreateWord(eng, chi)
      .then((response) => {
        if (response.type === "error") throw response.mes;
        else {
          alert(
            response.mes.type + ' word "' + response.mes.word + '" success!'
          );
          console.log(response);
        }
      })
      .catch((e) => alert("Error: " + e));
  };
  const handleQuit = () => {
    onClose();
  };
  return (
    <>
      <p>Enter a word and its meaning:</p>
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
    </>
  );
};

export default Enter;
