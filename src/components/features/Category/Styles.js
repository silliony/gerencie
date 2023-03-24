import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    width: 100%;

    padding: 10px 0;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
    
    width: fit-content;

    padding-left: 20px;
`;

export const IntContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;

    padding: 0 10px;

    overflow-x: scroll;
    overflow-y: none;

    ::-webkit-scrollbar {
        display: none;
    }
`;