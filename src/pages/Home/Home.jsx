import React from "react";
import { NavBar } from "../../components/common";
import { Category } from "../../components/features";
import { Catalog, Anchors, Anchor } from "./Styles";
import products from "../../data/products.json";

function Home() {

    const categories = [...new Set(products.map(item => item.category))];
    const element = categories.map((e) => {return <Category key={"c-" + e} id={e} title={e} json={products}/>});
    const anchor = categories.map((e) => {return <Anchor key={"a-" + e} href={"#" + e}>{e}</Anchor>});

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