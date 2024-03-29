import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { googleSignInStart, emailSignInStart } from '../../redux/User/user.actions'
import { Form, Button, Card } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})

const Signin = props => {
    const { currentUser } = useSelector(mapState)
    const dispatch = useDispatch()
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        if (currentUser) {
            resetForm()
            history.push("/")
        }
    }, [currentUser])

    const resetForm = () => {
        setEmail("")
        setPassword("")
    }

    const handleSubmit = event => {
        event.preventDefault()
        dispatch(emailSignInStart({ email, password }))
    }

    const handleGoogleSignIn = () => {
        dispatch(googleSignInStart())
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign In</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group id="buttons">
                            <Button className="w-100" name="email" type="submit">Sign in</Button>
                            <Button className="w-100" name="email" onClick={handleGoogleSignIn}>Sign in with Google</Button>
                        </Form.Group>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign up</Link>
            </div>
        </>
    )
}

export default Signin