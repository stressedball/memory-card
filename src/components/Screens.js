function NextLevelScreen({ level }) {
    return (
        <div id="next-screen">
            <p>Nicely Done!</p>
            <h3>Advancing to level {level}</h3>
        </div>
    )
}
function GameOver({ score, bestScore, status, newGame, message }) {
    const setNewGame = () => {
        newGame()
    }
    return (
        <div id="game">
            <h2>Game Over! You {status}!</h2>
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