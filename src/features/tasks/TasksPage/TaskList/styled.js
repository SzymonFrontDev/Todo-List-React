import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0;
    `;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-column-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid lightgray;

    ${({ hidden }) => hidden && css`
    display:none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
    text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    width: 30px;
    height: 30px;
    padding: 0;
    color: white;
    border: none;
    transition: background 0.5s;

    ${({ ToggleDone }) => ToggleDone && css`
    background-color: hsl(120, 100%, 25%);
    
    &:hover {
        background-color: hsl(120, 99%, 30%);
    }

    &:active {
        background-color: hsl(120, 98%, 35%);
    }
    `};
    
    ${({ remove }) => remove && css`
         background-color: hsl(348, 83%, 47%);

         &:hover {
            background-color: hsl(348, 80%, 57%);
         }

         &:active {
            background-color: hsl(348, 89%, 67%);
         }
    `}
`;