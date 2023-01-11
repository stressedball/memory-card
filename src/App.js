import React, { useState, useEffect } from "react";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <div className="App">
      <div id="header">
        <h1>Memory Card</h1>
      </div>
      <GameBoard />
      <footer>Made by TS</footer>
    </div>
  );
}

export default App;
