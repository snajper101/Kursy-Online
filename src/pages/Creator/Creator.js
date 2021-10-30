import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import { checkUserIsCreator } from '../../Utils'

//Styled Components
import { CreatorWrapper, CreatorNavbar, CoursesList, CourseElementContainer, SearchInput } from './CreatorComponents'

//Components
import Navbar from '../../components/Navbar'
import DashboardNav from '../../components/DashboardNav/DashboardNav'

const mapState = (state) => ({
    currentUser: state.user.currentUser,
    courses: state.courses.creatorCourses
})


const Creator = () => {
    const { currentUser, courses } = useSelector(mapState)
    const history = useHistory()

    useEffect(() => {
        if (!checkUserIsCreator( currentUser )) {
            history.push("/creator/upgrade")
        }
    }, [currentUser])

    return (
        <>
            <Navbar />
            <DashboardNav />
            <CreatorWrapper>
                <CreatorNavbar>
                    <SearchInput></SearchInput>
                </CreatorNavbar>
                <CoursesList>
                    {
                        courses.map((course, index ) => {
                            return (
                            <CourseElementContainer key={index}>

                            </CourseElementContainer>)
                        })
                    }
                </CoursesList>
            </CreatorWrapper>
        </>
    )
}


export default Creator
