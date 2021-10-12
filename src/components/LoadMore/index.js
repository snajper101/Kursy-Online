import React from 'react'
import { LoadMoreContainer, LoadMoreButton } from './LoadMoreComponents'

const LoadMore = ({
    oonLoadMoreEvent = () => {},
}) => {
    return (
        <LoadMoreContainer>
            <LoadMoreButton>Load More</LoadMoreButton>
        </LoadMoreContainer>
    )
}

export default LoadMore
