import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signUpUserStart } from '../../redux/User/user.actions'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    userError: user.userError
})

const Signup = props => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { currentUser, userError } = useSelector(mapState)
    const [ displayName, setDisplayName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ confirmPassword, setConfirmPassword ] = useState("")
    const [ errors, setErrors ] = useState([])

    useEffect(() => {
        if (currentUser) {
            resetForm()
            history.push("/")
        }
    }, [currentUser])

    useEffect(() => {
        if (Array.isArray(userError) && userError.length > 0) {
            setErrors(userError)
        }
    }, [userError])

    const resetForm = () => {
        setDisplayName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setErrors([])
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        dispatch(signUpUserStart({
            displayName,
            email,
            password,
            confirmPassword
        }))
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {errors.length > 0 && (
                        <Form.Group id="errors">
                            {errors.map((error, index) => {
                                return (
                                    <Alert key={index} variant="danger">{error}</Alert>
                                )
                            })}
                        </Form.Group>
                    )}
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group id="name">
                            <Form.Label>Full name</Form.Label>
                            <Form.Control type="name" name="displayName" value={displayName} onChange={e => setDisplayName(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" name="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Button className="w-100" type="submit">Signup</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to="/signin">Sign in</Link>
            </div>
        </>
    )
}

export default Signup
