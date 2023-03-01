import React from 'react';
import { UilAngleRightB } from '@iconscout/react-unicons';
import { UilAngleLeft } from '@iconscout/react-unicons';
function AmazonCarousel({ data, dataColumns }) {
  console.log('data', dataColumns);
  const clickArrow = (align) => {
    let box = document.querySelector('.amazon-wrapper');

    if (align === 'right') {
      box.scrollLeft = box.scrollLeft + 300;
    } else {
      box.scrollLeft = box.scrollLeft - 300;
    }
  };

  return (
    <div className="whole-wrapper">
      <div className="left">
        <UilAngleRightB
          onClick={() => clickArrow('right')}
          className="right-swap"
        />
      </div>
      <div className="right">
        <UilAngleLeft
          onClick={() => clickArrow('left')}
          className="left-swap"
        />
      </div>

      <div className="amazon-wrapper">
        {data &&
          data.map((items) => {
            return (
              <div className="amazon-card">
                <div className="amazon-image">
                  <img src={items.avatar} alt="" />
                </div>
                {dataColumns.map((col) => {
                  return (
                    <>
                      <div className="amazon-details">
                        <p>{items[col.label]}</p>
                      </div>
                    </>
                  );
                })}
                <hr />
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default AmazonCarousel;
