import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  let [value, setValue] = useState(0);

  const addValue = () => {
    if (value == 20) setValue((value = 20));
    else setValue(value + 1);
  };
  const removeValue = () => {
    if (value > 0) setValue(value - 1);
    else setValue((value = 0));
  };

  return (
    <>
      <h1>Kamraan aur code</h1>
      <h2>Counter value : {value}</h2>

      <button onClick={addValue}>Add Value {value}</button>
      <br />
      <button onClick={removeValue}>remove value {value}</button>
      <p>footer : {value}</p>
    </>
  );
}

export default App;
