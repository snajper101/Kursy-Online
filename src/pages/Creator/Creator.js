import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import { checkUserIsCreator } from '../../Utils'

//Styled Components

//Components
import Navbar from '../../components/Navbar'
import DashboardNav from '../../components/DashboardNav/DashboardNav'

const mapState = (state) => ({
    currentUser: state.user.currentUser
})


const Creator = () => {
    const { currentUser } = useSelector(mapState)
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
        </>
    )
}


export default Creator
