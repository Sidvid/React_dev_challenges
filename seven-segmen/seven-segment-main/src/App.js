import React, { useRef, useState } from 'react';
import './style.css';
import { data } from './data.js';
import SevenSegment from './SevenSegment.js';
import { getNumberMap } from './data.js';

export default function App() {
  const [myNum, setMyNum] = useState('one');
  const clickHandle = (num) => {
    console.log(getNumberMap(num));
    setMyNum(getNumberMap(num));
  };

  return (
    <>
      <div>
        <SevenSegment data={data[myNum]} />
      </div>
      <div className="numbers-wrapper">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9,0].map((elem) => {
          return (
            <div onClick={() => clickHandle(elem)} className="numbers">
              {elem}
            </div>
          );
        })}
      </div>
    </>
  );
}
