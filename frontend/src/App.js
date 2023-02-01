import "./App.css";
import Test from "./Test";
import Enter from "./Enter";
import { useState } from "react";
import { RandomWord } from "./Memorizer";
const App = () => {
  const [testing, setTesting] = useState(false);
  const [testword, setTestword] = useState("Pumpkin");
  const [answer, setAnswer] = useState("南瓜");
  console.log(testing);
  const closeTest = () => {
    console.log(2);
    setTesting(false);
  };
  const openTest = () => {
    console.log(3);
    RandomWord()
      .then((response) => {
        console.log(response);
        if (response.type === "error") throw response.mes;
        else {
          console.log(testword + " " + answer);
          setTestword(response.mes.eng);
          setAnswer(response.mes.chi);
          setTesting(true);
        }
      })
      .catch((e) => {
        console.log(e);
        alert("Error: " + e.toString());
      });
  };
  console.log(typeof closeTest);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Vocabulary Memorizer</h1>
        {testing ? (
          <Test
            onClose={closeTest}
            testword={testword}
            setTestword={setTestword}
            answer={answer}
            setAnswer={setAnswer}
          ></Test>
        ) : (
          <Enter onClose={openTest}></Enter>
        )}
      </header>
    </div>
  );
};

export default App;
