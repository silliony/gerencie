import React from "react";
import { HiMenu, HiShoppingCart } from "react-icons/hi"
import { Container, Title } from "./Styles"

function NavBar () {
    return(
        <Container>
            <HiMenu className="menu-icon"/>
            <Title>LOJINHA</Title>
            <HiShoppingCart className="shop-icon"/>
        </Container>
    );
}

export default NavBar;