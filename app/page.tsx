'use client';
import React, { useState } from 'react';
import "./globals.css";

interface CalculatorState {
  dividend: number | string;
  divisor: number | string;
  result: number | string | null;
}

function HomePage() {
  const [state, setState] = useState<CalculatorState>({
    dividend: '',
    divisor: '',
    result: null,
  });

  const handleCalculate = () => {
    const num1 = parseFloat(state.dividend as string);
    const num2 = parseFloat(state.divisor as string);
    if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
      const modResult = ((num1 % num2) + num2) % num2;
      setState({ ...state, result: modResult });
    } else {
      setState({ ...state, result: 'Invalid input' });
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setState({ ...state, [id]: value });
  };

  return (
    <div className="calculator">
      <h1>Mod Calculator</h1>
      <div className="input-fields">
        <label htmlFor="dividend">Dividend (a):</label>
        <input
          type="number"
          id="dividend"
          value={state.dividend}
          onChange={handleInputChange}
        />
        <label htmlFor="divisor">Divisor (b):</label>
        <input
          type="number"
          id="divisor"
          value={state.divisor}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      <br />
      {state.result !== null && <h1>Result: {state.result}</h1>}
    </div>
  );
}

export default HomePage;
