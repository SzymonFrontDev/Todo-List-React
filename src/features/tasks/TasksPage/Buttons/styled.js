import styled from "styled-components";

export const Button = styled.button`
    background: none;
    border: none;
    color: hsl(180, 100%, 25%);
    font-size: 18px;
    margin: 0 5px;
    transition: 0.5s;
    align-items: center;
    justify-content: center;

    @media (max-width: 767px) {
        flex-basis: 100%;
        margin: 10px;
    };

    &:hover{
        color: hsl(180, 80%, 35%);
    };

    &:active{
        color: hsl(180, 60%, 45%);
    };
 
    &:disabled{
        color: hsl(0, 0%, 80%);
    }
     
`;

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;