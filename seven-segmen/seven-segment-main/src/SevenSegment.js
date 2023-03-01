import React from 'react';
function SevenSegment({ data }) {
  return (
    <div className="wrapper">
      <>
        <div
          style={{
            backgroundColor: data[0] ? 'black' : 'white',
            display: data[0] ? '' : 'none',
          }}
          className="top display"
        ></div>
        <div
          style={{
            backgroundColor: data[1] ? 'black' : 'white',
            display: data[1] ? '' : 'none',
          }}
          className="right-top display"
        ></div>
        <div
          style={{
            backgroundColor: data[2] ? 'black' : 'white',
            display: data[2] ? '' : 'none',
          }}
          className="right-bottom display"
        ></div>
        <div
          style={{
            backgroundColor: data[3] ? 'black' : 'white',
            display: data[3] ? '' : 'none',
          }}
          className="mid display"
        ></div>
        <div
          style={{
            backgroundColor: data[4] ? 'black' : 'white',
            display: data[4] ? '' : 'none',
          }}
          className="left-bottom display"
        ></div>
        <div
          style={{
            backgroundColor: data[5] ? 'black' : 'white',
            display: data[5] ? '' : 'none',
          }}
          className="left-top display"
        ></div>
        <div
          style={{
            backgroundColor: data[6] ? 'black' : 'white',
            display: data[6] ? '' : 'none',
          }}
          className="bottom display"
        ></div>
      </>
    </div>
  );
}
export default SevenSegment;
