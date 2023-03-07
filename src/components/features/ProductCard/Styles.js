import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    background: #7AB7FF;

    &.container {
        width: 180px;
        gap: 10px;
        padding: 10px 5px 10px 5px;
        border-radius: 5px;
    }
    
    &.text-container{
        height: 68px;
        justify-content: space-between;
    }
`;

export const Img = styled.img`
`;

export const Title = styled.p`
    font-size: 20px;
    width: 160px;
    text-align: center;

`;

export const Price = styled.p`
    font-size: 20px;
    font-weight: bold;
`;

export const Button1 = styled.button`
    padding: 5px 10px 5px 10px;
    background: #FF6363;
`;