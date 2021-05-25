import React, { useState } from "react";
import { QuoteData } from "./QuoteData";

function Quotes() {
  return QuoteData.map((quotes) => {
    return (
      <div>
        <h2 key={quotes.id}>Hello! {" " + quotes.quote}</h2>
      </div>
    );
  });
}

export default Quotes;
