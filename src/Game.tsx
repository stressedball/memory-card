import { useContext } from "react";
import { ContextType, ProviderContext } from "./Provider";

export function Game() {
  const { handleIsGame } = useContext(ProviderContext) as ContextType;

  return (
    <>
      <h1>Game!</h1>
      {/* <button onClick={handleIsGame}>Start New Game</button> */}
    </>
  );
}
