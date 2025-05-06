import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(1);
  const [counter3, setCounter3] = useState(4);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Counter counter={counter1} setCounter={setCounter1} />
      <Counter counter={counter2} setCounter={setCounter2} />
      <Counter counter={counter3} setCounter={setCounter3} />
      <h1 className="text-xl font-semibold">Counter</h1>
    </div>
  );
}

export default App;
