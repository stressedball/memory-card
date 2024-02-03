import { useContext } from "react";
import { ContextType, ProviderContext } from "./Provider";

export function EndGame() {
  const { level, makeNewGame } = useContext(ProviderContext) as ContextType;

  return (
    <>
      <h1>Game Over!</h1>
      {level > 5 ? (
        <p className="result">Congratulations, you cleared all the levels!</p>
      ) : (
        <p className="result">
          You cleared {level - 1} {level - 1 > 1 ? "levels" : "level"}
        </p>
      )}
      <button className="standard" onClick={makeNewGame}>Start New Game</button>
    </>
  );
}
