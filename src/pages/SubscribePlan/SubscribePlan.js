import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPlanStart } from '../../redux/Plans/plans.actions'
import { useElements } from '@stripe/react-stripe-js'

//Styled Components
import {
    RootContainer,
    NavigationSection,
    NavigationElement,
    SelectionTitle,
    PlanDetails,
    PlanPrice,
    PlanPriceInfo,
    PlanInfoContainer,
    PlanInfo,
    BillingAddressWrapper,
    CredentialsInput,
    CredentialsDropdown,
    PaymentOptionsWrapper,
    PaymentTypeButtonContainer,
    PaymentTypeName,
    PaymentTypeLogo,
    PaymentTypeSvg,
    PaymentApplePay,
    PaymentPrzelewy24Pay,
    CardWrapper,
    FinishPaymentWrapper,
    TaxesInfoWrapper,
    TaxesInfo,
    TaxesInfoValue,
    SumInfoWrapper,
    SumInfo,
    SumInfoValue,
    PayButton,
    PayButtonSvg
} from './SubscribePlanComponents'

//Components
import ClearNavbar from '../../components/ClearNavbar/ClearNavbar'
import StripeWrapper from '../../components/StripeWrapper/StripeWrapper'
import { CountryDropdown } from 'react-country-region-selector'
import { CardElement } from '@stripe/react-stripe-js'

const logos = {
    paypal: "https://firebasestorage.googleapis.com/v0/b/kursy-online-e1f8f.appspot.com/o/StaticResources%2Fpp-logo-100px.png?alt=media&token=a44203aa-4ec5-49e5-8e83-47564bf70c08",
    przelewy24: "https://firebasestorage.googleapis.com/v0/b/kursy-online-e1f8f.appspot.com/o/StaticResources%2Fprzelewy24-logo-100px.svg?alt=media&token=d421dfe1-ca92-4c24-8c6e-0b441bc12402",
    applePay: "https://firebasestorage.googleapis.com/v0/b/kursy-online-e1f8f.appspot.com/o/StaticResources%2Fapple-pay-logo-100px.svg?alt=media&token=6fd006f5-7bf3-4a22-ae2a-d388ac7aa918",
    googlePay: "https://firebasestorage.googleapis.com/v0/b/kursy-online-e1f8f.appspot.com/o/StaticResources%2Fgoogle-pay-logo-100px.svg?alt=media&token=193efc9f-2125-478f-aaf7-22443d586f41",
}

const initialAddressState = {
    line1: "",
    line2: "",
    city: "",
    state: "",
    postal_code: "",
    country: "PL",
}

const mapState = (state) => ({
    currentUser: state.user.currentUser,
    selectedPlan: state.plansData.plan,
})

