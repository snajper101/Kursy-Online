import styled from "styled-components";
import { Link as LinkRoute} from "react-router-dom";

export const RootContainer = styled.form`
    width: 100%;
    padding-right: 2rem;
    padding-left: 2rem;
    margin-right: auto;
    margin-left: auto;

    @media screen and (min-width: 576px) {
        max-width: 540px;
    }

    @media screen and (min-width: 768px) {
        max-width: 720px;
    }
    
    @media screen and (min-width: 992px) {
        max-width: 960px;
    }
`

export const NavigationSection = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: inherit;
    height: 1.5rem;
    padding: 5px;
    padding-left: 0px;
    margin: 0.5rem;
    margin-bottom: 0.5rem;
    margin-left: 0;
`

export const NavigationElement = styled(LinkRoute)`
    font-size: 1rem;
    text-decoration: none;
    color: ${props => props.active ? "#135e96" : "grey"};
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    padding-right: 3px;

    &::before {
        content: url("https://firebasestorage.googleapis.com/v0/b/kursy-online-e1f8f.appspot.com/o/StaticResources%2Fchevron-right-solid.svg?alt=media&token=f71bffa5-e571-4fee-8c14-587771d48bf1");
        padding-right: 3px;
        color: grey;
    }


    &:hover{
        color: ${props => props.active ? "#135e96" : "grey"};
        transform: scale(1.05)
    }
`

export const SelectionTitle = styled.div`
    height: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.7rem;
    font-weight: 500;
    margin-bottom: 1rem;
    margin-top: 0.7rem;

    >span {
        font-weight: normal;
        font-size: 1.5rem;
        color: grey;
        padding-right: 5px;
        padding-left: 5px;
    }
`

export const PlanDetails = styled.div`
    width: 100%;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
    background: white;
    padding: 0.5rem;
    //border: 1px solid grey;
`

export const PlanPrice = styled.div`
    height: 2rem;
    font-size: 2rem;
    font-weight: 700;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
`

export const PlanPriceInfo = styled.div`
    height: 0.9rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PlanInfoContainer = styled.div`
    padding-top: 0.5rem;
    height: 2.2rem;
    width: 100%;
    padding-bottom: 0.5rem;
    display: flex;
    justify-content: center;
`

export const PlanInfo = styled.div`
    font-size: 0.9rem;
    color: gray;
`

export const BillingAddressWrapper = styled.div`
    width: 100%;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
    background: white;
    padding: 0.5rem 1rem;
`


export const CredentialsInput = styled.input`
    width: 100%;
    height: 2.5rem;
    font-size: 1rem;
    display: flex;
    padding-left: 8px;
    border-radius: 8px;
    border: 1px solid #dadce0;
    outline: none;
    font-weight: 400;
    margin: 0.5rem 0;
`

export const CredentialsDropdown = styled.div`
    .input {
        width: 100%;
        height: 2.5rem;
        font-size: 1rem;
        display: flex;
        padding-left: 8px;
        border-radius: 8px;
        border: 1px solid #dadce0;
        outline: none;
        font-weight: 400;
        margin: 0.5rem 0;
    }
`

export const PaymentOptionsWrapper = styled.div`
    width: 100%;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
    background: white;
    padding: 0.5rem 1rem;
`

export const PaymentTypeButtonContainer = styled.div`
    cursor: pointer;
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #dadce0;
    border-radius: 8px;
    margin: 0.5rem 0;   

    background: ${props => props.active && "#f0f0f1" };
`

export const CardWrapper = styled.div`
    margin: 0.5rem 0 0 0;
    padding: 0.5rem;
    border: 1px solid #dadce0;
    border-radius: 8px;
    background: white;
`

export const PaymentTypeName = styled.div`
    line-height: 1.4;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
    color: black;
`

export const PaymentTypeLogo = styled.img`
    display: flex;
    justify-content: flex-start;
    width: 50px;
    height: 13px;
`

export const PaymentTypeSvg = styled.svg`
    height: 13px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`

export const PaymentApplePay = styled(PaymentTypeLogo)`
    width: 21px;
    height: 13px;
`

export const PaymentPrzelewy24Pay = styled(PaymentTypeLogo)`
    width: 37px;
    height: 13px;
`

export const FinishPaymentWrapper = styled.div`
    width: 100%;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
    background: white;
    padding: 0.5rem 1rem;
    margin-bottom: 2rem;
`

export const TaxesInfoWrapper = styled.div`
    width: 100%;
    height: 1.2rem;
    border-bottom: 1px solid gray;
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
    padding-bottom: 1rem;
`

export const TaxesInfo = styled.div`
    font-size: 1rem;
    font-weight: 500;
    padding-left: 0.5rem;
    width: 50%;
`

export const TaxesInfoValue = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 1rem;
    font-weight: 500;
    padding-right: 0.5rem;
    width: 50%;
`

export const SumInfoWrapper = styled.div`
    width: 100%;
    height: 1.7rem;
    border-bottom: 1px solid gray;
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
`

export const SumInfo = styled.div`
    font-size: 1.2rem;
    font-weight: 600;
    padding-left: 0.5rem;
    width: 50%;
    display: flex;
    align-items: center;
`

export const SumInfoValue = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 1.5rem;
    font-weight: 700;
    padding-right: 0.5rem;
    width: 50%;
`

export const PayButton = styled.button`
    width: 100%;
    padding: 0 1rem;
    background: #2E3190;
    height: 3rem;
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 8px;
    border: none;
    margin-bottom: 1rem;

    &:hover {
        opacity: 0.6;
    }
`

export const PayButtonSvg = styled.svg`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.5rem;
    height: 1.5rem;
    width: 1.5rem;
    animation: spin infinite 1s linear;

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`