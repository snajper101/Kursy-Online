import cartTypes from "./cart.types";

export const addToCart = (nextCartItem) => ({
    type: cartTypes.ADD_TO_CART,
    payload: nextCartItem
}) 

export const removeCartItem = (cartItem) => ({
    type: cartTypes.REMOVE_CART_ITEM,
    payload: cartItem
})

export const clearCart = () => ({
    type: cartTypes.CLEAR_CART,
})