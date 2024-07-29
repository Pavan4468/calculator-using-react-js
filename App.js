import React, { useRef, useState } from "react";
import "./App.css";

const App = () => {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  const handleCalculation = (operation) => {
    const num = parseFloat(inputRef.current.value);
    if (isNaN(num)) return;

    setResult((prevResult) => {
      switch (operation) {
        case 'plus':
          return prevResult + num;
        case 'minus':
          return prevResult - num;
        case 'times':
          return prevResult * num;
        case 'divide':
          return prevResult / num;
        default:
          return prevResult;
      }
    });

    inputRef.current.value = ''; // Clear the input after operation
  };

  const resetInput = () => {
    inputRef.current.value = '';
  };

  const resetResult = () => {
    setResult(0);
    inputRef.current.value = '';
  };

  return (
    <div>
      <h2>Build a Calculator using React</h2>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          type="number"
          ref={inputRef}
          name="number"
          id="number"
          placeholder="Type a number"
        />
        <br />
        <button type="button" onClick={() => handleCalculation('plus')}>Add</button>
        <button type="button" onClick={() => handleCalculation('minus')}>Subtract</button>
        <button type="button" onClick={() => handleCalculation('times')}>Multiply</button>
        <button type="button" onClick={() => handleCalculation('divide')}>Divide</button>
        <button type="button" onClick={resetInput} className="btn1">Reset Input</button>
        <button type="button" onClick={resetResult} className="btn2">Reset Result</button>
      </form>
    </div>
  );
};

export default App;
