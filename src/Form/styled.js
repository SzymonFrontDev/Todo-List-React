import styled from "styled-components";

export const Button = styled.button`
    background-color: hsl(180, 100%, 25%);
    color: white;
    border: none;
    align-self: center;
    padding: 11px;
    transition: 0.2s;

     &:hover {
    background-color: rgb(2, 150, 150);
    transform: scale(1.1);
     }

     &:active {
    background-color: rgb(2, 173, 173);
     }
`;

export const Content = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 15px;
    padding: 15px;
    padding-top: 25px;
    padding-left: 0;

    @media(max-width:767px) {
        grid-template-columns: 1fr;
    };

`;

export const Item = styled.input`
    padding: 10px;
    border: 1px solid rgb(209, 209, 209);
`;