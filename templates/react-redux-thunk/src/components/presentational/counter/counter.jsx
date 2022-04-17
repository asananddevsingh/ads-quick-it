const Counter = (props) => {
  return (
    <div>
      <h1>{props.currentCount}</h1>
      <div>
        <button onClick={props.onCounterIncrement}>Increment</button>
        <button onClick={props.onCounterDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
