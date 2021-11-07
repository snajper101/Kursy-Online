import styled from "styled-components";

export const LeftSection = styled.div`
    background: red;
    width: 256px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
`

export const MainSection = styled.div`
    display: flex;
    width: calc(100% - 256px);
    position: absolute;
    top: 0;
    left: 256px;
    height: calc(100% - 4rem);
`

export const BottomOptions = styled.div`
    height: 4rem;
    width: 100%;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    box-shadow: 0 -2px 6px -1px rgba(0, 0, 0, 0.1), 0 -4px 4px -1px rgba(0, 0, 0, 0.06);
`

export const BottomButtonsContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const BottomButton = styled.div`
    width: 100px;
    border-radius: 0.5rem;
    height: 2rem;
    color: black;
`

export const LeftContainer = styled.div`
    opacity: 0;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    overflow: hidden;
`