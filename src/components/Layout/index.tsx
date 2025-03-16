import "./styles.css";

import { Outlet } from "react-router";

// O outlet deixa layout como o header e o footer fixos em todas as rotas que está no grupo

export function Layout() {
    return (
        <div>
            <header className="user">
                <p>Olá Mateus , seja bem vindo</p>
            </header>

            <Outlet></Outlet>

            <footer>
                <span>Todos os direitos reservados</span>
            </footer>
        </div>
    );
}
