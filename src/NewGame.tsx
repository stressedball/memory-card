import {  useContext } from "react";
import { ContextType, ProviderContext } from "./Provider";
import "./assets/css/new-game.css";
import ScrollArrow from "./ScrollArrow";

export function NewGame() {
  const { difficulty, handleIsGame, handleDifficulty } = useContext(
    ProviderContext
  ) as ContextType;

  return (
    <>
      <h1>Memory Card Game!</h1>
      <section id="instructions">
        <p>How To Play</p>
        <div>
          <p>
            On <u>each</u> level select every card{" "}
            <em>
              <strong>once</strong>
            </em>
            .
          </p>
        </div>
      </section>
      <section id="difficulty">
        <div>
          <button
            onClick={() => handleDifficulty(1)}
            className={`easy ${difficulty === 1 ? "selected" : ""}`}
          >
            Easy
          </button>
          <button
            onClick={() => handleDifficulty(2)}
            className={`medium ${difficulty === 2 ? "selected" : ""}`}
          >
            Medium
          </button>
          <button
            onClick={() => handleDifficulty(3)}
            className={`hard ${difficulty === 3 ? "selected" : ""}`}
          >
            Hard
          </button>
        </div>
      </section>
      <button className="standard" onClick={handleIsGame}>Start New Game</button>
      <ScrollArrow />
    </>
  );
}
