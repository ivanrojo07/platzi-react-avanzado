import styled from "styled-components";

const Button = styled.button`
    background: #90DFDA;
    border-radius: 3px;
    color: black;
    height: 32px;
    display: block;
    width: 100%;
    text-align: center;
    &:disabled{
        opacity: 0.5;
    }
`

export {Button}