import React, { useState } from 'react';
import './style.css';
let data = [
  {
    name: 'Meerut',
    label: 'meerut',
  },
  {
    name: 'Bombay',
    label: 'bombay',
  },
  {
    name: 'Kanpur',
    label: 'kanpur',
  },
  {
    name: 'Delhi',
    label: 'delhi',
  },
  {
    name: 'Bhopal',
    label: 'bhopal',
  },
  {
    name: 'Lucknow',
    label: 'lucknow',
  },
  {
    name: 'Mawana',
    label: 'mawana',
  },
];

export default function App() {
  const [selectedCities, setSelectedCities] = useState([]);
  const changeHandle = (val, e) => {
    if (e.target.checked) {
      setSelectedCities([...selectedCities, val]);
    } else {
      let filteredArr = selectedCities.filter((c) => {
        return c.name != val.name;
      });
      setSelectedCities(filteredArr);
    }
  };
  const crossHandleClick = (data) => {
    let filteredArr = selectedCities.filter((city) => {
      return city.name != data.name;
    });
    setSelectedCities(filteredArr);
  };

  function getCheckedValue(data) {
    let flag = selectedCities.some((city) => {
      return city.label === data;
    });

    return flag;
  }

  return (
    <div>
      {selectedCities.length > 0 && (
        <div className="selected_cities">
          {selectedCities &&
            selectedCities.map((city) => {
              return (
                <div className="chip">
                  <p>{city.name}</p>
                  <p className="cross" onClick={() => crossHandleClick(city)}>
                    X
                  </p>
                </div>
              );
            })}
        </div>
      )}
      <div className="status">
        <h3>{`${selectedCities?.length} selected out of ${data.length}`}</h3>
      </div>
      <div className="cities_name">
        <h2>All Cities</h2>
        {data.map((city) => {
          return (
            <>
              {' '}
              <input
                onChange={(e) => changeHandle(city, e)}
                name={city.label}
                type="checkbox"
                checked={getCheckedValue(city.label)}
              />{' '}
              <span>{city.name}</span> <br />{' '}
            </>
          );
        })}
      </div>
    </div>
  );
}
