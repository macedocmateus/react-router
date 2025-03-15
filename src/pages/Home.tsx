import { useNavigate } from "react-router";

export function Home() {
    const navigate = useNavigate();

    function productsOpen() {
        navigate("/products");
    }

    return (
        <div>
            <h1>Página Home</h1>

            <nav>
                <a href="/products"> Produtos</a>

                {/* Criando uma categoria */}
                <a href="/products?category=tvs&price=70"> Ver categoria</a>

                <button type="button" onClick={productsOpen}>
                    Ver produtos
                </button>
            </nav>
        </div>
    );
}
