

const Counter = ({counter, setCounter}) => {
  return (
    <div>
      <button onClick={() => setCounter((prev) => --prev)}>-</button>
        <span>{counter}</span>
        <button onClick={() => setCounter((prev) => ++prev)}>+</button>
    </div>
  );
};

export default Counter;
