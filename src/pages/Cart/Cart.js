import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { selectCartItems, selectCartTotal } from '../../redux/Cart/cart.selector'
import { createStructuredSelector } from "reselect"

//Styled Components
import { CartRoot, CartError,CartTitle, CartItemsList, TotalPrice, ButtonSection, CartButton } from './CartComponents'

//Components
import Navbar from '../../components/Navbar'
import CartItem from '../../components/CartItem/CartItem'

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})


const Cart = () => {
  const { cartItems, total }  = useSelector(mapState)   
  const history = useHistory()

  const handleCheckout = () => {
    history.push("/checkout")
  }

  return (
    <>
      <Navbar />  
      <CartRoot>
        { cartItems.length > 0 &&
          <>
            <CartTitle>Cart</CartTitle>
            <CartItemsList>
            {
              cartItems.map((item, index) => {
                return <CartItem key={index} {...item} />
              })
            }
            </CartItemsList>
            <TotalPrice>
              Total: {total}$
            </TotalPrice>
            <ButtonSection>
              <CartButton onClick={() => handleCheckout()}>Checkout</CartButton>
            </ButtonSection> 
          </>
        }
        { cartItems.length === 0 &&
          <>
            <CartTitle>
              Cart
            </CartTitle>
            <CartError>
              You have no items in your cart.
            </CartError>
          </>
        }
      </CartRoot>
    </>
  )
}

export default Cart
