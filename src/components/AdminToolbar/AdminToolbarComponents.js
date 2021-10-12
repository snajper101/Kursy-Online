import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.div`
    height: 30px;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    font-family: "Segoe UI";
    font-size: 16px;
    color: white;
`

export const LinkElement = styled(Link)`
    font-size: inherit;
    font-family: inherit;
    text-decoration: none;
    color: white;
    margin-right: 20px;
    padding: 0 10px 0 10px;
    width: auto;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease-in-out;

    &:hover{
        transition: all 0.4s ease-in-out;
        background: gray;
        color: white;
    }
`