const SubscribePlan = () => {
    const dispatch = useDispatch()
    const elements = useElements()
    const [ paymentType, setPaymentType] = useState("Card")
    const [ billingAddress, setBillingAddress ] = useState({ ...initialAddressState })
    const [ nameOnCard, setNameOnCard ] = useState("")
    const [ processingPayment, setProcessingPayment] = useState(false)
    const { state, currentUser, selectedPlan }= useSelector(mapState)
    const { planID } = useParams()

    const configCardElement = {
        iconStyle: "solid",
        hidePostalCode: true
    }

    useEffect(() => {
        dispatch(
            fetchPlanStart(planID)
        )
    }, [])

    const handleBilling = event => {
        const { name, value } = event.target
        setBillingAddress({
            ...billingAddress,
            [name]: value
        })
    }

    const handleSelectPayment = paymentType => {
        setPaymentType(paymentType)
    }

    const handleFormSubmit = async (event, cardElement) => {
        event.preventDefault()
        if (!cardElement) return

        if (
            !billingAddress.line1 || !billingAddress.city || !billingAddress.state || !billingAddress.postal_code || !billingAddress.country || !nameOnCard
        ) return

        apiInstance.post("/subscribtion/create", {
            amount: total * 100, //Price needs to be in cents
            billing: {
                name: nameOnCard,
                address: {
                    ...billingAddress
                }
            }
        }).then(({ data: clientSecret })=> {
            stripe.createPaymentMethod({
                type: "card",
                card: cardElement,
                billing_details: {
                    name: nameOnCard,
                    address: {
                        ...billingAddress
                    }
                }
        })
    }

    return (
        <>
            <ClearNavbar />
            <StripeWrapper>
                <RootContainer onSubmit={event => handleFormSubmit(event, elements.getElement("card"))}>
                    <NavigationSection>
                        <NavigationElement to="">Home</NavigationElement>
                        <NavigationElement to="/creator">Creator</NavigationElement>
                        <NavigationElement to="/creator/upgrade" active="true">Select Plan</NavigationElement>
                    </NavigationSection>
                    <SelectionTitle>
                        <span>1. Selected Plan:</span> {selectedPlan.planName}
                    </SelectionTitle>
                    <PlanDetails>
                        <PlanPrice>{selectedPlan.planPrice === 0 ? "0.00" : selectedPlan.planPrice} zł</PlanPrice>
                        <PlanPriceInfo>PLN / month</PlanPriceInfo>
                        <PlanInfoContainer>
                            <PlanInfo>Plan odnowi się za {selectedPlan.planPrice === 0 ? "0.00" : selectedPlan.planPrice} zł/month</PlanInfo>
                        </PlanInfoContainer>
                    </PlanDetails>
                    <SelectionTitle><span>2. Billing Info</span></SelectionTitle>
                    <BillingAddressWrapper>
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
                    </BillingAddressWrapper>
                    <SelectionTitle><span>3. Payment Options</span></SelectionTitle>
                    <PaymentOptionsWrapper>
                        <PaymentTypeButtonContainer 
                            name="Card" 
                            active={paymentType === "Card"}
                            onClick={event => handleSelectPayment("Card")}>
                            <PaymentTypeName>Card</PaymentTypeName>
                            <PaymentTypeSvg role="presentation" fill="var(--colorIcon)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 4a2 2 0 012-2h12a2 2 0 012 2H0zm0 2v6a2 2 0 002 2h12a2 2 0 002-2V6H0zm3 5a1 1 0 011-1h1a1 1 0 110 2H4a1 1 0 01-1-1z"></path></PaymentTypeSvg>
                            { paymentType === "Card" &&
                                <CardWrapper>
                                    <CardElement 
                                        options={configCardElement}
                                    />
                                </CardWrapper>
                            }
                        </PaymentTypeButtonContainer>
                        <PaymentTypeButtonContainer 
                            name="Paypal" 
                            active={paymentType === "Paypal"}
                            onClick={event => handleSelectPayment("Paypal")}>
                            <PaymentTypeName>Paypal</PaymentTypeName>
                            <PaymentTypeLogo src={logos.paypal} />
                        </PaymentTypeButtonContainer>
                        <PaymentTypeButtonContainer 
                            name="Przelewy24" 
                            active={paymentType === "Przelewy24"}
                            onClick={event => handleSelectPayment("Przelewy24")}>
                            <PaymentTypeName>Przelewy 24</PaymentTypeName>
                            <PaymentPrzelewy24Pay src={logos.przelewy24} />
                        </PaymentTypeButtonContainer>
                        <PaymentTypeButtonContainer 
                            name="GooglePay" 
                            active={paymentType === "GooglePay"}
                            onClick={event => handleSelectPayment("GooglePay")}>
                            <PaymentTypeName>Google Pay</PaymentTypeName>
                            <PaymentTypeSvg viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation" class="p-Logo p-Logo--lg u-mb-3"><path d="M22.021 0H7.98C3.59 0 0 3.6 0 8s3.59 8 7.979 8H22.02C26.41 16 30 12.4 30 8s-3.59-8-7.979-8Z" fill="#fff"></path><path d="M22.021.648c.986 0 1.943.196 2.845.58a7.395 7.395 0 0 1 3.91 3.92c.382.904.578 1.864.578 2.852 0 .988-.196 1.948-.579 2.852a7.417 7.417 0 0 1-3.91 3.92c-.9.384-1.858.58-2.844.58H7.98a7.221 7.221 0 0 1-2.845-.58 7.395 7.395 0 0 1-3.91-3.92A7.274 7.274 0 0 1 .647 8c0-.988.196-1.948.579-2.852a7.417 7.417 0 0 1 3.91-3.92 7.221 7.221 0 0 1 2.844-.58H22.02Zm0-.648H7.98C3.59 0 0 3.6 0 8s3.59 8 7.979 8H22.02C26.41 16 30 12.4 30 8s-3.59-8-7.979-8Z" fill="#3C4043"></path><path d="M14.306 8.568v2.42h-.766V5.012h2.03c.515 0 .954.172 1.313.516.367.344.55.764.55 1.26 0 .508-.183.928-.55 1.268-.355.34-.794.508-1.313.508h-1.264v.004Zm0-2.82v2.084h1.28c.304 0 .559-.104.758-.308.204-.204.307-.452.307-.732a.998.998 0 0 0-.307-.724.992.992 0 0 0-.758-.316h-1.28v-.004ZM19.436 6.764c.567 0 1.014.152 1.34.456.328.304.491.72.491 1.248v2.52h-.73v-.568h-.032c-.315.468-.738.7-1.264.7-.451 0-.826-.132-1.13-.4a1.279 1.279 0 0 1-.454-1c0-.424.16-.76.479-1.008.319-.252.746-.376 1.276-.376.455 0 .83.084 1.121.252v-.176a.873.873 0 0 0-.315-.68 1.08 1.08 0 0 0-.742-.28c-.427 0-.766.18-1.013.544l-.674-.424c.37-.54.921-.808 1.647-.808Zm-.99 2.968c0 .2.085.368.256.5.168.132.367.2.595.2.323 0 .61-.12.861-.36.252-.24.38-.52.38-.844-.24-.188-.571-.284-.998-.284-.311 0-.57.076-.778.224-.211.156-.315.344-.315.564ZM25.432 6.896l-2.553 5.888h-.79l.95-2.06-1.684-3.828h.834L23.4 9.832h.016l1.181-2.936h.834Z" fill="#3C4043"></path><path d="M11.26 8.08c0-.25-.023-.49-.065-.72h-3.21v1.32h1.849c-.075.44-.317.814-.686 1.063v.857h1.1c.643-.597 1.011-1.478 1.011-2.52Z" fill="#4285F4"></path><path d="M9.149 9.743c-.306.207-.701.329-1.163.329-.891 0-1.648-.603-1.918-1.415H4.931v.883a3.417 3.417 0 0 0 3.054 1.888c.924 0 1.7-.305 2.263-.829l-1.1-.856Z" fill="#34A853"></path><path d="M5.96 8.002c0-.228.038-.448.107-.656v-.883H4.93a3.416 3.416 0 0 0-.363 1.539c0 .554.131 1.076.363 1.539l1.136-.883a2.071 2.071 0 0 1-.107-.656Z" fill="#FABB05"></path><path d="M7.986 5.932c.504 0 .955.174 1.312.514l.975-.977a3.279 3.279 0 0 0-2.287-.893 3.417 3.417 0 0 0-3.054 1.887l1.135.883c.271-.812 1.028-1.414 1.92-1.414Z" fill="#E94235"></path></PaymentTypeSvg>
                        </PaymentTypeButtonContainer>
                        <PaymentTypeButtonContainer 
                            name="ApplePay" 
                            active={paymentType === "ApplePay"}
                            onClick={event => handleSelectPayment("ApplePay")}>
                            <PaymentTypeName>Apple Pay</PaymentTypeName>
                            <PaymentApplePay src={logos.applePay} />
                        </PaymentTypeButtonContainer>
                    </PaymentOptionsWrapper>
                    <SelectionTitle><span>3. Finish Subscription</span></SelectionTitle>
                    <FinishPaymentWrapper>
                        <TaxesInfoWrapper>
                            <TaxesInfo>Taxes: </TaxesInfo>
                            <TaxesInfoValue>{ (selectedPlan.planPrice / 1.23) === 0 ? "0.00" : (selectedPlan.planPrice / 1.23) } zł</TaxesInfoValue>
                        </TaxesInfoWrapper>
                        <SumInfoWrapper>
                            <SumInfo>Sum: </SumInfo>
                            <SumInfoValue> {selectedPlan.planPrice === 0 ? "0.00" : selectedPlan.planPrice} zł</SumInfoValue>
                        </SumInfoWrapper>
                        <PayButton type="submit">
                            Pay
                            { processingPayment &&
                                <PayButtonSvg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="spinner-third" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-spinner-third fa-w-16 fa-3x"><path fill="currentColor" d="M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z"></path></PayButtonSvg>
                            }  
                        </PayButton>
                    </FinishPaymentWrapper>
                </RootContainer>
            </StripeWrapper>
        </>
    )
}

export default SubscribePlan
