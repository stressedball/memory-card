import { useContext } from "react";
import "./App.css";
import { ProviderContext, ContextType } from "./Provider";
import { NewGame } from "./NewGame";
import { EndGame } from "./EndGame";
import { Game } from "./Game";

function App() {
  const { isGame, isEndGame } = useContext(ProviderContext) as ContextType;
  return (
    <>
      <header>
        <button>
          <a href="/">Home</a>
        </button>
        <button onClick={() => {}}>About</button>
      </header>
      {!isGame ? <NewGame /> : isEndGame ? <EndGame /> : <Game />}
    </>
  );
}

export default App;
