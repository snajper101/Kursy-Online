import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCartItem } from '../../redux/Cart/cart.actions'

//Styled Components
import { CartItemRoot, ItemThumbnail, ItemDetails, ItemTitle, ItemAuthor, DeleteItem, CredentialSide } from './CartItemComponents'

const CartItem = (cartItem) => {
    const dispatch = useDispatch()
    const {
        name,
        price,
        documentID
    } = cartItem

    const handleRemoveCartItem = (documentID) => {
        dispatch(
            removeCartItem({
                documentID
            })
        )
    }

    return (
        <>
            <CartItemRoot>
                <ItemThumbnail></ItemThumbnail>
                <ItemDetails>
                    <CredentialSide>
                        <ItemTitle>
                            Irure mollit labore est esse culpa qui non et dolor ex occaecat cupidatat.
                        </ItemTitle>
                        <ItemAuthor>
                            Maciej "Kapczyk" Kasprzyk
                        </ItemAuthor>
                    </CredentialSide>
                    <DeleteItem onClick={() => handleRemoveCartItem(documentID)}>Remove</DeleteItem>
                </ItemDetails>
            </CartItemRoot>
        </>
    )
}

export default CartItem
