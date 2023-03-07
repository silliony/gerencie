import { useState } from 'react';
import { Container, Img, Title, Price, Button1, Button2 } from './Styles.js';
import { HiPlus, HiMinus } from 'react-icons/hi';

function ProductCard( {
    imgLink,
    name,
    price,
}) {
    const [prod_amount, setProductAmount] = useState(0);

    function increaseProdAmount() {
        setProductAmount(prod_amount + 1);
    }
    
    function decreaseProdAmount() {
        setProductAmount(prod_amount - 1);
    }


    const ButtonAdd = <Button1 onClick={increaseProdAmount}>ADICIONAR</Button1>;

    const Button = <Button2>
        <HiMinus className='svg' onClick={decreaseProdAmount}/>
        <p>{prod_amount}</p>
        <HiPlus className='svg' onClick={increaseProdAmount}/>
        </Button2>

    return (
        <Container className='container'>
            <Img src={imgLink}/>
            <Container className='text-container'>
                <Title>{name}</Title>
                <Price>{price}</Price>
            </Container>
            {prod_amount > 0 ? Button : ButtonAdd}
        </Container>
    );
}

export default ProductCard;