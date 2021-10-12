import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductStart, setProduct } from '../../redux/Products/products.actions'
import { addToCart } from '../../redux/Cart/cart.actions'
import { TopContainer, ProductTitle, VideoAndPurchaseFrame, VideoGoastFrame, VideoFrame, PurchaseFrame, ProductPrice, AddToBasket } from './ProductDetailsComponents'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import Navbar from '../../components/Navbar'

const mapState = state => ({
    product: state.productsData.product
})

const ProductDetails = ({}) => {
    const dispatch = useDispatch()
    const { productID } = useParams()
    const { product } = useSelector(mapState)

    const { 
        name,
        price
    } = product

    useEffect(() => {
        dispatch(
            fetchProductStart(productID)
        )

        return () => {
            dispatch(
                setProduct([])
            )
        }
    }, [])

    const handleAddToCart = (product) => {
        if (!product) return

        dispatch (
            addToCart(product)
        )
    }

    return (
        <>
            <Navbar />
            <TopContainer>
                <ProductTitle>
                    {name}
                </ProductTitle>
                <VideoAndPurchaseFrame>
                    <VideoGoastFrame>
                        <VideoFrame>
                            <VideoPlayer />
                        </VideoFrame>
                    </VideoGoastFrame>
                    <PurchaseFrame>
                        <ProductPrice>{price}$</ProductPrice>
                        <AddToBasket onClick={() => handleAddToCart(product)}>Add to Basket</AddToBasket>
                    </PurchaseFrame>
                    {/*
                        //Adds product description with RichText support
                        <span
                            dangerouslySetInnerHTML={{_html: description}}
                        >
                    */}
                </VideoAndPurchaseFrame>
            </TopContainer>
        </>
    )
}

export default ProductDetails
