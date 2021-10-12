import React from 'react'
import { useSelector } from 'react-redux'
import { checkUserIsAdmin } from '../../Utils'
import { Header, LinkElement } from './AdminToolbarComponents'

const mapState = ( {user} ) => ({
    currentUser: user.currentUser
})

const AdminToolbar = props => {
    const { currentUser } = useSelector(mapState)

    const isAdmin = checkUserIsAdmin(currentUser)
    if (!isAdmin) return null

    return (
        <>
            <Header>
                <LinkElement to="/admin">Admin Panel</LinkElement>
            </Header>
        </>
    )
}

export default AdminToolbar
