import React, { useState, useEffect } from "react";
//espredd operator ->investigar
//make a counter with setTimeout
function TodoList() {
  const itemsArray = [
    {
      id: 1,
      item: "Leer",
      hey: "sasa",
    },
    {
      id: 2,
      item: "Predicar",
    },
  ];
  const [list, setList] = useState(itemsArray);

  const removeItem = (id) => {
    let newList = list.filter((itemSelected) => itemSelected.id !== id);
    setList(newList);
  };

  useEffect(()=>{
    document.title='todoList'
  })

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
