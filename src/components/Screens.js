function NextLevelScreen({ level, setDeckDisplay }) {
    setDeckDisplay(level)
    return (
        <div id="next-screen">
            <h3>Nicely Done!</h3>
            <p>Advancing to level {level}</p>
        </div>
    )
}
function GameOver({ score, bestScore, status, newGame, message }) {
    const setNewGame = () => {
        newGame()
    }
    return (
        <div id="game">
            <div>
                <h2>Game Over!</h2>
                <h2>You {status}!</h2>
            </div>
            <div id="result">
                <p>SCORE : {score}</p>
                <p>BEST : {bestScore}</p>
                <p>LEVEL : {message}</p>
            </div>
            <button onClick={setNewGame}>Play again?</button>
        </div>
    )
}
export { NextLevelScreen, GameOver }