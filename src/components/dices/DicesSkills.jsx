import React, { useState } from 'react';

const DicesSkills = () => {
  const [numDice, setNumDice] = useState(1);
  const [diceResults, setDiceResults] = useState([]);
  const [evenCount, setEvenCount] = useState(0);

  const rollDice = () => {
    const results = [];
    let count = 0;

    for (let i = 0; i < numDice; i++) {
      const result = Math.floor(Math.random() * 6) + 1;
      results.push(result);
      if (result % 2 === 0) {
        count++;
      }
    }

    setDiceResults(results);
    setEvenCount(count);
  };

  const handleNumDiceChange = (event) => {
    let value = parseInt(event.target.value);
    value = Math.max(1, Math.min(20, value)); // Clamp the value between 1 and 20
    setNumDice(value);
  };

  const renderDiceResults = () => {
    if (diceResults.length === 0) {
      return null;
    }

    return (
      <div className='container'>
        <div className="dice-container">
          {diceResults.map((result, index) => (
            <div className={`dice dice-${index}`} key={index}>
              {result}
            </div>
          ))}
        </div>
        <p>Réussite(s) = <span className='result'>{evenCount}</span></p>
        <p>+ Overdrives si au moins une réussite</p>
      </div>
    );
  };
  
  return (
    <div className='roll-container'>
    <h2>Test de caractéristiques</h2>
      <label>
        Nbre de dés (1-20):
        <input
          type="number"
          value={numDice}
          onChange={handleNumDiceChange}
          min={1}
          max={20}
        />
      </label>
      <button onClick={rollDice}>Lancer les dés</button>
      {renderDiceResults()}
    </div>
  );
};

export default DicesSkills;