import { useContext } from "react";
import { ContextType, ProviderContext } from "./Provider";

export function EndGame() {
    const { level, makeNewGame } = useContext(ProviderContext) as ContextType;

    return (
        <>
            <h1>Game Over!</h1>
            <p>
                You cleared {level - 1} {level - 1 > 1 ? "levels" : "level"}
            </p>
            {level > 5 ? (
                <p>Congratulations, you cleared all the levels!</p>
            ) : null}
            <button onClick={makeNewGame}>Start New Game</button>
        </>
    );
}
