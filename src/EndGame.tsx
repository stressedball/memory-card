import { useContext } from "react";
import { ContextType, ProviderContext } from "./Provider";

export function EndGame() {
  const { handleIsGame } = useContext(ProviderContext) as ContextType;

  return (
    <>
      <h1>Game Over!</h1>
      {/* <button onClick={handleIsGame}>Start New Game</button> */}
    </>
  );
}
