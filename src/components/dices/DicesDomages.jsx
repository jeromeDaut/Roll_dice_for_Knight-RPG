import React, { useState } from 'react';

const DicesDomages = () => {
  const [numDice, setNumDice] = useState(1);
  const [modifier, setModifier] = useState(0);
  const [diceResults, setDiceResults] = useState([]);
  const [sum, setSum] = useState(0);

  const rollDice = () => {
    const results = [];
    let totalSum = 0;

    for (let i = 0; i < numDice; i++) {
      const result = Math.floor(Math.random() * 6) + 1;
      results.push(result);
      totalSum += result;
    }

    const finalSum = totalSum + modifier;

    setDiceResults(results);
    setSum(finalSum);
  };

  const handleNumDiceChange = (event) => {
    let value = parseInt(event.target.value);
    value = Math.max(1, Math.min(20, value)); // Clamp the value between 1 and 20
    setNumDice(value);
  };

  const handleModifierChange = (event) => {
    const value = parseInt(event.target.value);
    setModifier(value);
  };

  const renderDiceResults = () => {
    if (diceResults.length === 0) {
      return null;
    }

    return (
      <div>
        <p>Results: {diceResults.join(', ')}</p>
        <p>Sum: {sum}</p>
      </div>
    );
  };

  return (
    <div>
    <h2> Dégats</h2>
      <label>
        Number of dice (1-20):
        <input
          type="number"
          value={numDice}
          onChange={handleNumDiceChange}
          min={1}
          max={20}
        />
      </label>
      <br />
      <label>
        Modifier:
        <input
          type="number"
          value={modifier}
          onChange={handleModifierChange}
        />
      </label>
      <br />
      <button onClick={rollDice}>Roll Dice</button>
      {renderDiceResults()}
    </div>
  );
};

export default DicesDomages;