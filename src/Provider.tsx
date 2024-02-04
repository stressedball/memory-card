import { ReactNode, createContext, useEffect, useState } from "react";

export const ProviderContext = createContext<ContextType | null>(null);

interface ProviderProps {
  children?: ReactNode;
}

export function Provider({ children }: ProviderProps) {
  const [difficulty, setDifficulty] = useState(2);
  const [level, setLevel] = useState(1);
  const [isGame, setIsGame] = useState(false);
  const [isEndGame, setIsEndGame] = useState(false);
  const [lives, setLives] = useState(3);
  const handleLevel = () => setLevel((prev) => prev + 1);
  const handleIsGame = () => setIsGame(!isGame);
  const handleIsEndGame = () => setIsEndGame(!isEndGame);
  const handleLives = () => setLives((prev) => prev - 1);
  const handleDifficulty = (val: number) => setDifficulty(val);
  const makeNewGame = () => {
    setIsGame(false);
    setIsEndGame(false);
    setLevel(1);
    setLives(3);
  };

  useEffect(() => {
    if (lives <= 0) setIsEndGame(true);
  }, [lives]);

  useEffect(() => {
    if (level > 5) setIsEndGame(true);
  }, [level]);

  return (
    <ProviderContext.Provider
      value={{
        difficulty,
        level,
        isGame,
        isEndGame,
        lives,
        handleIsGame,
        handleDifficulty,
        handleLevel,
        handleIsEndGame,
        handleLives,
        makeNewGame,
      }}
    >
      {children}
    </ProviderContext.Provider>
  );
}

export type ContextType = {
  difficulty: number;
  level: number;
  isGame: boolean;
  isEndGame: boolean;
  lives: number;
  handleDifficulty: (val: number) => void;
  handleLevel: () => void;
  handleIsGame: () => void;
  handleIsEndGame: () => void;
  handleLives: () => void;
  makeNewGame: () => void;
};
