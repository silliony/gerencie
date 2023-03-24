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

    .align-middle {
        display: flex;
        height: 100%;
        align-items: center;
    }
`;

export const Img = styled.img`
    height: 100px;
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

export const Button1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-weight: 600;
    font-size: 16px;

    width: 100px;
    height: 25px;
    background: #FF6363;
    border-radius: 5px;
    
    :hover {
        cursor: pointer;
        background: #FF3F3F;
    }
`;

export const Button2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 5px;

    font-weight: 600;
    font-size: 16px;

    width: 100px;
    height: 25px;
    background: #FF6363;
    border-radius: 5px;

    .svg {
        height: 100%;
        width: 25px;
        border-radius: 5px;
        background: #C53D3D;
        padding: 3px;

        :hover {
            cursor: pointer;
            background: #C51111;
        }
    }
`;