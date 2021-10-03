import styled from 'styled-components'
import { Link as LinkRoute } from 'react-router-dom'

export const NavBar = styled.div`
    display: flex;
    width: 100vw;
    height: 56px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    color: white;
    margin: 0;
    padding: 0;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-family: "Segoe UI";
`

export const TestItem = styled.div`
    width: 40px;
    height: 40px;
    background: red;
    margin-left: 20px;
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

export const AccountButtonText = styled.text`
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

export const AccountButtonIcon = styled.div`
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

    &::after {
        background: #1877F2;
    }
`

export const ButtonSvg = styled.svg`
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