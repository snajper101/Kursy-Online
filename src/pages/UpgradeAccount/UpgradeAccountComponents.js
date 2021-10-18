import styled from "styled-components";
import checkSVG from "../../images/check.svg"

export const PlansContainer = styled.div`
    font-family: inherit;
    text-align: center;
    width: 100%;
`

export const Cards = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    height: 100%;
    justify-content: center;
`

export const MainTitle = styled.div`
    font-weight: 600;
    font-size: 2rem;
    margin-top: 1rem;
    color: black;
    justify-content: center;
    align-items: center;
    padding: 6px 4rem;
`  

export const Card = styled.div`
    height: 500px;  
    width: 25%;
    border-radius: 6px;
    padding: 2rem;
    max-width: 260px;
    margin: 1rem;
    margin-top: 2rem;
    transition: all 0.3s ease-in-out;
    box-shadow: ${props => props.active ? "0 0 16px rgb(0 92 18 / 50%)" : "0 0 16px rgb(0 0 0 / 10%)" };


    @media (max-width: 848px) {
        width: 40%;
    }

    @media (max-width: 674px) {
        width: 55%;
    }

    @media (max-width: 500px) {
        width: 65%;
    }

    &:hover {
        transform: scale(1.1)
    }
`

export const CardActive = styled.div`

`

export const CardTitle = styled.p`
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
`

export const CartPriceWrapper = styled.div`
    font-size: 1.6em;
    display: flex;
    justify-content: center;
    outline: 0;
    font-weight: 600;
    margin-top: 5px;
    line-height: 1;
    text-align: center;
`

export const CardPrice = styled.p`
    font-weight: inherit;
    display: flex;
    font-size: 1.5em;

    >.price-symbol {
        padding-left: 3px;
        padding-right: 3px;
        font-size: 20px;
        justify-content: flex-start;
        align-self: flex-start;
    }

    >.price-title {
        line-height: 1;
        font-size: 20px;
        font-weight: 700;
        justify-content: flex-end;
        margin-top: 10px;
        align-self: flex-start;
        text-align: center;
    }
`

export const CardPlan = styled.ul`
    list-style: none;
    text-align: left;
    font-size: 0.9rem;
    font-weight: 0.8em;

`

export const CardPlanItem = styled.li`
    margin-right: 0.5rem;

    >b {
        font-weight: 700;
    }

    &::before {
        display: inline-block;
        width: 10px; 
        height: 20px;
        content: url("https://firebasestorage.googleapis.com/v0/b/kursy-online-e1f8f.appspot.com/o/check-solid.svg?alt=media&token=1400f187-778b-4904-9222-3314e70f8433");
        margin-right: 0.5rem;
        font-size: 1.5rem;
        color: #00a32a;
    }
`

export const CardButton = styled.button`
    margin-top: 1rem;
    width: 100%;
    font-size: 1rem;
    background: #00a32a;
    border: none;
    border-radius: 100px;
    padding: 6px 20px;
    word-break: break-word;
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    color: white;
    transition: all 0.3s ease-in-out;
    margin-bottom: 0.5rem;
    
    background: ${props => props.active && "white" };
    border: ${props => props.active && "1px solid #00a32a" };
    color: ${props => props.active && "#00a32a" };

    &:hover{
        opacity: 0.7;
    }
`