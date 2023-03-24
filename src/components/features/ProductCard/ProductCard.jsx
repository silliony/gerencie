import { useState } from 'react';
import { Container, Img, Title, Price, Button1, Button2 } from './Styles.js';
import { HiPlus, HiMinus } from 'react-icons/hi';
import { useCartStore } from '../../../context/globalContext.jsx';

function ProductCard( {
    imgLink,
    name,
    price,
    id
}) {

    return (
        <Container className='container'>
            <Img src={imgLink}/>
            <Container className='text-container'>
                <div className='align-middle'>
                    <Title>{name}</Title>
                </div>
                <Price>{"R$" + price}</Price>
            </Container>
        </Container>
    );
}

export default ProductCard;