import styled from "styled-components"

export const CheckoutRoot = styled.form`
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

export const CheckoutTitle = styled.div`
    font-style: inherit;
    font-size: 2.5rem;
    height: 3rem;
    color: black;
    font-weight: 600;
    margin: 2rem 0 2rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CheckoutSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: row;
    height: 500px;
    width: 100%;

    @media screen and (max-width: 1000px) {
        flex-direction: column-reverse;
        align-items: center;
        flex-direction: flex-end;
    }
`

export const CredentialsSide = styled.div`
    width: 70%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
    background: white;
    margin: 0.5rem;
    margin-left: 0;
    padding: 1rem;

    @media screen and (max-width: 1000px) {
        width: 100%;
        height: 300px;
    }
`

export const PaymentSide = styled.div`
    margin: 0.5rem;
    margin-left: 1rem;
    margin-right: 0;
    width: 30%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
    background: white;
    padding: 1rem;

    @media screen and (max-width: 1000px) {
        width: 100%;
        height: 200px;
    }
`

export const PaymentTitle = styled.div`
    height: 1.5rem;
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: black;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`   

export const PriceRow = styled.div`
    height: 2rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

`

export const PriceLabel = styled.div`
    width: auto;
    font-size: 1.2rem;
    color: gray;
    font-weight: 400;
    margin-right: 5px;
`

export const PriceValue = styled.div`
    width: auto;
    font-size: 1.5rem;
    color: black;
    font-weight: 500;
`

export const PayButton = styled.button`
    height: 2.5rem;
    background: #ff3d3d;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: white;
    width: 100%;
    cursor: pointer;
    border: none;

    &:hover {
        opacity: 0.7;
    }
`

export const CredentialsTitle = styled.div`
    height: 1.5rem;
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: black;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const CredentialsInput = styled.input`
    width: 100%;
    height: 2.5rem;
    font-size: 1rem;
    display: flex;
    padding-left: 5px;
    border: 1px solid gray;
    outline: none;
    font-weight: 400;
    margin-bottom: 1rem;
`

export const CredentialsDropdown = styled.div`
    .input {
        width: 100%;
        height: 2.5rem;
        font-size: 1rem;
        display: flex;
        padding-left: 5px;
        border: 1px solid gray;
        outline: none;
        font-weight: 400;
        margin-bottom: 1rem;
    }
`