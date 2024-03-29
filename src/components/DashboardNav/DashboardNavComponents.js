import styled from "styled-components";
import { Link as LinkRoute } from "react-router-dom"

export const DashboardNavbar = styled.div`
    border-bottom: 1px solid #d1d1d1;
    display: flex;
    flex-wrap: wrap;
    padding-left: 5rem;
    padding-right: 5rem;
    padding: 11px 0.5rem 0 0.5rem;
    transform: translateY(-3px);
`

export const DashboardNavbarButton = styled(LinkRoute)`
    height: 100%;
    color: black;
    background: #e4e6eb;
    border-radius: 2.75rem;
    border: none;
    padding: 3px 10px 3px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 200px;
    font-family: inherit;
    font-size: 1rem;
    color: black;
    font-weight: 500;
    margin-right: 2rem;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-bottom: 4px;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: black;
        background: #c7cad1;
    }
`

export const SearchBar = styled.div`
    height: 100%;
    padding: 3px 10px 3px 10px;
    margin-right:auto;
    margin-left:auto;
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