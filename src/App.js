import React, { useState, useEffect } from "react";
import { NextLevelScreen, GameOver } from './components/Screens';
import Deck from './components/Deck';
import Info from './components/Info';


function App() {
  let display = null;
  const [status, setStatus] = useState(3)
  // status 0 : startGame button  
  // status 1 : GameBoard
  const [level, setLevel] = useState(1)
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [hearts, setHearts] = useState(3)
  
  const addToScore = () => { setScore(score + 1) }

  const decrementHearts = () => {
    setHearts(hearts - 1)
    if (hearts <= 1) setStatus(3)
  }

  const trackDeck = () => { setLevel(level + 1) }

  const startGame = () => { setStatus(1) }

  const newGame = () => {
    setLevel(1)
    setScore(0)
    setHearts(3)
    setStatus(1)
  }

  const setDeckDisplay = () => {
    setTimeout(() => {
      setStatus(1)
    }, 1800)
  }

  useEffect(() => {
    if (level > 1 && level < 6) setStatus(2)
    if (level > 6) setStatus(4)
  }, [level])

  if (score > bestScore) setBestScore(score)

  if (status === 0) display = <IntroScreen startGame={startGame} />
  if (status === 1) {
    display =
      <>
        <Info score={score} bestScore={bestScore} level={level} hearts={hearts}></Info>
        <div id='content'>
          <Deck level={level} trackDeck={trackDeck} addToScore={addToScore} decrementHearts={decrementHearts} />
        </div>
      </>
    // <GameBoard nextScreen={nextScreen} />
  }
  if (status === 2) {
    display = <NextLevelScreen level={level} setDeckDisplay={setDeckDisplay} />
  }
  if (status === 3) {
    display = <GameOver score={score} bestScore={bestScore} status={'lost'} newGame={newGame} message={level} />
  }
  if (level > 5) {
    display = <GameOver score={score} bestScore={bestScore} status={'won'} newGame={newGame} message='All Levels Cleared' />
  }
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
function IntroScreen({ startGame }) {
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
