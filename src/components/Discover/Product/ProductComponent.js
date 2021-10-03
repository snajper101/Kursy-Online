import styled from 'styled-components'
import Discover from '../Discover'

export const ProductContainer = styled.div `
    font-family: "Segoe UI";   
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 350px;
    height: 400px;
    border-radius: 16px;
    background: #fff;
    cursor: pointer;
    margin: 2rem;
    flex-direction: column;
    padding: 1rem;
`

export const ProductName = styled.div`
    font-family: inherit;
    font-size: 24px;
    overflow-x: hidden;
    white-space: nowrap;
    font-weight: 500;
    color: black;
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`

export const ProductImage = styled.img`
    background: rgb(230, 230, 230);
    height: 70%;
    width: 100%;
`

export const ProductDescription = styled.div`
    margin: 5px 0 0 0;
    font-family: inherit;
    color: gray;
    font-weight: 300;
    overflow: hidden;
    white-space: nowrap;
    font-size: 16px;
    width: 100%;
    height: 10%;
    line-height: 0.5;
    -webkit-line-clamp: 4;
`

export const ProductPrice = styled.div`
    font-family: inherit;
    font-size: 24px;
    overflow-x: hidden;
    white-space: nowrap;
    font-weight: 600;
    color: black;
    width: 100%;
    height: 10%;
    text-align: center;
`