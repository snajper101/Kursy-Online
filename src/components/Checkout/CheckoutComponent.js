import React, { useState, useEffect } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { apiInstance } from '../../Utils'
import { selectCartTotal, selectCartItemsCount, selectCartItems } from '../../redux/Cart/cart.selector'
import { createStructuredSelector } from 'reselect'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { saveOrderHistory } from '../../redux/Orders/orders.actions'

//Styled Components
import { 
    CheckoutRoot, 
    CheckoutTitle, 
    CheckoutSection, 
    CredentialsSide, 
    PaymentSide, 
    PaymentTitle, 
    PriceRow, 
    PriceLabel, 
    PriceValue, 
    PayButton, 
    CredentialsTitle, 
    CredentialsInput, 
    CredentialsDropdown, 
} from './CheckoutComponents'

//Components
import Navbar from '../Navbar'
import { CountryDropdown } from 'react-country-region-selector'

const initialAddressState = {
    line1: "",
    line2: "",
    city: "",
    state: "",
    postal_code: "",
    country: "",
}

const mapState = createStructuredSelector({
    total: selectCartTotal,
    itemCount: selectCartItemsCount,
    cartItems: selectCartItems
})

const Checkout = () => {
    const stripe = useStripe()
    const elements = useElements()
    const dispatch = useDispatch()
    const history = useHistory()
    const { total, itemCount, cartItems } = useSelector(mapState)
    const [billingAddress, setBillingAddress] = useState({ ...initialAddressState })
    const [nameOnCard, setNameOnCard] = useState("")
    
    useEffect(() => {
        if (itemCount < 1) {
            history.push("/dashboard")
        }
    }, [itemCount])

    const handleBilling = event => {
        const { name, value } = event.target
        setBillingAddress({
            ...billingAddress,
            [name]: value
        })
    }

    const handleFormSubmit = async event => {
        event.preventDefault()
        const cardElement = elements.getElement("card")

        if (
            !billingAddress.line1 || !billingAddress.city || !billingAddress.state || !billingAddress.postal_code || !billingAddress.country || !nameOnCard
        ) return

        apiInstance.post("/payments/create", {
            amount: total * 100, //Price needs to be in cents
            billing: {
                name: nameOnCard,
                address: {
                    ...billingAddress
                }
            }
        }).then(({ data: clientSecret }) => {
            stripe.createPaymentMethod({
                type: "card",
                card: cardElement,
                billing_details: {
                    name: nameOnCard,
                    address: {
                        ...billingAddress
                    }
                }
            }).then(({ paymentMethod }) => {
                stripe.confirmCardPayment(clientSecret, {
                    payment_method: paymentMethod.id
                })
                .then(({ paymentIntent }) => {
                    const configOrder = {
                        orderTotal: total,
                        orderItems: cartItems.map(item => {
                            const { documentID, name, price } = item
                            return {
                                documentID,
                                name,
                                price, 
                            }
                        })
                    }
                    dispatch(
                        saveOrderHistory(configOrder)
                    )
                })
            })
        })
    }

    const configCardElement = {
        iconStyle: "solid",
        style: {
            base : {
                fontSize: "16px",
                height: "20px"
            }
        },
        hidePostalCode: true
    }

    return (
        <>
            <Navbar />
            <CheckoutRoot onSubmit={handleFormSubmit}>
                <CheckoutTitle>Checkout</CheckoutTitle>
                <CheckoutSection>
                    <CredentialsSide>
                        <CredentialsTitle>Billing Address</CredentialsTitle>
                        <CredentialsInput 
                            required
                            placeholder="Name on Card" 
                            name="nameOnCard"
                            onChange={event => setNameOnCard(event.target.value)}
                            value={nameOnCard} 
                        />
                        <CredentialsInput 
                            required
                            placeholder="Line 1" 
                            name="line1"
                            onChange={event => handleBilling(event)}
                            value={billingAddress.line1} 
                        />
                        <CredentialsInput
                            placeholder="Line 2" 
                            name="line2"
                            onChange={event => handleBilling(event)}
                            value={billingAddress.line2} 
                        />
                        <CredentialsInput
                            required 
                            placeholder="City" 
                            name="city"
                            onChange={event => handleBilling(event)}
                            value={billingAddress.city} 
                        />
                        <CredentialsInput
                            required 
                            placeholder="State" 
                            name="state"
                            onChange={event => handleBilling(event)}
                            value={billingAddress.state} 
                        />
                        <CredentialsInput
                            required 
                            placeholder="Postal Code" 
                            name="postal_code"
                            onChange={event => handleBilling(event)}
                            value={billingAddress.postal_code} 
                        />
                        <CredentialsDropdown>
                            <CountryDropdown
                                required 
                                className="input"
                                onChange={val => handleBilling({
                                    target: {
                                        name: "country",
                                        value: val
                                    }
                                })}
                                value={billingAddress.country} 
                                valueType="short"
                            />
                        </CredentialsDropdown>
                        <CardElement 
                            options={configCardElement}
                        />
                    </CredentialsSide>
                    <PaymentSide>
                        <PaymentTitle>Payment</PaymentTitle>
                        <PriceRow>
                            <PriceLabel>To pay:</PriceLabel>
                            <PriceValue>{total}$</PriceValue>
                        </PriceRow>
                        <PayButton type="submit">Pay</PayButton>
                    </PaymentSide>
                </CheckoutSection>
            </CheckoutRoot>
        </>
    )
}

export default Checkout
