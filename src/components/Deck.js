import { useEffect, useState } from "react";
import getImage from './Images';
import uniqid from 'uniqid';

function Deck({ level, addToScore, decrementHearts, trackDeck }) {
    const [deck, setDeck] = useState(makeDeck(level))
    const handleClick = (e) => {
        setDeck(shuffleDeck(deck))
        const card = deck.filter((el) => el.id === e.target.id);
        if (card[0].isClicked === true) {
            decrementHearts()
        };
        if (card[0].isClicked === false) {
            card[0].isClicked = true;
            addToScore()
            if (deck.filter(el => el.isClicked === true).length === deck.length) {
                trackDeck()
            }
        }
    };
    const cards = deck.map((el) => (
        <>
            <div className="img-container">
                <img src={el.image} key={el.id} id={el.id} onClick={handleClick} alt="card"></img>
            </div>
        </>
    ));
    return (
        <>
            <div id="deck">{cards}</div>
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
const shuffleDeck = (deck) => {
    let rand = [];
    let newArr = [];
    for (let i = 0; i < deck.length; i++) {
        let newIndex = Math.trunc(Math.random() * deck.length);
        while (rand.filter((el) => el === newIndex).length > 0) {
            newIndex = Math.trunc(Math.random() * deck.length);
        }
        rand.push(newIndex);
    }
    for (let i = 0; i < rand.length; i++) {
        newArr.push(deck[rand[i]]);
    }
    return newArr;
};
export default Deck;
