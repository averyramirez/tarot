import "./App.css";
import { useState } from "react";
import React from "react";
import axios from "axios";

function App() {
  const [cardName, setCardName] = useState("");
  const [cardDesc, setCardDesc] = useState("");
  const getCards = () => {
    axios
      .get("https://tarot-api-3hv5.onrender.com/api/v1/cards/random?n=1")
      .then((res) => {
        console.log(res.data.cards[0]);
        setCardName(res.data.cards[0].name);
        setCardDesc(res.data.cards[0].desc);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <div className="tarot">
        <div className="descBox">
          <h1 className="title">Daily Tarot Card Reading</h1>
          <button onClick={getCards} className="cardButton">
            Click to see your fortune!
          </button>
          <h2 className="cardName">{cardName}</h2>
          <p className="cardDesc">{cardDesc}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
