import React from 'react'
import { Link } from 'react-router-dom'
import { ProductContainer, ProductName, ProductImage, ProductDescription, ProductPrice, ProductButton, ImageContainer, ProductDescriptionContainer, ProductLengthInfo } from './ProductComponent'

const Product = (product)  =>{
    const { 
        documentID,
        name, 
        image, 
        description, 
        price 
    } = product

    if ( !documentID || !name || typeof price === "undefined" ) return null

    return (
        <ProductContainer to={`/product/${documentID}`}>
            <ImageContainer>
                <ProductImage>{image}</ProductImage>
            </ImageContainer>
            <ProductDescriptionContainer>
                <ProductName>{name}</ProductName>
                <ProductDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus elit vel eros viverra, vel tempor magna lobortis. Phasellus auctor, massa sed congue venenatis, ipsum felis euismod ex, nec convallis enim tellus non erat. Sed eget condimentum purus. Aenean vel posuere erat. Nulla lobortis enim quis arcu tristique consectetur.</ProductDescription>
                <ProductLengthInfo>21 godzin 30 filmow</ProductLengthInfo>
                <ProductPrice>{price}$</ProductPrice>
            </ProductDescriptionContainer>
        </ProductContainer>
    )
}

export default Product