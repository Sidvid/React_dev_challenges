import React, { useState, useEffect } from 'react';
import './style.css';
const data = [
  {
    id: 1,
    name: 'sid',
    phone: '99',
    country: 'india',
  },
  {
    id: 2,
    name: 'ashish',
    phone: '89',
    country: 'india',
  },
  {
    id: 3,
    name: 'mike',
    phone: '99',
    country: 'US',
  },
  {
    id: 4,
    name: 'john',
    phone: '65',
    country: 'pak',
  },
];

export default function App() {
  const [table, setTable] = useState(null);
  const [isEdit, setIsEdit] = useState(null);
  const [input, setInput] = useState({
    name: '',
    phone: '',
    country: '',
  });
  const changeHandle = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    console.log(value, name);
    setInput({ ...input, [name]: value });
  };
  useEffect(() => {
    setTable(data);
  }, []);
  const confirmHandle = (value) => {
    let newArr = structuredClone(table);
    newArr[value] = {
      ...input,
      phone: input.phone ? input.phone : table[value]?.phone,
      country: input.country ? input.country : table[value]?.country,
      name: input.name ? input.name : table[value]?.name,
    };

    setTable(newArr);
    setIsEdit(null);
  };

  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>phone</th>
          <th>country</th>
          <th>Action</th>
        </tr>

        {table?.map((data, index) => {
          return (
            <tr>
              {data.id === isEdit ? (
                <>
                  <td>
                    <input
                      defaultValue={data.name}
                      // value={input.name}
                      name="name"
                      onChange={changeHandle}
                      type="text"
                    />
                  </td>
                  <td>
                    <input
                      defaultValue={data.phone}
                      // value={input.phone}
                      name="phone"
                      onChange={changeHandle}
                      type="text"
                    />
                  </td>
                  <td>
                    <input
                      defaultValue={data.country}
                      // value={input.country}
                      name="country"
                      onChange={changeHandle}
                      type="text"
                    />
                  </td>
                </>
              ) : (
                <>
                  <td>{data.name}</td>
                  <td>{data.phone}</td>
                  <td>{data.country}</td>
                </>
              )}

              <td>
                {data.id === isEdit ? (
                  <button onClick={() => confirmHandle(index)}>Confirm</button>
                ) : (
                  <button onClick={() => setIsEdit(data.id)}>Edit</button>
                )}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
