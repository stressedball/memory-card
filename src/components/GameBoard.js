import Deck from './Deck';
import { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import { NextLevelScreen, GameOver } from './Screens';
import Info from './Info';
import getImage from './Images';

// too many states, figured I could use a global variable to handle the DOM elements
// throws errors otherwise that I can't seem to figure 
let content = null;
let info = null;
const MAX_LEVEL = 6;
function GameBoard() {
    // divHandle values :
    // 0 : show deck
    // 1 : level cleared, show intermediary screen
    // 2 : game won, show last screen and implement play again button
    // 3 : game lost, idem
    const [level, setLevel] = useState(1);
    const [score, setScore] = useState(0);
    const [bestScore, setBest] = useState(0);
    const [hearts, setHearts] = useState(3);
    const [deck, setDeck] = useState(makeDeck(level));
    const [divHandle, setDivHandle] = useState(0)
    const [messageLevel, setMessage] = useState('')
    const trackScore = (n) => {
        if (n === 1) setScore(score + 1);
        else setHearts(hearts - 1);
    };
    const trackDeck = () => {
        if (deck.filter((el) => el.isClicked === true).length === deck.length) {
            setLevel(level + 1);
            setDivHandle(1)
        }
    };
    const newGame = () => {
        setLevel(1)
        setScore(0)
        setHearts(3)
        setDeck(makeDeck(level))
        setDivHandle(0)
        setMessage('')
    }
    // useEffect
    useEffect(() => { setDeck([...makeDeck(level)]); }, [level]);
    useEffect(() => {
        if (level === MAX_LEVEL) {
            setDivHandle(2)
            setMessage('All Cleared')
        }
        if (hearts === 0) {
            setDivHandle(3)
            setMessage(level)
        }
        if (divHandle === 1) {
            setTimeout(() => { setDivHandle(0) }, 1800)
        }
    }, [divHandle, level, hearts, messageLevel])
    // check conditions to set screen
    if (score > bestScore) setBest(score);
    if (divHandle === 1) {
        content = <NextLevelScreen level={level} />
    }
    if (divHandle === 0) {
        info = <Info score={score} bestScore={bestScore} level={level} hearts={hearts} />
        content = <Deck id="deck" deck={deck} trackScore={trackScore} trackDeck={trackDeck} level={level} />
    }
    if (divHandle === 2) {
        info = <></>
        content = <GameOver score={score} bestScore={bestScore} status={'won'} newGame={newGame} message={messageLevel} />
    }
    if (divHandle === 3) {
        info = <></>
        content = <GameOver score={score} bestScore={bestScore} status={'lost'} newGame={newGame} message={messageLevel} />
    }
    return (
        <>
            {info}
            <div id='content'>
                {content}
            </div>
        </>
    );
}
const makeDeck = (level) => {
    let deck = [];
    for (let i = 0; i < level * 3; i++) {
        const card = {
            text: i,
            id: uniqid(),
            isClicked: false,
            image : getImage(deck)
        };
        deck.push(card);
    }
    return deck;
};
export default GameBoard;
