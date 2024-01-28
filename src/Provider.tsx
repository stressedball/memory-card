import { ReactNode, createContext, useState } from "react";

export const ProviderContext = createContext<ContextType | null>(null);

interface ProviderProps {
  children?: ReactNode;
}

export function Provider({ children }: ProviderProps) {
  const [level, setLevel] = useState(0);
  const [isGame, setIsGame] = useState(false);
  const [isEndGame, setIsEndGame] = useState(false);
  const handleLevel = (val: number) => setLevel(val);
  const handleIsGame = () => setIsGame(!isGame);
  const handleIsEndGame = () => setIsEndGame(!isEndGame);
  return (
    <ProviderContext.Provider
      value={{
        level,
        isGame,
        isEndGame,
        handleIsGame,
        handleLevel,
        handleIsEndGame,
      }}
    >
      {children}
    </ProviderContext.Provider>
  );
}

export type ContextType = {
  level: number;
  isGame: boolean;
  isEndGame: boolean;
  handleLevel: (val: number) => void;
  handleIsGame: () => void;
  handleIsEndGame: () => void;
};
