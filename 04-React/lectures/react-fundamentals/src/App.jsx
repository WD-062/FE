import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const name = "John Doe";
  const age = 30;
  const isLoggedIn = false;
  // const randomNumber = Math.floor(Math.random() * 100) + 1;
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  console.log(counter);

  const hi = (greeting, name) => {
    console.log(greeting, name);
  }
  hi("greeting", "Ana")
  hi("hello", "Jane")
  hi("hi", "John")
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl">Hello {name}</h1>
      <h2>You are {age} years old.</h2>
      <h3>{isLoggedIn ? "Welcome back!" : "Please log in."}</h3>
      <Counter  setCounter={setCounter} counter={counter} />
      <Counter counter={counter2} setCounter={setCounter2} />
      <Counter counter={counter3} setCounter={setCounter3} />
    </div>
  );
}

export default App;
