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

    .menu-icon {
        font-size: 50px;
    }

    .shop-icon {
        font-size: 40px;
    }
`;

export const Title = styled.h1`
    font-size: 36px;
    font-weight: 600;
`;