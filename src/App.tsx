import { useContext, useState } from "react";
import "./App.css";
import { ProviderContext, ContextType } from "./Provider";
import { NewGame } from "./NewGame";
import { EndGame } from "./EndGame";
import { Game } from "./Game";
import About from "./About";

function App() {
  const [displayAbout, setDisplayAbout] = useState(false);
  const { isGame, isEndGame } = useContext(ProviderContext) as ContextType;
  const handleDisplayAbout = () => setDisplayAbout(!displayAbout);
  return (
    <>
      <header>
        <button className="standard">
          <a href="/">Home</a>
        </button>
        <button
          className="standard"
          onClick={(e) => {
            e.preventDefault();
            setDisplayAbout(!displayAbout);
          }}
        >
          About
        </button>
      </header>
      {!isGame ? <NewGame /> : isEndGame ? <EndGame /> : <Game />}
      {displayAbout ? <About handleDisplayAbout={handleDisplayAbout} /> : null}
    </>
  );
}

export default App;
