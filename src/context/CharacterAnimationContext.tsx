import React, { FC, createContext, useContext, useState } from "react";

const CharacterAnimationContext = createContext({});

export const CharacterAnimationProvider: FC<any> = ({ children }) => {
  const [animationIndex, setAnimationIndex] = useState<number>(0);
  const [animations, setAnimations] = useState<string[]>([]);
  return (
    <CharacterAnimationContext.Provider
      value={{
        animations,
        setAnimations,
        animationIndex,
        setAnimationIndex,
      }}
    >
      {children}
    </CharacterAnimationContext.Provider>
  );
};

export const useCharacterAnimations = () =>
  useContext(CharacterAnimationContext);
