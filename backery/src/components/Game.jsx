import { useEffect, useState } from "react";
import { useGetRewardsQuery } from "../slices/gameApiSlice";

export default function Game() {
  const [nbTry, setNbTry] = useState(3);
  const [diceValue1, setDiceValue1] = useState(1);
  const [diceValue2, setDiceValue2] = useState(1);
  const [diceValue3, setDiceValue3] = useState(1);
  const [diceValue4, setDiceValue4] = useState(1);
  const [diceValue5, setDiceValue5] = useState(1);
  const [resultMessage, setResultMessage] = useState();
  const [gainedPastries, setGainedPastries] = useState(0);

  const {
    data
  } = useGetRewardsQuery(gainedPastries)

  useEffect(() => {
   console.log( gainedPastries); 
   console.log(data); 
    
  }, [gainedPastries]);

  const buttonText = () => {
    if (nbTry > 0) {
      return `Lancer les (${nbTry} essais restants)`;
    } else {
      return "Vous n'avez plus d'essais";
    }
  };

  
  // function yams
  const yams = (array) => {
    const occurrences = {};
    array.forEach((value) => {
      if (occurrences[value]) {
        occurrences[value]++;
      } else {
        occurrences[value] = 1;
      }
    });
  
    let messages = [];
  
    let pairCount = 0;
    let tripleCount = 0;
    let quadrupleCount = 0;
  
    Object.values(occurrences).forEach((count) => {
      if (count === 2) {
        pairCount++;
      } else if (count === 3) {
        tripleCount++;
      } else if (count === 4) {
        quadrupleCount++;
      }
    });
  
    if (pairCount === 2) {
        messages.push("Double pair !!");
      } else {
        if (pairCount === 1) {
          setGainedPastries(1);
          messages.push("Pair !!");
        }
        if (tripleCount === 1) {
          setGainedPastries(2);
          messages.push("Brelant !!");
        }
        if (quadrupleCount === 1) {
          setGainedPastries(3);
          messages.push("Carré !!");
        }
      }
  
    if (messages.length === 0) {
      messages.push("Perdu !");
    }
  
    return messages.join('\n');
  };
  
  // DiceRoll
  const DiceRoll = () => {
    if (nbTry > 0) {
      setNbTry(nbTry - 1);
  
      const newDiceValue1 = Math.floor(Math.random() * 5) + 1;
      const newDiceValue2 = Math.floor(Math.random() * 5) + 1;
      const newDiceValue3 = Math.floor(Math.random() * 5) + 1;
      const newDiceValue4 = Math.floor(Math.random() * 5) + 1;
      const newDiceValue5 = Math.floor(Math.random() * 5) + 1;
  
      setDiceValue1(newDiceValue1);
      setDiceValue2(newDiceValue2);
      setDiceValue3(newDiceValue3);
      setDiceValue4(newDiceValue4);
      setDiceValue5(newDiceValue5);
  
      const newDiceValues = [newDiceValue1, newDiceValue2, newDiceValue3, newDiceValue4, newDiceValue5];
      const result = yams(newDiceValues);
  
      setResultMessage(result);
      
    }
  };
  

  return (
    <>
      <h1>Jeux du yams</h1>
      <p>Si vous obtenez une paire (2 désidentiques), vous gagnez une pâtisserie.</p>
      <p>Si vous obtenez un brelan (3 dés identiques), vous gagnés 2 patisseries.</p>
      <p>Si vous obtenez un carré (4 dés identiques), vous gagnés 3 patisseries.</p>
      <p>Bonne chance !!</p>

      <div className="row">
        <div className="dice">{diceValue1}</div>
        <div className="dice">{diceValue2}</div>
        <div className="dice">{diceValue3}</div>
        <div className="dice">{diceValue4}</div>
        <div className="dice">{diceValue5}</div>
      </div>
      <button onClick={DiceRoll}>{buttonText()}</button>
        <p>
            {
                resultMessage
            }
        </p>
        <p>
        BRAVO, vous avez gagné: <br />
          {data ? (
          data.map((pastry) => {
            return pastry.quantity+' '+pastry.name;
          })
          ) : (
          ""
          )}
        </p>
    </>
  );
}
