import styled from "styled-components";

export const LoadMoreContainer = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoadMoreButton = styled.div`
    width: 70%;
    margin: 10px 20px 10px 0;
    height: 35px;
    max-width: 300px;
    min-width: 150px;
    border-radius: 17.5px;
    font-family: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #000000;
    font-size: 24px;
    font-weight: 600;
    background: #e4e6eb;
    cursor: pointer;
    transition: filter 300ms;

    &:hover{
        filter: brightness(0.8)
    }

`