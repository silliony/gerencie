import React from "react";
import { Category } from "../../components/features";

function Home() {

    const json = [
        {
            "imgLink": "https://images-na.ssl-images-amazon.com/images/I/415o7mAQO6L._AC_SX184_.jpg",
            "name": "Cafezinho",
            "price": "R$1,50",
            "category": "Doces",
            "product_id": "21323"
        },
        {
            "imgLink": "https://images-na.ssl-images-amazon.com/images/I/41njfODm63L._AC_SX184_.jpg",
            "name": "Shake de Proteína",
            "price": "R$5,60",
            "category": "Bebidas",
            "product_id": "23312"
        },
        {
            "imgLink": "https://images-na.ssl-images-amazon.com/images/I/41njfODm63L._AC_SX184_.jpg",
            "name": "Shake de Proteína",
            "price": "R$5,60",
            "category": "Doces",
            "product_id": "23312"
        },
        {
            "imgLink": "https://images-na.ssl-images-amazon.com/images/I/41njfODm63L._AC_SX184_.jpg",
            "name": "Shake de Proteína",
            "price": "R$5,60",
            "category": "Doces",
            "product_id": "23312"
        }
    ];

    return (
        <div>
            <Category title="Doces" json={json}/>
        </div>
    );
}

export default Home;