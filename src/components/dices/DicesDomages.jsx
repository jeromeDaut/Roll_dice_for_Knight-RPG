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
  const handleNumDiceInputKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); 
      rollDice();
    }
  };
  const handleModifierChange = (event) => {
    const value = event.target.value;
    const modifierValue = value === "" ? "" : parseInt(value);
    setModifier(modifierValue);
  };

  const renderDiceResults = () => {
    if (diceResults.length === 0) {
      return null;
    }

    return (
      <div className='container '>
        <div className="dice-container ">
          {diceResults.map((result, index) => (
            <div className={`dice dice-${index}`} key={index}>
              {result}
            </div>
          ))}
        </div>
        <p>Total: <span className='result'>{sum}</span></p>
      </div>
    );
  };

  return (
    <div className='roll-container2 dice-container2'>
    <h2>Dégâts</h2>
      <label>
        Nbre de dés (1-20):
        <input
          type="number"
          value={numDice}
          onChange={handleNumDiceChange}
          onKeyDown={handleNumDiceInputKeyDown}
          min={1}
          max={20}
        />
      </label>
      <br />
      <label>
        Modificateur:
        <input
          type="number"
          value={modifier}
          onChange={handleModifierChange}
          onKeyDown={handleNumDiceInputKeyDown}
          min={0}
        />
      </label>
      <br />
      <div className='roll-btn'>
      <button onClick={rollDice}  className="button-85" ><img src='/rolling-dice.png' alt='' /></button>
      {renderDiceResults()}
      </div>

    </div>
  );
};

export default DicesDomages;