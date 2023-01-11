function Deck({ deck, trackScore, trackDeck }) {
    deck = shuffleDeck(deck)
    const clickHandle = (e) => {
        const card = deck.filter((el) => el.id === e.target.id);
        if (card[0].isClicked === true) trackScore(-1);
        if (card[0].isClicked === false) {
            card[0].isClicked = true;
            trackScore(1);
            trackDeck();
        }
    };
    const cards = deck.map((el) => (
        <>
            <div className="img-container">
                <img src={el.image} key={el.id} id={el.id} onClick={clickHandle} alt="card"></img>
            </div>
        </>
    ));
    return (
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
