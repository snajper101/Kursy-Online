import styled from 'styled-components'
import { Link as LinkRoute } from 'react-router-dom'

export const NavBar = styled.div`
    display: flex;
    width: 100%;
    height: 56px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    color: white;
    margin: 0;
    padding: 0;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-family: "Segoe UI";
    margin-bottom: 3px;
`

export const TestItem = styled.div`
    width: 40px;
    height: 40px;
    background: red;
    margin-left: 20px;
`

export const Logo = styled(LinkRoute)`
    content: url("https://firebasestorage.googleapis.com/v0/b/kursy-online-e1f8f.appspot.com/o/NavLogo.jpg?alt=media&token=a307077c-5d8f-409c-b8ee-cb8ddb2b0343");
    height: 40px;
    margin-left: 0.8rem;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }
`
export const LogoSection = styled.div`
    flex: 0.33;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`

export const NavigationSection = styled.div`
    flex: 0.33;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const AccountSection = styled.ul`
    flex: 0.33;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin: 0;
`

export const AccountButton = styled(LinkRoute)`
    display: flex;
    flex-direction: row;
    height: 36px;
    align-items: center;
    justify-content: center;
    padding: 0 5px 0 5px;
    border-radius: 18px;
    background: #e4e6eb;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    margin: 0 0 0 8px;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #c7cad1;
    }

    @media screen and (max-width: 736px) {
        display: none;
    }
`

export const AccountButtonText = styled.div`
    font-family: inherit;
    margin: 0 5px 0 5px;
    color: black;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: black;
    }
` 

export const AccountImageButtons = styled.li`
    width: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 16px 0 24px;
`

export const AccountButtonIconLink= styled(LinkRoute)`
    width: 36px;
    height: 36px;
    background-color: #e4e6eb;
    border-radius: 50%;
    margin: 0 4px 0 4px;
    padding: 0 8px 0 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 300ms;

    &:hover{
        filter: brightness(0.8)
    }
`

export const AccountButtonIcon = styled.button`
    width: 36px;
    height: 36px;
    background-color: #e4e6eb;
    border-radius: 50%;
    margin: 0 4px 0 4px;
    padding: 0 8px 0 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 300ms;
    cursor: pointer;
    border: 0px;

    &:hover{
        filter: brightness(0.8)
    }

    &::after {
        background: #1877F2;
    }
`

export const ButtonSvg = styled.svg`
    fill: black;
    width: 20px;
    height: 20px;
    color: black;
`

export const ButtonImg = styled.img`
    fill: black;
    width: 20px;
    height: 20px;
`

export const AccountDropdown = styled.div`
    position: absolute;
    top: 56px;
    width: 300px;
    transform: translateX(-35%);
    background-color: #FFFFFF;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
    padding: 1rem;
    overflow: hidden;
    z-index: 99;
`

export const AccountDropdownItem = styled(LinkRoute)`
    height: 50px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    transition: 500ms;
    padding: 0.5rem;
    text-decoration: none;
    color: black;
    font-family: inherit;
    font-weight: 500;

    &:hover {
        background-color: #e4e6eb;
    }
`
export const AccountDropdownIconButton = styled.span`
    margin-right: auto;  
`

export const AccountDropdownIconRight = styled.span`
    margin-left: auto;
`

export const NavigationItem = styled(LinkRoute)`
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
    font-weight: 500;

    &:hover {
        color: black;
        background: #e4e6eb;
    }
`

export const SearchBar = styled.div`
    margin: 0.25rem;
    width: 100%;
    max-width: 250px;   
    padding: 3px 10px 3px 10px; 
    margin-left: 0.8rem;
    margin-right: auto;
    margin-bottom: 3px;
    background: #fff;
    color: white;
    font-family: "Segoe UI";
    background-color: #EBEDF0;
    cursor: text;
    color: #b4b4b4;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between; 

    &:hover::before {
        transform: scale(1.1);
    }

    &::before {
        content: url("https://firebasestorage.googleapis.com/v0/b/kursy-online-e1f8f.appspot.com/o/StaticResources%2Fsearch-solid.svg?alt=media&token=4fc31db5-8efe-400b-94d4-15aedc1e70bd");
    }
`
export const SearchInput = styled.input`
    margin: 0 0.5rem 0 0.5rem;
    width: 100%;
    border: none;
    outline: none;
    font-size: 1rem;
    background: none; 
    display: flex;
    align-items: center;  
    justify-content: center; 

    &::placeholder {
        color: #979797;
    }
`

export const SocialSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
`

export const SocialIcon = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0.5rem;
    content: url(${props => props.iconLink});
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }
`
