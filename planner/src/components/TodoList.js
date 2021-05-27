import React, { useState } from "react";

function TodoList() {
  const itemsArray = [
    {
      id: 1,
      item: "Leer",
    },
    {
      id: 2,
      item: "Predicar",
    },
  ];
  const [list, setList] = useState(itemsArray);

  const removeItem = (id) => {
    let newList = list.filter((itemList) => itemList.id !== id);

    setList(newList);
  };

  return (
    <div>
      <ol>
        {list.map((items) => {
          const { id } = items;
          return (
            <li key={id}>
              {items.item}{" "}
              <button
                className="btn btn-danger 
              "
                onClick={() => {
                  removeItem(id);
                }}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default TodoList;
