import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';
import { setCurrentUser } from './redux/User/user.actions';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { auth, handleUserProfile } from './firebase';

//Hoc
import WithAuth from "./hoc/withAuth"

//Pages
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import MainPage from './components/MainPage';
import Discover from './components/Discover/Discover';
import Checkout from './components/Checkout/Checkout';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Dashboard from './components/Dashboard/Dashboard';

const App = props => {
  const dispatch = useDispatch()

  useEffect(() => {
    const authListener = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth)
        userRef.onSnapshot(snapshot => {
          dispatch(setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          }))
        })
      }

      dispatch(setCurrentUser(userAuth))
    })

    return () => {
      authListener()
    }
  }, [])

  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/discover" component={Discover} />
          <Route path="/checkout" component={Checkout} />
          <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
            <div className="w-100" style={{ maxWidth: "400px" }}>
              <Route exact path="/dashboard" render={() => (
                <WithAuth>
                  <Dashboard />
                </WithAuth>
              )} />
              <Route path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" render={() => (
                <Signup />
              )} />
              <Route path="/signin" render={() => (
                <Signin />
              )} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </div>
          </Container>
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App;
