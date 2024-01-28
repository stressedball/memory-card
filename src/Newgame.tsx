import { useContext } from "react";
import { ContextType, ProviderContext } from "./Provider";

export function NewGame() {
  const { handleIsGame } = useContext(ProviderContext) as ContextType;

  return (
    <>
      <h1>Memory Card Game!</h1>
      <section>
        <p>How To Play</p>
        <p>On each level select every card <em>once</em>.</p>
        <p>If you click twice on the same card, you'll lose a live. 3 lives in total.</p>
        <p>Good Luck!</p>
      </section>
      <button onClick={handleIsGame}>Start New Game</button>
    </>
  );
}
