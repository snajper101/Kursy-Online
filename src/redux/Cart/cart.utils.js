export const exisitingCartItem = ({
    previousCartItems,
    nextCartItem,
}) => {
    return previousCartItems.find(
        cartItem => cartItem.documentID === nextCartItem.documentID
    )
}

export const handleAddToCart = ({
    previousCartItems,
    nextCartItem
}) => {
    const quantityIncrement = 1
    const cartItemExists = exisitingCartItem({ previousCartItems, nextCartItem })

    if (cartItemExists) return {
        ...previousCartItems
    } 

    return [
        ...previousCartItems,
        {
            ...nextCartItem,
            quantity: quantityIncrement
        }
    ]
}

export const handleRemoveCartItem = ({
    previousCartItems,
    itemToRemove
}) => {
    return previousCartItems.filter(item => item.documentID !== itemToRemove.documentID)
}