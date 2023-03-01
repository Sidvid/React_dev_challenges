import React from 'react';
import './style.css';
import { data } from './data.js';
import { dataColumns } from './utils.js';
import AmazonCarousel from './AmazonCarousel.js';

export default function App() {
  console.log(data);
  return (
    <div>
      <AmazonCarousel data={data} dataColumns={dataColumns} />
    </div>
  );
}
