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
import Signup from './components/Signup/Signup'
import Signin from './components/Signin/Signin'
import ForgotPassword from './components/ForgotPassword/ForgotPassword'
import Admin from './components/Admin/Admin'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Cart from './pages/Cart/Cart'
import Payment from './pages/Payment/Payment'
import PaymentSuccess from './pages/PaymentSuccess/PaymentSuccess'
import Dashboard from './pages/Dashboard/Dashboard'
import Creator from './pages/Creator/Creator'
import UpgradeAccount from './pages/UpgradeAccount/UpgradeAccount'
import SubscribePlan from './pages/SubscribePlan/SubscribePlan'
import StripeWrapper from './components/StripeWrapper/StripeWrapper'

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
        <Route path="/discover" render={() => (
          <Discover />
        )} />
        <Route path="/product/:productID" render={() => (
          <ProductDetails />
        )} />
        <Route path="/subscribe-plan/:planID" render={() => (
          <StripeWrapper>
            <WithAuth>
              <SubscribePlan />
            </WithAuth>
          </StripeWrapper>
        )} />
        <Route path="/cart" render={() => (
          <Cart />
        )} />
        <Route path="/checkout" render={() => (
          <WithAuth>
            <Payment />
          </WithAuth>
        )} />
        <Route path="/admin" render={() => (
          <WithAdminAuth>
            <Admin />
          </WithAdminAuth>
        )} />
        <Route path="/payment-success" render={() => (
          <PaymentSuccess />
        )} />
        <Route exact path="/dashboard" render={() => (
          <WithAuth>
            <Dashboard />
          </WithAuth>
        )} />
        <Route exact path="/creator" render={() => (
          <WithAuth>
            <Creator />
          </WithAuth>
        )} />
        <Route exact path="/creator/upgrade" render={() => (
          <WithAuth>
            <UpgradeAccount />
          </WithAuth>
        )} />
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
          <div className="w-100" style={{ maxWidth: "400px" }}>
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
