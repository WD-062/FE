import { useState } from "react";
import "./App.css";
import LightBulb from "./components/Lightbulb";

function App() {
  const [isOn, setIsOn] = useState(false);

const handleClick = () => {
  setIsOn((prev) => !prev)
}

console.log(isOn);
  return (
    <>
      <button onClick={handleClick}>Switch</button>
      <LightBulb isOn={isOn} />
    </>
  );
}

export default App;
