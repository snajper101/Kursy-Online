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
    width: 100%;
`

export const SectionTitleContainer = styled.div`
    display: flex;
    min-height: 2rem;
`

export const SectionTitle = styled.div`
    padding-left: 2rem;
    padding-top: 1.5rem;
    font-weight: 700;
    color: black;
    font-size: 2rem;

`

export const CoursesListSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    flex-grow: 1;
`

export const ListHeader = styled.div`
    z-index: 5;
    position: sticky;
    margin: 0 1rem;
`

export const ListTableHeader = styled.div`
    font-weight: 500;
    font-size: 0.8rem;
    height: 3rem;
    line-height: 3rem;
    display: flex;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`

export const CoursesList = styled.div`
    display: flex;
`

export const CourseElementContainer = styled.div`
    margin: 0;
    margin: 0.5rem;
`

export const ListColumnHeader = styled.div`
    min-width: 3rem;
    padding-left: 1.5rem;
    padding-right: 0.25rem;
    flex: 0 0 3rem;
    padding-top: 0.5rem;
    position: sticky;
    left: 0;
    z-index: 1;
    transform: translateZ(0);
    display: flex;
`

export const CheckboxLit = styled.div`
    display: inline-flex;
    padding: 4px;
    white-space: nowrap;
    cursor: pointer;
`

export const CheckboxContainer = styled.div`
    display: inline-block;
    position: relative;
    align-self: start;
    width: 1rem;
    height: 1rem;
    min-width: 1rem;
    margin: 3px;
    background: transparent;
`

export const Checkbox = styled.div`
    position: relative;
    box-sizing: border-box;
    height: 100%;
    border: ${props => props.checked ? "none" : "#909090 solid 2px"};
    border-radius: 2px;
    pointer-events: none;
    transition: background-color 140ms, border-color 140ms;
    background-color: ${props => props.checked ? "#0D0D0D" : "transparent"};
`

export const CheckboxCheckmark = styled.div`
    //animation: checkmark-expand 140ms ease-out forwards;
    position: absolute;
    box-sizing: content-box;
    left: 0;
    width: 36%;
    height: 70%;
    border-style: solid;
    border-top: none;
    border-left: none;
    border-right-width: calc(2 / 15 * 1rem);
    border-left-width: calc(2 / 15 * 1rem);
    border-color: white;
    transform-origin: 97% 86%;
`

export const ListVideoColumnHeader = styled.div`
    min-width: 400px;
    padding-left: 0.75rem;
    padding-right: 0;
    flex: 3 0 400px;
    left: 60px;
    position: sticky;
    z-index: 1;
    display: flex;
    transform: translateZ(0);

    &::after {
        content: "";
        display: block;
        position: absolute;
        height: 100%;
        right: -3px;
        top: 0;
        border-right: 1px solid rgba(0, 0, 0, 0.2);
    }
`

export const ListHeaderName = styled.h3`
    max-width: 100%;
    font-weight: inherit;
    font-size: inherit;
    margin: 0;
    color: #606060;
    display: block;

    >span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
        line-height: 3rem;
    }
`

export const ListColumnNormalHeader = styled.div`
    min-width: 100px;
    padding-left: 1.5rem;
    padding-right: 0.5rem;
    flex: 1 0 100px;
    display: flex;
    position: relative;
`

export const ListHeaderButtonContainer = styled.div`
    max-width: 100%;
    margin: 0;
`

export const ListHeaderButton = styled.button`
    align-items: center;
    cursor: pointer;
    display: flex;
    max-width: 100%;
    outline: none;
    background: none;
    border: none;
    color: inherit;
    font: inherit;
    letter-spacing: inherit;
    margin: 0;
    padding: 0;

    >span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
    }
`

export const ListHeaderButtonIconContainer = styled.div`
    fill: #ffffff;
    flex-shrink: 0;
    margin-left: 4px;
`

export const ListHeaderButtonSvg = styled.svg`
    pointer-events: none;
    display: block;
    width: 1rem;
    height: 1rem;
`

export const ListRowContainer = styled.div`
    background-color: transparent;
    display: flex;
`

export const ListCells = styled.div`
    margin: 0 1rem;
`

export const ListCellCheckbox = styled.div`
    min-width: 3rem;
    padding-left: 1.5rem;
    padding-right: 0.25rem;
    flex: 0 0 3rem;
    padding-top: 0.25rem;
    z-index: 2;
    position: sticky;
    left: 0;
    transform: translateZ(0);
    display: flex;
`

export const ListVideoCell = styled.div`
    min-width: 400px;
    padding-left: 0.75rem;
    padding-right: 0px;
    flex: 3 0 400px;
    left: 60px;
    z-index: 2;
    position: sticky;
    transform: translateZ(0);
    display: flex;
`

export const VideoRow = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    position: sticky;

    &::after {
        content: "";
        display: block;
        position: absolute;
        height: 100%;
        right: -3px;
        top: 0;
        border-right: 1px solid rgba(0, 0, 0, 0.2);
    }
`

export const VideoThumbnail = styled.div`
    flex: 0 0;
    padding: 0.5rem 0;
`

export const ThumbnailAnchor = styled(LinkRoute)`
    text-decoration: none;
    color: inherit;
    cursor: pointer;

    &:hover {
        color: inherit;
        text-decoration: none;
    }
`

export const ThumbnailContainer = styled.div`
    width: 120px;
    height: 68px;
    position: relative;
`

export const VideoRightSection = styled.div`
    margin-right: 1rem;
    flex: 1 1;
    overflow: hidden;
    padding-top: 0.375rem;
    margin-left: 1rem;
`

export const CourseTitleWrapper = styled.h3`
    //padding-top: 0.5rem;
    height: 1.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1 1;
`

export const CourseTitle = styled(LinkRoute)`
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.5rem;
    color: #0d0d0d;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
`

export const CourseDescriptionWrapper = styled.h3`
    color: #717171;
`

export const CourseDescription = styled.div`
    color: #909090;
    font-weight: 400;
    letter-spacing: 0.011em;
    font-size: 0.75rem;
    line-height: 1rem;
    overflow: hidden;
    width: 100%;
    padding: 0;
    margin: 0;
    margin-top: -2px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    height: 2rem;
`

export const ListNormalCell = styled.div`
    min-width: 100px;
    padding-left: 1.5rem;
    padding-right: 0.5rem;
    flex: 1 0 100px;
    display: flex;
    position: relative;
`

export const IconAndTextRow = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.375rem;
    height: 2rem;
    max-width: 100%;
    width: initial;

    >span {
        box-sizing: border-box;
        height: 2rem;
        padding-top: 0.5rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 1.25rem;
        display: flex;
        align-items: center;
    }
`

export const VisibilityIcon = styled.div`
    color: #606060;
    margin-left: -0.375rem;
    margin-right: 0.125rem;
    padding: 0.375rem;
    flex: none;
`

export const ListCellActions = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

export const ListCellActionsContentWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    min-width: 260px;
    height: 2rem;
    margin-top: 0.25rem;
`

export const EditDraftButton = styled.div`
    margin-left: 0.5rem;
    display: inline-flex;
    text-align: center;
    cursor: pointer;
    user-select: none;
    min-width: 2rem;
    height: 2rem;
    box-sizing: border-box;
    padding: 0 0.5rem;
    margin: 0;
    position: relative;
    color: #065fd4;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: uppercase;
    letter-spacing: 0.01em;
    font-size: 1rem;
    line-height: 1.25rem;
`

export const EditDraftButtonLabel = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    flex: 1 1;
    padding: 0.5rem 0 0.5rem;
`