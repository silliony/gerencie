import React from "react";
import ProductCard from "../../components/features/ProductCard/ProductCard"
import Bis from "../../assets/Bis.png"

function Home() {
    return (
        <div>
            <ProductCard 
                imgLink={Bis}
                name="Produto"
                price="R$45,00"
            />
            <h1>Teste</h1>
        </div>
    );
}

export default Home;