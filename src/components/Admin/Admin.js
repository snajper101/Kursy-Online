import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsStart } from '../../redux/Products/products.actions'
import Navbar from '../Navbar'
import { AdminButton } from './AdminComponents'

const mapState = ({productsData}) => ({
    products: productsData.products
})

const Admin = props => {
    const { products } = useSelector(mapState)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(
            fetchProductsStart()
        )
    }, [])

    return (
        <>
            <Navbar />
            <h1>
                My admin
            </h1>
            <AdminButton>Add product</AdminButton>
        </>
    )
}

export default Admin
