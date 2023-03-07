import React from "react";
import ProductCard from "../../components/features/ProductCard/ProductCard"

function Home() {
    return (
        <div>
            <ProductCard 
                name="Produto"
                price="R$45,00"
            />
            <h1>Teste</h1>
        </div>
    )
}

export default Home;