import styled from "styled-components";

const Form = styled.form`
    padding: 16px 0;

`

const Input = styled.input`
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 8px;
    padding: 8px 4px;
    display: block;
    width: 100%;
    text-align: left;
    &:disabled{
        opacity: 1;
    }
`

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

const Title = styled.h2`
    font-size: 16px;
    font-weight: 500;
    padding: 8px 0;
`

const Error = styled.span`
    font-size: 14px;
    color: red;
`

export {Form, Input, Button, Title, Error}