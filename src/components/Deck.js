function Deck({deck, trackScore, trackDeck}) {
  deck = shuffleDeck(deck)
    const clickHandle = (e) => {
        console.log(deck);
        const card = deck.filter((el) => el.id === e.target.id);
        if (card[0].isClicked === true) trackScore(-1);
        if (card[0].isClicked === false) {
            card[0].isClicked = true;
            trackScore(1);
            trackDeck();
        }
    };
    const cards = deck.map((el) => (
        <button key={el.id} id={el.id} onClick={clickHandle}>
            {el.text}
        </button>
    ));
    return (
        // <div className="img-container">
        //     <img src="" id={id} onClick={tagCard}></img>
        // </div>
        <div id="deck">{cards}</div>
    );
}
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
