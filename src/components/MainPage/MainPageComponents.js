import styled from "styled-components";

export const TextWrapper = styled.div`
    width: 100%;
`

export const UpperMidSection = styled.div`  
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    margin: 3rem;
`

export const ImageWrapper = styled.div`
    width: auto;
`

export const KurwaTekst = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    border-radius: 12px;
    background: #fff;
    margin: 0 2rem 0 2rem;
    padding: 0 6px 0 6px;
    text-decoration: none;
    color: black;
    font-family: inherit;
    font-size: ${props => props.title ? "2rem" : "1.2   rem"};
    font-weight: ${props => props.title ? 700 : "normal"};

`

export const PurpleBg = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    height: 280px;
    width: 500px;
    background-image: url("https://firebasestorage.googleapis.com/v0/b/kursy-online-e1f8f.appspot.com/o/StaticResources%2FpurpleBg.png?alt=media&token=06d439d0-43b6-4d9c-b0aa-683650823c6a");
    content: url("https://firebasestorage.googleapis.com/v0/b/kursy-online-e1f8f.appspot.com/o/StaticResources%2FthinkingMan.png?alt=media&token=a03bb7d4-0948-4789-80cd-ae0bd08e5b02");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;

    &:hover {
        background-size: 99% 99%;
        transform: scale(1.01);
        background-repeat: no-repeat;
    }
`