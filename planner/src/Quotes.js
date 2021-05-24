import React, { useState } from "react";
import { QuoteData } from "./QuoteData";

function Quotes() {
  const [number, setNumber] = useState(0);
  const sumNumber = () => {
    setNumber(number + 3);
  };
  return QuoteData.map((quotes) => {
    return (
      <div>
        <h2 key={quotes.id}>Hello! {" " + quotes.quote}</h2>
        <button className="btn" onClick={sumNumber}>
         Hey! Imma counter! {number}
        </button>
      </div>
    );
  });
}

export default Quotes;
