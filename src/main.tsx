import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.sass";
import App from "./App.tsx";
import { PrimeReactProvider } from "primereact/api";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </StrictMode>
);
