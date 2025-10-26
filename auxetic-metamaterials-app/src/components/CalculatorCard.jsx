import React, { useState } from 'react';
import './CalculatorCard.css';

const CalculatorCard = ({ title, inputs, calculate, formulaText }) => {
  const [inputValues, setInputValues] = useState(Array(inputs.length).fill(''));
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (index, value) => {
    const newValues = [...inputValues];
    newValues[index] = value;
    setInputValues(newValues);
  };

  const handleCalculate = () => {
    setError('');
    setResult(null);

    // Check for empty inputs
    if (inputValues.some(val => val === '')) {
      setError('Please fill in all input fields.');
      return;
    }

    // Check if inputs are valid numbers
    if (inputValues.some(val => isNaN(parseFloat(val)))) {
        setError('Please enter valid numbers.');
        return;
    }

    const calculationResult = calculate(inputValues);
    if (typeof calculationResult === 'string') {
        setError(calculationResult);
    } else {
        setResult(calculationResult.toFixed(4)); // Format to 4 decimal places
    }
  };

  return (
    <div className="card">
      <h3>{title}</h3>
      <p className="formula-text"><i>{formulaText}</i></p>
      <div className="inputs-container">
        {inputs.map((label, index) => (
          <div key={index} className="input-group">
            <label>{label}:</label>
            <input
              type="number"
              value={inputValues[index]}
              onChange={(e) => handleInputChange(index, e.target.value)}
              placeholder={`Enter ${label}`}
            />
          </div>
        ))}
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      {error && <p className="error">{error}</p>}
      {result && <p className="result">Result: {result}</p>}
    </div>
  );
};

export default CalculatorCard;
