import React from 'react'
import Checkout from '../../components/Checkout/CheckoutComponent'
import StripeWrapper from '../../components/StripeWrapper/StripeWrapper'

const Payment = () => {
    return (
        <StripeWrapper>
            <Checkout />
        </StripeWrapper>
    )
}

export default Payment
