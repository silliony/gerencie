import { React, useState } from "react";
import { HiUserCircle, HiShoppingCart } from "react-icons/hi"
import { Container, Title, Inner, Cart } from "./Styles"
import selectedProducts from "../../../data/selectedProducts.json";

function NavBar () {

    return(
        <div>
            <Container>
                <Title>LOJINHA</Title>
                <Inner>
                    <div style={{position: "relative"}}>
                        <HiShoppingCart className="shop-icon"/>
                        <Cart>2</Cart>
                    </div>
                    <HiUserCircle className="login-icon"/>
                </Inner>
            </Container>
        </div>
    );
}

export default NavBar;