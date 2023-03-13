import React, { createContext, useContext, useState } from "react";
import { Color } from "three";

export const CAMERA_MODE = ["FREE", "HEAD", "TOP", "BOTTOM"];
export const COLOR_CUSTOMIZATION = {
  GLASSES: "#db504a",
  LIPS: "#f08080",
  SKIN: "#ffd7ba",
  HAIR: "#000000",
  SHIRT: "#ffe074",
  PANT: "#2b50aa",
  STRINGS: "#ffffff",
  SOLE: "#ffffff",
  SHOE: "#d00000",
};

export type Body = {
  GLASSES: string;
  LIPS: string;
  SKIN: string;
  HAIR: string;
  SHIRT: string;
  PANT: string;
  STRINGS: string;
  SOLE: string;
  SHOE: string;
};

const CharacterCustomizationContext = createContext({});

export const CharacterCustomizationProvider = ({ children }: any) => {
  const [cameraMode, setCameraMode] = useState(CAMERA_MODE[0]);
  const [colors, setColors] = useState(COLOR_CUSTOMIZATION);
  const handelColorChange = (key: Body, value: Color) => {
    setColors((prev) => {
      return { ...prev, [`${key}`]: value };
    });
  };
  return (
    <CharacterCustomizationContext.Provider
      value={{
        cameraMode,
        setCameraMode,
        colors,
        handelColorChange,
        reset: setColors,
      }}
    >
      {children}
    </CharacterCustomizationContext.Provider>
  );
};

export const useCharacterCustomization = () =>
  useContext(CharacterCustomizationContext);
