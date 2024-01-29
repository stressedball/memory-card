import { useContext } from "react";
import { ContextType, ProviderContext } from "./Provider";
import "./assets/css/new-game.css";

export function NewGame() {
  const { handleIsGame, handleDifficulty } = useContext(
    ProviderContext
  ) as ContextType;

  return (
    <>
      <h1>Memory Card Game!</h1>
      <section>
        <p>How To Play</p>
        <p>
          On each level select every card <em>once</em>.
        </p>
        <p>
          If you click twice on the same card, you'll lose a live. 3 lives in
          total.
        </p>
        <p>Good Luck!</p>
      </section>
      <section id="difficulty">
        <p>Select Difficulty</p>
        <div>
          <button onClick={() => handleDifficulty(1)}>
            Easy
          </button>
          <button onClick={() => handleDifficulty(2)}>
            Medium
          </button>
          <button onClick={() => handleDifficulty(3)}>
            Hard
          </button>
        </div>
      </section>
      <button onClick={handleIsGame}>Start New Game</button>
    </>
  );
}
