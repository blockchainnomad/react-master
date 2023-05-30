import { useState, useEffect } from "react";

function App() {
  let [counter, setCounter] = useState(0);
  const onClick = () => {
    // setCounter(counter + 1);
    // setCounter((current) => current + 1);
    setCounter(function (current) {
      return current + 1;
    });
  };
  return (
    <div>
      <h3>Total clicks: {counter}</h3>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}
export default App;
