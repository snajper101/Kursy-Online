import React from 'react'
import { useSelector } from 'react-redux'
import { checkUserIsAdmin } from '../../Utils'
import { Header, LinkElement } from './AdminToolbarComponents'
import { useHistory } from 'react-router'

const mapState = ( {user} ) => ({
    currentUser: user.currentUser
})

const AdminToolbar = props => {
    const { currentUser } = useSelector(mapState)
    const history = useHistory()

    const isAdmin = checkUserIsAdmin(currentUser)
    if (!isAdmin) return null
    if (history.location.pathname.indexOf("creator/create-course/") >= 0) return null

    return (
        <>
            <Header>
                <LinkElement to="/admin">Admin Panel</LinkElement>
            </Header>
        </>
    )
}

export default AdminToolbar
