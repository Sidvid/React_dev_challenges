import React, { useState, useMemo, useCallback } from 'react';
import './style.css';
let colors = [
  'aqua',
  'black',
  'blue',
  'fuchsia',
  'gray',
  'green',
  'lime',
  'maroon',
  'navy',
  'olive',
  'orange',
  'purple',
  'red',
  'silver',
  'teal',
  'white',
  'yellow',
];

export default function App() {
  const ref = React.useRef();
  const getArray = (limit) => {
    let array = [];
    for (let i = 1; i < limit; i++) {
      array.push(i);
    }
    return array;
  };
  const mouseLeave = (e, index) => {
    e.target.style.background = 'white';
    e.target.style.transation = 'all 1s linear';
  };
  const mouseEnter = (e, index) => {
    e.target.style.background = colors[Math.floor(Math.random() * 17)];
  };
  const getArrayMemo = useMemo(() => {
    return getArray(1000);
  }, []);
  return (
    <div className="wrapper">
      {getArrayMemo.map((elem, index) => {
        return (
          <div
            ref={ref}
            onMouseLeave={(e) => mouseLeave(e, index)}
            onMouseEnter={(e) => mouseEnter(e, index)}
            className={`box`}
          ></div>
        );
      })}
    </div>
  );
}
