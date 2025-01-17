'use client';
import React, { useState } from 'react';
import "./globals.css";
import Head from 'next/head';

interface CalculatorState {
  dividend: number | string;
  divisor: number | string;
  power: number | string;
  result: number | string | null;
}

function HomePage() {
  const [state, setState] = useState<CalculatorState>({
    dividend: '',
    divisor: '',
    power: '',
    result: null,
  });

  const handleCalculate = () => {
    const num1 = parseFloat(state.dividend as string);
    const num2 = parseFloat(state.divisor as string);
    let pow = parseFloat(state.power as string);
   
    if (isNaN(pow)) {
      pow = 1; // Default power to 1 if not entered
    }
    if (!isNaN(num1) && !isNaN(num2) && !isNaN(pow) && num2 !== 0) {
      const modResult = ((Math.pow(num1, pow) % num2) + num2) % num2;
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
         <Head>
        <title>Mod Calculator with Power | Mod calculator App</title>
        <meta name="description" content="Calculate modulus with power operations easily using our mod calculator." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://modcalc.vercel.app/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://modcalc.vercel.app/",
            "@type": "WebPage",
            "name": "Mod Calculator with Power",
            "description": "Calculate modulus with power operations easily using our mod calculator."
          })}
        </script>
      </Head>
      <h1>Mod Calculator with Power</h1>
      <div className="input-fields">
        <label htmlFor="dividend">Dividend (a):</label>
        <input
          type="number"
          id="dividend"
          value={state.dividend}
          onChange={handleInputChange}
        />
        <label htmlFor="power">Power (p):</label>
        <input
          type="number"
          id="power"
          value={state.power}
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
