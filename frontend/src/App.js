import "./App.css";
import Test from "./Test";
import Enter from "./Enter";
import { useState } from "react";
const App = () => {
  const [testing, setTesting] = useState(true);
  console.log(testing);
  const closeTest = () => {
    console.log(2);
    setTesting(false);
  };
  const openTest = () => {
    console.log(3);
    setTesting(true);
  };
  console.log(typeof closeTest);
  return (
    <>
      {testing ? (
        <Test onClose={closeTest}></Test>
      ) : (
        <Enter onClose={openTest}></Enter>
      )}
    </>
  );
};

export default App;
