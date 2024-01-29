import { ReactNode, useContext, useEffect, useState } from "react";
import { ContextType, ProviderContext } from "./Provider";
import LightSaberElement from "../public/lightsaber.svg";

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
      <h1>Game!</h1>
      <div>
        <p>Level {level}</p>
        <div>
          <p>Number of lives</p>
          <div>{livesIcons}</div>
        </div>
      </div>
      <Deck />
    </>
  );
}

function Deck() {
  const { level, handleLevel, difficulty } = useContext(
    ProviderContext
  ) as ContextType;
  const [cards, setCards] = useState<Array<string>>([]);
  const [clearedCards, setClearedCards] = useState<Array<string>>([]);

  const shuffleDeck = () => {
    let arr = cards;
    let newArr = new Array();
    while (arr.length) {
      const index = Math.floor(Math.random() * arr.length);
      newArr.push(arr[index]);
      arr.splice(index, 1);
    }
    setCards(newArr);
  };

  const checkPlayedCards = (card: string) => {
    if (!clearedCards.includes(card)) {
      setClearedCards([...clearedCards, card]);
    }
  };

  useEffect(() => {
    if (clearedCards.length >= level * difficulty) {
      handleLevel();
    }
  }, [clearedCards]);

  useEffect(() => {
    // could not get around overflow in the while loop without an array outside of it
    let arr = new Array();
    while (arr.length < level * difficulty) {
      const index = Math.floor(Math.random() * cardNames.length);
      const newCard = cardNames[index];
      if (!arr.includes(newCard)) {
        arr.push(newCard);
      }
    }
    setCards(arr);
    setClearedCards([]);
  }, [level]);

  return (
    <>
      <div className="deck">
        {cards.map((card) => {
          return (
            <Card
              key={card}
              card={card}
              checkPlayedCards={checkPlayedCards}
              shuffleDeck={shuffleDeck}
            />
          );
        })}
      </div>
    </>
  );
}

function Card(props: {
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
        style={{ background: `url(img/new/${props.card}.png)` }}
      />
    </>
  );
}

function LightSaber(props: { index: number }) {
  const { lives } = useContext(ProviderContext) as ContextType;
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (props.index + 1 <= lives) return;
    setIsDone(true);
  }, [lives]);

  return (
    <>
      <img
        key={props.index}
        className={`lightsaber ${isDone ? "done" : ""}`}
        src={LightSaberElement}
        alt="light-saber icon"
      />
    </>
  );
}
const cardNames = [
  "icons8-c-3po-480",
  "icons8-chewbacca-480",
  "icons8-darth-vader-480",
  "icons8-luke-skywalker-480",
  "icons8-mando-480",
  "icons8-r2-d2-480",
  "icons8-stormtrooper-400",
  "princess-leia",
  "yoda",
  "han-solo",
  "palpatine",
  "boba-fett",
  "jabba-the-hutt",
  "darth-maul",
  "obi-wan-kenobi",
];
