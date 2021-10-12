import styled from 'styled-components'
import Discover from '../Discover'
import { Link } from 'react-router-dom'

export const ProductContainer = styled(Link)`
    font-family: "Segoe UI";   
    display: flex;
    align-items: start;
    justify-content: start;
    width: 100%;
    height: 100%;   
    cursor: pointer;
    flex-direction: row;
    padding: 0 1rem 0 1rem;
    cursor: pointer;
    text-decoration: none;
`

export const ProductDescriptionContainer = styled.div`
    width: calc( 100% - 218.75px);
    display: flex;
    flex-direction: column;
`

export const ProductName = styled.div`
    font-family: inherit;
    font-size: 24px;
    font-weight: 500;
    color: black;
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    padding: 0 15px 0px 15px;
    text-overflow: ellipsis;
`

export const ImageContainer = styled.div`
    height: 140px;
    width: 218.75px; //16-9 aspect ratio
    overflow: hidden;
`

export const ProductImage = styled.img`
    background: rgb(230, 230, 230);
    height: 100%;
    width: 100%;
`


export const ProductDescription = styled.div`
    padding: 0 15px 0 15px;
    font-family: inherit;
    color: gray;
    font-weight: 300;
    font-size: 16px;
    width: 100%;
    height: auto;
    max-height: 70px;
    text-overflow: ellipsis;
    display: block;
    -webkit-line-clamp: 3;
    overflow: hidden;
    -webkit-box-orient: vertical;

    @media screen and (max-width: 500px) {
        display: none;
    }
`

export const ProductPrice = styled.div`
    padding: 0 15px 0 15px;
    font-family: inherit;
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
    color: black;
    width: 100%;
    line-height: 25px;
    height: 25px;
    text-align: left;
`

export const ProductButton = styled.div`
    width: 100%;
    height: 10%;
    color: black;
    font-size: 1.5rem;
`

export const ProductLengthInfo = styled.div`
    height: 15px;
    font-size: 10px;
    font-family: inherit;
    overflow: hidden;
    text-overflow: ellipsis;
    color: gray;
    padding: 0 15px 0 15px;
`