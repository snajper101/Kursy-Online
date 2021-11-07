import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { checkUserIsCreator } from '../../Utils'
import { getCreatorCourses } from '../../redux/Courses/courses.actions'

//Styled Components
import {
    CreatorNavbar,
    ReturnNavbarButton,
    SearchBar,
    SearchInput,
    DashboardNavbarButton,
    MainSection,
    SectionTitle,
    SectionTitleContainer,
    CoursesListSection,
    ListHeader,
    ListTableHeader,
    ListColumnHeader,
    CheckboxLit,
    CheckboxContainer,
    Checkbox,
    CheckboxCheckmark,
    ListVideoColumnHeader,
    ListHeaderName,
    ListColumnNormalHeader,
    ListHeaderButtonContainer,
    ListHeaderButton,
    ListHeaderButtonIconContainer,
    ListHeaderButtonSvg,
    ListRowContainer,
    ListCellCheckbox,
    ListCells,
    ListVideoCell,
    VideoRow,
    VideoThumbnail,
    VideoRightSection,
    CourseTitleWrapper,
    CourseDescriptionWrapper,
    CourseTitle,
    ThumbnailAnchor,
    ThumbnailContainer,
    CourseDescription,
    ListNormalCell,
    IconAndTextRow,
    VisibilityIcon,
    ListCellActions,
    ListCellActionsContentWrapper,
    EditDraftButton,
    EditDraftButtonLabel
} from './CreatorComponents'

//Components
import NoThumbnailAvaible from '../../components/NoThumbnailAvaible/NoThumbnailAvaible'
import ScrollingDiv from '../../components/ScrollingDiv/ScrollingDiv'
import DraftIcon from './Icons/DraftIcon'

const mapState = (state) => ({
    currentUser: state.user.currentUser,
    courses: state.courses.creatorCourses
})

const Creator = () => {
    const { currentUser, courses } = useSelector(mapState)
    const dispatch = useDispatch()
    const history = useHistory()
    const [checkboxState, setCheckboxState] = useState({})
    const [totalCheckboxState, setTotalCheckboxState] = useState(false)

    useEffect(() => {
        courses.map((course, courseIndex) => {
            setCheckboxState( {
                ...checkboxState,
                [courseIndex]: false
            })
        })
        dispatch(
            getCreatorCourses(currentUser.id)
        )
    }, [])

    useEffect(() => {
        if (!checkUserIsCreator(currentUser)) {
            history.push("/creator/upgrade")
        }
    }, [currentUser])

    const toggleCheckbox = checkboxID => {
        const newState = !checkboxState[checkboxID]
        setCheckboxState( {
            ...checkboxState,
            [checkboxID]: newState
        })
    }

    return (
        <>
            <CreatorNavbar>
                <ReturnNavbarButton to="/dashboard">Dashboard</ReturnNavbarButton>
                <SearchBar>
                    <SearchInput />
                </SearchBar>
                <DashboardNavbarButton to="/creator/create-course/new">Create</DashboardNavbarButton>
            </CreatorNavbar>
            <MainSection>
                <SectionTitleContainer>
                    <SectionTitle>Courses</SectionTitle>
                </SectionTitleContainer>
                <ScrollingDiv>
                    <CoursesListSection>
                        <ListHeader>
                            <ListTableHeader>
                                <ListColumnHeader>
                                    <CheckboxLit onClick={() => setTotalCheckboxState(!totalCheckboxState)}>
                                        <CheckboxContainer>
                                            <Checkbox checked={totalCheckboxState}>
                                                { totalCheckboxState &&
                                                    <CheckboxCheckmark />
                                                }
                                            </Checkbox>
                                        </CheckboxContainer>
                                    </CheckboxLit>
                                </ListColumnHeader>
                                <ListVideoColumnHeader>
                                    <ListHeaderName><span>Video</span></ListHeaderName>
                                </ListVideoColumnHeader>
                                <ListColumnNormalHeader>
                                    <ListHeaderName><span>Visibility</span></ListHeaderName>
                                </ListColumnNormalHeader>
                                <ListColumnNormalHeader>
                                    <ListHeaderName><span>Price</span></ListHeaderName>
                                </ListColumnNormalHeader>
                                <ListColumnNormalHeader>
                                    <ListHeaderButtonContainer>
                                        <ListHeaderButton>
                                            <span>Date</span>
                                            <ListHeaderButtonIconContainer>
                                                <ListHeaderButtonSvg>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down" class="svg-inline--fa fa-arrow-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                        <path fill="currentColor" d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z" />
                                                    </svg>
                                                </ListHeaderButtonSvg>
                                            </ListHeaderButtonIconContainer>
                                        </ListHeaderButton>
                                    </ListHeaderButtonContainer>
                                </ListColumnNormalHeader>
                            </ListTableHeader>
                        </ListHeader>
                        <ListCells>
                            {
                                courses.map((course, index) => {
                                    return (
                                        <ListRowContainer key={index}>
                                            <ListCellCheckbox>
                                                <CheckboxLit onClick={() => toggleCheckbox(index)}>
                                                    <CheckboxContainer>
                                                        <Checkbox checked={checkboxState[index]}>
                                                            { checkboxState[index] &&
                                                                <CheckboxCheckmark />
                                                            }
                                                        </Checkbox>
                                                    </CheckboxContainer>
                                                </CheckboxLit>
                                            </ListCellCheckbox>
                                            <ListVideoCell>
                                                <VideoRow>
                                                    <VideoThumbnail>
                                                        <ThumbnailAnchor to="/">
                                                            <ThumbnailContainer>
                                                                <NoThumbnailAvaible></NoThumbnailAvaible>
                                                            </ThumbnailContainer>
                                                        </ThumbnailAnchor>
                                                    </VideoThumbnail>
                                                    <VideoRightSection>
                                                        <CourseTitleWrapper>
                                                            <CourseTitle to="/">Lorem Ipsum</CourseTitle>
                                                        </CourseTitleWrapper>
                                                        <CourseDescriptionWrapper>
                                                            <CourseDescription>Add description</CourseDescription>
                                                        </CourseDescriptionWrapper>
                                                    </VideoRightSection>
                                                </VideoRow>
                                            </ListVideoCell>
                                            <ListNormalCell>
                                                <IconAndTextRow>
                                                    <VisibilityIcon>
                                                        <DraftIcon />
                                                    </VisibilityIcon>
                                                    <span>
                                                        Draft
                                                    </span>
                                                </IconAndTextRow>
                                            </ListNormalCell>
                                            <ListNormalCell></ListNormalCell>
                                            <ListCellActions>
                                                <ListCellActionsContentWrapper>
                                                    <EditDraftButton>
                                                        <EditDraftButtonLabel>Edit draft</EditDraftButtonLabel>
                                                    </EditDraftButton>
                                                </ListCellActionsContentWrapper>
                                            </ListCellActions>
                                        </ListRowContainer>
                                    )
                                })
                            }
                        </ListCells>
                    </CoursesListSection>
                </ScrollingDiv>
            </MainSection>
        </>
    )
}


export default Creator
