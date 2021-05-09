import React,{useEffect} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {Switch,Route, Redirect} from 'react-router-dom'; 
import {createStructuredSelector} from 'reselect';

import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Contact from './pages/contact/contact.component';
import CheckoutPage from './pages/checkout/checkout.component';

import {checkUserSession} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors';


const App = ({ checkUserSession,currentUser }) => {
 
  useEffect(() => {
    checkUserSession();
  },[checkUserSession]);
  
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path = '/' component = {HomePage}/>
        <Route  path = '/shop' component = {ShopPage}/>
        <Route  path = '/contact' component = {Contact}/>
        <Route exact path = '/checkout' component = {CheckoutPage}/>
        <Route  exact path = '/signin' 
        render={  () => currentUser ? 
          (<Redirect to = '/'/>) : (<SignInAndSignUpPage />)
        
        }/>

        </Switch>
    </div>
  );
}



const mapStateToProps = createStructuredSelector(
{ currentUser : selectCurrentUser,
  
});

const mapDispatchToProps = dispatch => ({
  checkUserSession : () => dispatch(checkUserSession())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
