import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    padding-top: 10px;
    padding-bottom: 10px;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
    
    padding-left: 20px
`;

export const IntContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;

    padding: 0 10px 0 10px;

    overflow-x: scroll;
    ::-webkit-scrollbar {
        display:none;
    }
`;