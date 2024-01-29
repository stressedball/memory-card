import { useContext, useEffect, useState } from "react";
import { ContextType, ProviderContext } from "./Provider";

export default function Card(props: {
    card: string;
    shuffleDeck: () => void;
    checkPlayedCards: (val: string) => void;
  }) {
    const { level, handleLives } = useContext(ProviderContext) as ContextType;
    const [isClicked, setIsClicked] = useState(false);
  
    useEffect(() => {
      setIsClicked(false);
    }, [level]);
  
    return (
      <>
        <div
          className="card-container"
          onClick={() => {
            if (isClicked) handleLives();
            else setIsClicked(true);
            props.shuffleDeck();
            props.checkPlayedCards(props.card);
          }}
        >
          <img src={`img/new/${props.card}.png`} alt={`${props.card}`} />
        </div>
      </>
    );
  }