const Counter = ({ counter, setCounter }) => {
  console.log(counter);
  console.log(setCounter);
  const increment = () => {
    setCounter((prev) => prev + 1);
  };
  const decrement = () => {
    setCounter((prev) => prev - 1);
  };
  return (
    <div>
      <button onClick={increment}>+</button>
      <div>{counter}</div>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
