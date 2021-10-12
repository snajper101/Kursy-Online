import styled from "styled-components";

export const TopContainer = styled.div`
    margin: 0 16rem 0 16rem;
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

export const ProductTitle = styled.div`
    font-family: inherit;
    font-size: 2rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 600;
`
export const VideoAndPurchaseFrame = styled.div`
    display: flex;
    flex-direction: row;
`

export const VideoGoastFrame = styled.div`
    width: 60%;
`

export const VideoFrame = styled.div`
    padding-bottom: 56.25%;
    position: relative;
`

export const PurchaseFrame = styled.div`
    flex: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem 1rem 1rem 2.5rem;
`

export const ProductPrice = styled.div`
    height: 2.5rem;
    font-weight: 600;
    font-size: 2rem;
    color: black;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
`

export const AddToBasket = styled.div`
    height: 3rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ff3d3d;
    color: white;
    width: 100%;
    cursor: pointer;

    &:hover {
        background: #ff6d6d;
    }
`