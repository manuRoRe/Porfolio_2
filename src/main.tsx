import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Porfolio } from "./Porfolio";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Porfolio />
    </ThemeProvider>
  </StrictMode>,
);
