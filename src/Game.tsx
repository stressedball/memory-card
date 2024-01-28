import { useContext, useEffect , useState} from "react";
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
  const { level } = useContext(ProviderContext) as ContextType;
  const [cards, setCards] = useState<number>(0)
  useEffect(() => {

  }, [level])
  return <>
  
  </>;
}

function Card() {
    
}

const cardPaths = [
    'BB.png',
    'boba.png'
]