import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    gap: 5px;

    background: #FFFFFF;

    &.container {
        gap: 10px;

        min-width: 150px;
        max-width: 150px;
        padding: 10px 5px;
        border-radius: 5px;
        border: 2px solid #7AB7FF;
    }
    
    &.text-container{
        height: 68px;
        width: 100%;
        justify-content: space-between;
        align-content: center;
    }

    .align-middle {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
    }

    .img-size {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        width: 100%;
    }
`;

export const Img = styled.img`
    max-height: 100px;
    max-width: 80%;
`;

export const Title = styled.p`
    font-size: 20px;
    padding: 0 5%;
    text-align: center;
    align-self: self;
`;

export const Price = styled.p`
    font-size: 20px;
    font-weight: bold;
`;