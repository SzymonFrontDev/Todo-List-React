import styled from "styled-components";

export const Content = styled.section`
    margin: 10px 0;
    padding: 10px;
    border: 1px solid rgb(209, 209, 209);
    background-color: white;
`;

export const Item = styled.header`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;
    grid-gap: 20xp;
    padding-bottom: 5px;
    border-bottom: 1px solid rgb(209, 209, 209);

    @media (max-width: 767px){ 
        grid-template-columns: 1fr;
    };
`;