import './App.css';
import { useState } from 'react';


function useIncrement(addAmount) {
  const [count, setCount] = useState(0)

  function increase() {
    setCount(count + addAmount)
  }
  return [count, increase]
}

function App() {
  const [count1, setCount1] = useIncrement(1)

  const [count2, setCount2] = useIncrement(2)

  const handler1 = () => {
    setCount1(count1 + 1)
  }
  const handler2 = () => {
    setCount2(count2 + 2)
  }

  return (
    <div>
      <h2>Count : {count1}</h2>
      <button type="button" onClick={handler1}>Add 1</button>
      <h2>Count : {count2}</h2>
      <button type="button" onClick={handler2}>Add 2</button>
    </div>
  );
}

export default App;
