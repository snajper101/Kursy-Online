import React from 'react'
import Navbar from '../../components/Navbar'
import Product from './Product/Product'

export default function Discover() {
    return (
        <>
            <Navbar />
            <div className="d-flex align-tems-center">
                <Product id="123232133" title="Test" price={29.99}/>
            </div>
        </>
    )
}
