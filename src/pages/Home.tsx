export function Home() {
    return (
        <div>
            <h1>Página Home</h1>

            <nav>
                <a href="/products"> Ver produtos</a>

                {/* Criando uma categoria */}
                <a href="/products?category=tvs&price=70"> Ver categoria</a>
            </nav>
        </div>
    );
}
