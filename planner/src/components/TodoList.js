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
  const [remove, setRemove] = useState(itemsArray);

  function removeItems(id) {
    let now = itemsArray.filter(
      (itemRemoved) => itemRemoved.id !== id && console.log(id)
    );
    setRemove(now);
  }
  return (
    <div>
      <ol>
        {itemsArray.map((items) => {
          const { id } = items;
          return (
            <li key={items.id}>
              {items.item}{" "}
              <button onClick={() => removeItems(id)}>Remove</button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default TodoList;
