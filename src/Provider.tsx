import { ReactNode, createContext, useEffect, useState } from "react";

export const ProviderContext = createContext<ContextType | null>(null);

interface ProviderProps {
    children?: ReactNode;
}

export function Provider({ children }: ProviderProps) {
    const [level, setLevel] = useState(1);
    const [isGame, setIsGame] = useState(false);
    const [isEndGame, setIsEndGame] = useState(false);
    const [lives, setLives] = useState(3);
    const handleLevel = () => setLevel((prev) => prev + 1);
    const handleIsGame = () => setIsGame(!isGame);
    const handleIsEndGame = () => setIsEndGame(!isEndGame);
    const handleLives = () => setLives((prev) => prev - 1);
    const makeNewGame = () => {
        setIsEndGame(false);
        setIsGame(false);
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
                level,
                isGame,
                isEndGame,
                lives,
                handleIsGame,
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
    level: number;
    isGame: boolean;
    isEndGame: boolean;
    lives: number;
    handleLevel: () => void;
    handleIsGame: () => void;
    handleIsEndGame: () => void;
    handleLives: () => void;
    makeNewGame: () => void;
};
