import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Container, Title, IntContainer } from "./Styles";

function Category ({id, title , json}) {

    const produtos = json.filter((e) => {return e.category === title}).map((e) => {
        return <ProductCard key={e.product_id} imgLink={e.imgLink} name={e.name} price={e.price} id={e.product_id} s/>;
    });

    return (
        <Container id={id}>
            <Title>{title}</Title>
            <IntContainer>
                {produtos}
            </IntContainer>
        </Container>
    );
}

export default Category;