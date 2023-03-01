import React, { useState, useEffect } from 'react';
import './style.css';
import { shuffleArray } from './utils.js';
import { getRandomColorHex } from './utils.js';

export default function App() {
  const [score, setScore] = useState({
    right: 0,
    wrong: 0,
  });
  const [color, setColor] = useState(null);
  const [options, setOptions] = useState(null);
  const [status, setStatus] = useState(null);
  useEffect(() => {
    randomColorGenerator();
  }, []);
  const optionClickHandle = (clickedVal) => {
    let rightOption = options.find((el) => el.isRight);
    if (clickedVal.name === rightOption.name) {
      setStatus(true);
      randomColorGenerator();
      setScore({ ...score, right: score.right + 1 });
      console.log('RIGHT');
    } else {
      setStatus(false);
      setScore({ ...score, wrong: score.wrong + 1 });
      console.log('WRONG');
    }
  };

  function randomColorGenerator() {
    let myColor = getRandomColorHex();
    setOptions(
      shuffleArray([
        {
          name: myColor,
          isRight: true,
        },
        { name: getRandomColorHex(), isRight: false },
        { name: getRandomColorHex(), isRight: false },
      ])
    );
    setColor(myColor);
    setStatus(null);
  }
  console.log(score);
  return (
    <div className="wrapper">
      {color}
      <h2>
        {status ? 'Right Answer' : status === null ? ' ' : 'Wrong Answer'}
      </h2>
      <div style={{ backgroundColor: `${color}` }} className="color-area"></div>
      <div className="options">
        {options &&
          options.map((opt) => {
            return (
              <button onClick={() => optionClickHandle(opt)}>{opt.name}</button>
            );
          })}
      </div>
      <div className="score">
        <h2>{`Right Answer =>${score.right}`}</h2>
        <h2>{`Wrong Answer =>${score.wrong}`}</h2>
      </div>
    </div>
  );
}
