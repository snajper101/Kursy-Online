import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
const stripePromise = loadStripe("pk_test_51JkCwyB2i1AudsHyQd5oumePlkvylD3CieA3bnkFPOA1IYkbeIDHTFtv0cfltkhf0rbjEM68Zknvgx3bkPdbakpV004b7MeR5C")


const StripeWrapper = ({children}) => {
    return (
        <Elements stripe={stripePromise}>
            {children}
        </Elements>
    )
}

export default StripeWrapper
