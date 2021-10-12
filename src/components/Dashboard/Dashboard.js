import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { signOutUserStart } from '../../redux/User/user.actions'

const mapState = ({user}) => ({
    currentUser: user.currentUser
})

const Dashboard = props => {
    const dispatch = useDispatch()
    const { currentUser } = useSelector(mapState)

    const signOut = () => {
        dispatch(signOutUserStart())
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    <strong>Email: </strong>{currentUser && currentUser.email}
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile </Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={() => signOut()}>
                    Log out
                </Button>
            </div>
        </>
    )
}

Dashboard.defaultProps = {
    currentUser: null
}

export default Dashboard
