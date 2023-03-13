import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CharacterAnimationProvider } from "./context/CharacterAnimationContext";
import { CharacterCustomizationProvider } from "./context/CharacterCustomizationContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CharacterCustomizationProvider>
      <CharacterAnimationProvider>
        <App />
      </CharacterAnimationProvider>
    </CharacterCustomizationProvider>
  </React.StrictMode>
);
