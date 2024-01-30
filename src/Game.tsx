import { ReactNode, useContext, useEffect, useState } from "react";
import { ContextType, ProviderContext } from "./Provider";
import LightSaber from "./LightSaber";
import Deck from "./Deck";
import "./assets/css/game.css";

export function Game() {
  const { level, lives } = useContext(ProviderContext) as ContextType;
  const [livesIcons, setLivesIcons] = useState(Array<ReactNode>);

  useEffect(() => {
    let arr = new Array();
    for (let i = 0; i < lives; i++) {
      arr.push(<LightSaber key={i} index={i} />);
    }
    setLivesIcons(arr);
  }, []);

  return (
    <>
      <div>
        <h2>Level {level}</h2>
          <div>{livesIcons}</div>
      </div>
      <Deck />
    </>
  );
}