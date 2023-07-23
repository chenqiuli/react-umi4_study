import React, { useState } from 'react';

interface ListType {
  id: number;
  text: string;
}

export default function Todolist() {
  const [list, setlist] = useState<ListType[]>([
    { id: 1, text: '111' },
    { id: 2, text: '222' },
    { id: 3, text: '333' },
  ]);
  const [value, setvalue] = useState<string>('');

  return (
    <div>
      <h1>Todolist</h1>
      <div>
        <input
          type="text"
          value={value}
          onChange={(evt) => {
            if (!evt.target.value.length) {
              return;
            }
            setvalue(evt.target.value.trim());
          }}
        />
        <button
          onClick={() => {
            const newList = [
              ...list,
              {
                id: list.length + 1,
                text: value,
              },
            ];
            setlist(newList);
            setvalue('');
          }}
        >
          add
        </button>
      </div>
      <ul>
        {list.map(({ id, text }, index) => {
          return (
            <li key={id}>
              {text}
              <button
                onClick={() => {
                  const newList = [...list];
                  newList.splice(index, 1);
                  setlist(newList);
                }}
              >
                del
              </button>
            </li>
          );
        })}
      </ul>
      {!list.length && <div>Todilist 空空如也</div>}
    </div>
  );
}
