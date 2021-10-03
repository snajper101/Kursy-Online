import React from 'react'
import { ProductContainer, ProductName, ProductImage, ProductDescription, ProductPrice } from './ProductComponent'

export default function Product( { id, title, image, description, price }) {
    return (
        <ProductContainer>
            <ProductName>{title}</ProductName>
            <ProductImage>{image}</ProductImage>
            <ProductDescription>{description}</ProductDescription>
            <ProductPrice>{price}</ProductPrice>
        </ProductContainer>
    )
}
