import { useState } from "react";
import "./App.css";
import party from "party-js";
import { CreateWord } from "./Memorizer";
const Enter = ({ onClose }) => {
  const [eng, setEng] = useState("");
  const [chi, setChi] = useState("");
  const handleSubmit = (but) => {
    console.log({ eng: eng, chi: chi });
    CreateWord(eng, chi)
      .then((response) => {
        if (response.type === "error") throw response.mes;
        else if (
          eng === "3/11" ||
          eng === "anniversary" ||
          chi === "紀念日" ||
          chi === "交往紀念日"
        ) {
          party.confetti(but, {
            count: party.variation.range(20, 90),
          });
        } else {
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
      <button onClick={(e) => handleSubmit(e.target)}>Submit</button>
      <button onClick={handleQuit}>Go To Test</button>
    </>
  );
};

export default Enter;
