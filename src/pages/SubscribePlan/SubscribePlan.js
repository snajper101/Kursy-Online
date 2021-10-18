import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPlanStart } from '../../redux/Plans/plans.actions'

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
    PaymentTypeLogo
} from './SubscribePlanComponents'

//Components
import ClearNavbar from '../../components/ClearNavbar/ClearNavbar'
import StripeWrapper from '../../components/StripeWrapper/StripeWrapper'
import { CountryDropdown } from 'react-country-region-selector'

const logos = {
    paypal: "https://firebasestorage.googleapis.com/v0/b/kursy-online-e1f8f.appspot.com/o/StaticResources%2Fpp-logo-100px.png?alt=media&token=d3452cdb-1807-45b1-9df7-6fe239b61287",
    przelewy24: "https://firebasestorage.googleapis.com/v0/b/kursy-online-e1f8f.appspot.com/o/StaticResources%2Fprzelewy24-logo-100px.svg?alt=media&token=4d5aa7a0-cd25-4645-95b6-cfb2e66ac9ac",
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
    const [ billingAddress, setBillingAddress ] = useState({ ...initialAddressState })
    const [ nameOnCard, setNameOnCard ] = useState("")
    const { state, currentUser, selectedPlan }= useSelector(mapState)
    const { planID } = useParams()

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


    const handleFormSubmit = async event => {
        event.preventDefault()
    }

    return (
        <>
            <ClearNavbar />
            <StripeWrapper>
                <RootContainer onSubmit={handleFormSubmit}>
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
                        <PaymentTypeButtonContainer>
                            <PaymentTypeName>Paypal</PaymentTypeName>
                            <PaymentTypeLogo src={logos.paypal} />
                        </PaymentTypeButtonContainer>
                        <PaymentTypeButtonContainer>
                            <PaymentTypeName>Przelewy 24</PaymentTypeName>
                            <PaymentTypeLogo src={logos.przelewy24} />
                        </PaymentTypeButtonContainer>
                    </PaymentOptionsWrapper>
                </RootContainer>
            </StripeWrapper>
        </>
    )
}

export default SubscribePlan
