import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Switch, Route } from "react-router-dom"
import { checkUserSession } from './redux/User/user.actions'

//Components
import AdminToolbar from './components/AdminToolbar/AdminToolbar'

//Hoc
import WithAuth from "./hoc/withAuth"
import WithAdminAuth from './hoc/withAdminAuth'

//Bootstrap
import { Container } from 'react-bootstrap'

//Pages
import UpdateProfile from './components/UpdateProfile/UpdateProfile'
import MainPage from './components/MainPage'
import Discover from './components/Discover/Discover'
import Checkout from './components/Checkout/Checkout'
import Signup from './components/Signup/Signup'
import Signin from './components/Signin/Signin'
import ForgotPassword from './components/ForgotPassword/ForgotPassword'
import Dashboard from './components/Dashboard/Dashboard'
import Admin from './components/Admin/Admin'
import ProductDetails from './pages/ProductDetails/ProductDetails'

const App = props => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [])

  return (
    <>
      <AdminToolbar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/discover" component={Discover} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/admin" render={() => (
          <WithAdminAuth>
            <Admin />
          </WithAdminAuth>
        )} />
        <Route path="/product/:productID" render={() => (
          <ProductDetails />
        )} />
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
    </>  
  )
}

export default App;
