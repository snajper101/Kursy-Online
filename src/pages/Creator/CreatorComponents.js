import styled from "styled-components";
import { Link as LinkRoute } from "react-router-dom";

export const CreatorWrapper = styled.div`
    font-family: inherit;
    display: flex;
`

export const CreatorNavbar = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: sticky;
    height: 3rem;
    width: 100%;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`

export const ReturnNavbarButton = styled(LinkRoute)`
    color: black;
    font-size: 1.3rem;
    line-height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    cursor: pointer;
    padding-left: 0.5rem;
    text-decoration: none;

    &::before {
        content: url("https://firebasestorage.googleapis.com/v0/b/kursy-online-e1f8f.appspot.com/o/StaticResources%2Farrow-left-solid.svg?alt=media&token=9f493fec-43d0-4a49-973c-f17855a32aff");
        color: black;
        margin-right: 3px;
    }

    &:hover{
        color: black;
        transform: scale(1.05);
    }
`

export const SearchBar = styled.div`
    margin: 0.25rem;
    width: 40%;
    max-width: 300px;   
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

export const DashboardNavbarButton = styled(LinkRoute)`
    margin: 0.25rem;
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
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        content: url("https://firebasestorage.googleapis.com/v0/b/kursy-online-e1f8f.appspot.com/o/StaticResources%2Fvideo-solid.svg?alt=media&token=43a270d2-9855-4677-b9ce-c34fb9b1680d"); 
        padding-right: 3px;
        padding-top: 3px;   
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        color: black;
        background: #c7cad1;
    }
`

export const MainSection = styled.div`
    background: #f9f9f9;
    min-width: 100%;
    min-height: 100%;
`

export const CoursesList = styled.div`
    display: flex;
`

export const CourseElementContainer = styled.div`
    margin: 0.5rem;
`


