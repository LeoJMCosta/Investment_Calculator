import React, { useState } from 'react';
import { Header, UserInput, InvestmentTable } from "./components";
import { calculateInvestmentResults } from "./util/investment"; // Adjust the path based on your project structure

function App() {
  const [investmentData, setInvestmentData] = useState([]);

  const handleCalculate = (inputValues) => {
    const calculatedResults = calculateInvestmentResults(inputValues);
    setInvestmentData(calculatedResults);
  };

  return (
    <>
      <Header />
      <UserInput />
      {<InvestmentTable investmentData={investmentData} />}
    </>
  );
}

export default App;
