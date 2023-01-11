import Deck from './Deck';
import {useState, useEffect} from 'react';
import uniqid from 'uniqid';
function GameBoard() {
    const [level, setLevel] = useState(1);
    const [score, setScore] = useState(0);
    const [bestScore, setBest] = useState(0);
    const [hearts, setHearts] = useState(3);
    const [deck, setDeck] = useState(makeDeck(level));
    const trackScore = (n) => {
        if (n === 1) setScore((score) => score + 1);
        else setHearts(hearts - 1);
    };
    const trackDeck = () => {
        if (deck.filter((el) => el.isClicked === true).length === deck.length) {
            setLevel(level + 1);
        }
    };
    if (score > bestScore) {
        setBest(score);
    }
    useEffect(() => {
        setDeck([...makeDeck(level)]);
    }, [level]);
    return (
        <>
            <div id="info">
                <div id="level">CURRENT LEVEL : {level}</div>
                <div id="score">SCORE : {score}</div>
                <div id="best-score">BEST : {bestScore}</div>
                <div id="lives">LIVES : {hearts}</div>
            </div>
            <Deck
                id="deck"
                deck={deck}
                trackScore={trackScore}
                trackDeck={trackDeck}
            />
        </>
    );
}
const makeDeck = (level) => {
    console.log('level ', level);
    let deck = [];
    for (let i = 0; i < level * 3; i++) {
        const card = {
            text: i,
            id: uniqid(),
            isClicked: false,
        };
        deck.push(card);
    }
    return deck;
};
export default GameBoard;
