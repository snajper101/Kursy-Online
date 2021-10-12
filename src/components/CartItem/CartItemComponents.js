import styled from "styled-components";

export const CartItemRoot = styled.div`
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
    height: 8rem;
    padding: 0.5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

export const ItemThumbnail = styled.div`
    height: 100%;
    width: 12.5rem;
    background: gray;
    border: 1px solid black;
    margin-right: 0.5rem;
`

export const ItemDetails = styled.div`
    height: 100%;
    width: calc( 100% - 12.5rem );
    display: flex;
    flex-direction: row ;
    justify-content: flex-start;
    align-items: start;
`

export const DeleteItem = styled.div`
    height: 1.5rem;
    font-style: inherit;
    font-size: 1rem;
    color: blue;
    text-decoration: underline;
    padding: 0 1rem 0 1rem;
    cursor: pointer;
    width: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
`

export const CredentialSide = styled.div`
    width: calc( 100% - 8rem );
    height: 100%;
`

export const ItemTitle = styled.div`
    font-size: 1rem;
    height: auto;
    max-height: 3rem;
    color: black;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    @media screen and (max-width: 750px) {
        max-height: 6rem;
        -webkit-line-clamp: 4;
    }
`

export const ItemAuthor = styled.div`
    height: calc( 100% - 3rem );
    font-size: 0.8rem;
    color: gray;
    font-weight: 300;
    overflow: hidden;
    text-overflow: ellipsis;

    @media screen and (max-width: 750px) {
        display: none;
    }
`