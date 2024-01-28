import { useContext } from "react";
import { ContextType, ProviderContext } from "./Provider";

export function NewGame() {
  const { handleIsGame } = useContext(ProviderContext) as ContextType;

  return (
    <>
      <h1>Memory Card Game!</h1>
      <button onClick={handleIsGame}>Start New Game</button>
    </>
  );
}
