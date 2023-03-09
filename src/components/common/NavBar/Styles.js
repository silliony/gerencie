import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    height: 50px;

    padding: 0 10px;

    background: #406693;
    color: white;

    .login-icon {
        font-size: 40px;
    }

    .shop-icon {
        font-size: 35px;
        z-index: 1;
    }
`;

export const Title = styled.h1`
    font-size: 36px;
    font-weight: 600;
`;

export const Menu = styled.div`
`;

export const Inner = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    position: relative;
`;

export const Cart = styled.p`
    position: absolute;
    bottom: 3px;
    right: 0px;
    z-index: 3;
    
    width: 17px;
    height: 17px;
    background: #dd0000;
    border-radius: 100%;
    
    font-size: 15px;
    font-weight: 900;
    text-align: center;
`;