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
    const [prod_amount, setItemCount] = useState(0);
    const increaseCount = useCartStore(state => state.increaseCount);
    const decreaseQuant = useCartStore(state => state.decreaseQuant);
    const addToCart = useCartStore(state => state.addProduct);
    const updateProduct = useCartStore(state => state.updateProduct);
    const removeFromCart = useCartStore(state => state.removeProduct);
    const list = useCartStore(state => state.cart);
    
    function handleInc() {
        if (prod_amount === 0) {
            setItemCount(prod_amount + 1);
            increaseCount();
            addToCart({ id: id, price: price, quantity: prod_amount + 1 });
        } else {
            setItemCount(prod_amount + 1);
            increaseCount();
            updateProduct({ id: id, quantity: prod_amount + 1});
        }
        console.log(list);
    }

    function handleDec() {
        if (prod_amount > 0) {
            setItemCount(prod_amount - 1);
            decreaseQuant();
            removeFromCart(id);
        }
        console.log(list);
    }

    const DefaultButton = <Button1 onClick={handleInc} >ADICIONAR</Button1>;

    const DynamicButton = <Button2>
            <HiMinus className='svg' onClick={handleDec}/>
            <p>{prod_amount}</p>
            <HiPlus className='svg' onClick={handleInc}/>
        </Button2>;

    return (
        <Container className='container'>
            <Img src={imgLink}/>
            <Container className='text-container'>
                <Title>{name}</Title>
                <Price>{"R$" + price}</Price>
            </Container>
            {prod_amount > 0 ? DynamicButton : DefaultButton}
        </Container>
    );
}

export default ProductCard;