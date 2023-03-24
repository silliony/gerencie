import { React, useState } from "react";
import { HiUserCircle, HiShoppingCart } from "react-icons/hi"
import { Container, Title, Inner, Cart } from "./Styles"
import selectedProducts from "../../../data/selectedProducts.json";
import { useCartStore } from "../../../context/globalContext";

function NavBar () {

    const CartQuant = () => {
        const value = useCartStore(state => state.count);
        return <Cart>{value}</Cart>;
    }

    return(
        <div>
            <Container>
                <Title>LOJINHA</Title>
                <Inner>
                    <div style={{position: "relative"}}>
                        <HiShoppingCart className="shop-icon"/>
                        {CartQuant()}
                    </div>
                    <HiUserCircle className="login-icon"/>
                </Inner>
            </Container>
        </div>
    );
}

export default NavBar;