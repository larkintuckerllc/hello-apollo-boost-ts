import * as React from 'react';

interface ICounter4ViewProps {
  counter: number;
  decrementCounter(): void;
  incrementCounter(): void;
}

const Counter4View = ({ counter, decrementCounter, incrementCounter }: ICounter4ViewProps) => (
  <div>
    <div>{counter}</div>
    <button onClick={decrementCounter}>-</button>
    <button onClick={incrementCounter}>+</button>
  </div>
);

export default Counter4View;