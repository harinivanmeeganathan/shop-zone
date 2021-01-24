import React from 'react';
import './App.css';

import {Switch,Route} from 'react-router-dom'; 

import Header from './components/header/header.component';
import SignIn from './components/sign-in/sign-in.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {auth} from '../src/components/firebase/firebase.utils';

class App extends React.Component{
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render (){
  return (
    <div>
      <Header currentUser = {this.state.currentUser} />
      <Switch>
        <Route exact path = '/' component = {HomePage}/>
        <Route  path = '/shop' component = {ShopPage}/>
        <Route  path = '/signin' component = {SignIn}/>

        </Switch>
    </div>
  );
}

}
  
export default App;
