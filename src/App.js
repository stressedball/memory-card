import React, { useState, useEffect } from "react";
import GameBoard from "./components/GameBoard";
let display = null;
function App() {
  const [status, setStatus] = useState(0)
  // status 0 : startGame button  
  // status 1 : GameBoard
  useEffect(() => {
  }, [status])
  const startGame = () => {
    setStatus(1)
  }
  if (status === 0) display = <IntroScreen startGame={startGame}/>
  if (status === 1) display = <GameBoard />
  return (
    <div className="App">
      <div id="header">
        <p>Memory Card</p>
      </div>
      {display}
      <footer>Made by TS / Photo Credits go to <a href="https://imgur.io/zTcsX5b">Derek Laufman (reddit.com/r/kyloren)</a></footer>
    </div>
  );
}
function IntroScreen({startGame}) {
  return (
    <div id="instructions">
      <div id="text">
      <p>To win, click on each card exactly once.</p>
      <p>Click twice on the same card, you'll lose one health.</p>
      <p>Clear all the levels to win the game. Good luck!</p>
      </div>
    <button onClick={startGame}>Start New Game</button>
  </div>
  )
}

export default App;
