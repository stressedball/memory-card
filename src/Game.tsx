import { useContext, useEffect, useState } from "react";
import { ContextType, ProviderContext } from "./Provider";

export function Game() {
    const { handleIsGame } = useContext(ProviderContext) as ContextType;

    return (
        <>
            <h1>Game!</h1>
            <Deck />
            {/* <button onClick={handleIsGame}>Start New Game</button> */}
        </>
    );
}

function Deck() {
    const { level, lives, handleLevel } = useContext(
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
        console.log(card);
        console.log(clearedCards);
        if (!clearedCards.includes(card)) {
            setClearedCards([...clearedCards, card]);
        }
    };

    useEffect(() => {
        if (clearedCards.length >= level * 1) {
            handleLevel();
        }
    }, [clearedCards]);

    useEffect(() => {
        // could not get around overflow in the while loop without an array outside of it
        let arr = new Array();
        while (arr.length < level * 1) {
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
            <div>
                <p>Level {level}</p>
                <p>Number of lives : {lives}</p>
            </div>
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
