import { useContext } from "react";
import "./App.css";
import { ProviderContext, ContextType } from "./Provider";
import { NewGame } from "./Newgame";
import { EndGame } from "./EndGame";
import { Game } from "./Game";

function App() {
  const { isGame, isEndGame } = useContext(
    ProviderContext
  ) as ContextType;
  return <>{!isGame ? <NewGame /> : isEndGame ? <EndGame /> : <Game />}</>;
}

export default App;
