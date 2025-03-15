import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import "./main.css";
import { AppRoutes } from "./routes/AppRoutes";

/* O BrowserRouter compartilha todas as rotas com a aplicação */
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <AppRoutes></AppRoutes>
        </BrowserRouter>
    </StrictMode>,
);
