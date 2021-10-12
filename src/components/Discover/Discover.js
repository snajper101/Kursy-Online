import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import { fetchProductsStart } from "../../redux/Products/products.actions"
import Navbar from '../../components/Navbar'
import Product from './Product/Product'
import LoadMore from '../LoadMore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

//Components
import { SearchBar, SearchInput, Sidebar, ProductsSide, ProductsGrid, ProductContainer } from './DiscoverComponents'

const mapState = ({productsData}) => ({
    products: productsData.products
})

const Discover = props => {
    const dispatch = useDispatch()
    const { products } = useSelector(mapState)
    const { data, queryDoc, isLastPage } = products
    const isSmallSize = useMediaQuery({ query: `(max-width: 900px)` })

    useEffect(() => {
        dispatch(
            fetchProductsStart()
        )
    }, [])

    const handleLoadMore = () => {
        dispatch(
            fetchProductsStart({ 
                startAfterDoc: queryDoc, 
                persistProducts: data,
            })
        )
    }

    const configLoadMore = {
        onLoadMoreEvent: handleLoadMore,
    }

    return (
        <>
            <Navbar />
            <Sidebar>
                <SearchBar>
                    <FontAwesomeIcon icon={faSearch}/>
                    <SearchInput placeholder="Search"></SearchInput>
                </SearchBar>
            </Sidebar>
            <ProductsSide>
                {isSmallSize &&
                    <SearchBar>
                        <FontAwesomeIcon icon={faSearch}/>
                        <SearchInput placeholder="Search"></SearchInput>
                    </SearchBar>
                }
                <ProductsGrid>
                    { data && data.map((product, index) => {
                        return (
                            <ProductContainer>
                                <Product key={index} {...product} />
                            </ProductContainer>
                        )
                    })
                    }
                </ProductsGrid>
                {!isLastPage && (
                    <LoadMore {...configLoadMore} ></LoadMore>
                )}
            </ProductsSide>
        </>
    )
}

export default Discover
