import React from "react";
import { NavBar } from "../../components/common";
import { Category } from "../../components/features";
import { Catalog, Anchors, Anchor } from "./Styles";

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
            "category": "Bebidas",
            "product_id": "23312"
        },
        {
            "imgLink": "https://images-na.ssl-images-amazon.com/images/I/41njfODm63L._AC_SX184_.jpg",
            "name": "Shake de Proteína",
            "price": "R$5,60",
            "category": "Bebidas",
            "product_id": "23312"
        }
    ];

    const categories = [...new Set(json.map(item => item.category))];
    const element = categories.map((e) => {return <Category id={e} title={e} json={json}/>});
    const anchor = categories.map((e) => {return <Anchor href={"#" + e}>{e}</Anchor>});

    return (
        <div>
            <div style={{position:"sticky", top: 0}}>
                <NavBar />
                <Anchors>{anchor}</Anchors>
            </div>
            <Catalog>{element}</Catalog>
        </div>
    );
}

export default Home;