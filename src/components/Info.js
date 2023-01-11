import heart from '../lightsaber.svg'
export default function Info({ score, bestScore, level, hearts }) {
    return (
        <div id="info">
            <div id="level">CURRENT LEVEL : {level}</div>
            <div id="score">SCORE : {score}</div>
            <div id="best-score">BEST : {bestScore}</div>
            <div id="lives">
                LIVES : <Heart hearts={hearts} />
            </div>
        </div>
    )
}
function Heart({hearts}){
    const getTag = order => {
        if (hearts < order) return 'dim'
        return 'light'
    }
    return(
        <>
            <img src={heart} alt='heart' className={getTag(1)}></img>
            <img src={heart} alt='heart' className={getTag(2)}></img>
            <img src={heart} alt='heart' className={getTag(3)}></img>
        </>
    )
}