import styled from "styled-components";

export const CartRoot = styled.div`
    margin: 0 16rem 0 16rem;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;

    @media screen and (max-width: 1920px) {
        margin: 0 14rem 0 14rem;
    }
    @media screen and (max-width: 1600px) {
        margin: 0 10rem 0 10rem;
    }
    @media screen and (max-width: 1400px) {
        margin: 0 6rem 0 6rem;
    }
    @media screen and (max-width: 750px) {
        margin: 0 3rem 0 3rem;
    }
`

export const CartTitle = styled.div`
    font-style: inherit;
    font-size: 2.5rem;
    height: 3rem;
    color: black;
    font-weight: 600;
    margin: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CartError = styled.div`
    height: 2rem;
    font-size: 1.5rem;
    color: black;
    font-weight: 500;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2rem;
    margin-right: 2rem;
`

export const CartItemsList = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: start;
    width: 100%;
    flex-direction: column;
`

export const TotalPrice = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: black;
    font-size: 2rem;
    height: 3rem;
    margin: 1rem;
    font-weight: 450;
`

export const ButtonSection = styled.div`
    height: 2rem;
    width: 100%;
    display: flex;
    flex-direction: center;
    align-items: center;
`

export const CartButton = styled.div`
    height: 100%;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ff3d3d;
    color: white;
    width: 100%;
    max-width: 400px;
    cursor: pointer;

    &:hover {
        background: #ff6d6d;
    }
`