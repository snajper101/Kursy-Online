import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

//Making sure dashboard is not accesible when user is loged out
export default function PrivateRoute({ component: Component, ...rest}) {
    const { currentUser } = useAuth()
   
    return (
        <Route
            {...rest}
            render={props=>{
                return currentUser ? <Component {...props} /> : <Redirect to="/signin" />
            }}
        >
        </Route>
    )
}
