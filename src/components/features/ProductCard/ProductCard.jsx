import { Container, Img, Title, Price } from './Styles.js';


function ProductCard( {
    imgLink,
    name,
    price,
    id
}) {

    return (
        <Container className='container'>
            <div className='img-size'>
                <Img src={imgLink}/>
            </div>
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