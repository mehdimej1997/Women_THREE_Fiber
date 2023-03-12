import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CharacterAnimationProvider } from "./context/CharacterAnimationContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CharacterAnimationProvider>
      <App />
    </CharacterAnimationProvider>
  </React.StrictMode>
);
