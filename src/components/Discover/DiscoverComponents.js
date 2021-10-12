import styled from "styled-components";

export const Sidebar = styled.div`
    width: 360px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: center;
    position: fixed;

    @media screen and (max-width: 900px) {
        display: none;
    }
`

export const ProductsSide = styled.div`
    width: calc( 100% - 360px );
    display: grid;
    left: 360px;
    position: relative;

    @media screen and (max-width: 900px) {
        width: 100%;
        left: 0px;
    }
`

export const SearchBar = styled.div`
    height: 36px;
    margin: 12px 16px 12px 16px;
    background: #fff;
    color: white;
    font-family: "Segoe UI";
    background-color: #EBEDF0;
    cursor: text;
    color: #b4b4b4;
    padding: 8px 18px 8px 18px;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between; 

    @media screen and (max-width: 900px) {
        margin: 12px 32px 12px 32px;
    }
`
export const SearchInput = styled.input`
    margin: 0 0.5rem 0 0.5rem;
    width: 100%;
    border: none;
    outline: none;
    font-size: 18px;
    background: none; 
    display: flex;
    align-items: center;  
    justify-content: center; 

    &::placeholder {
        color: #979797;
    }
`

export const ProductsGrid = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`

export const ProductContainer = styled.div`
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    width: 100%;
    height: calc( 140px + 3rem);
    border-top: 1px solid gray;

    &:first-child {
        border-top: 0px solid gray;
    }
`
