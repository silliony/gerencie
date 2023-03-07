import { useState } from 'react';
import { Container, Img, Title, Price, Button1 } from './Styles.js';

function ProductCard( {
    imgLink,
    name,
    price,
}) {
    const [prod_amount, setProductAmount] = useState(0);

    function increaseProdAmount() {
        setProductAmount(prod_amount + 1);
    }

    return (
        <Container className='container'>
            <Img src={imgLink}/>
            <Container className='text-container'>
                <Title>{name}</Title>
                <Price>{price}</Price>
            </Container>
            <Button1 type='button' onClick={increaseProdAmount}></Button1>
        </Container>
    );
}

export default ProductCard;