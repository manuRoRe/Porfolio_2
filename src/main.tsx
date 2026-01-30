import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Porfolio } from "./Porfolio";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Porfolio />
  </StrictMode>,
);
