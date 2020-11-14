import React, { useEffect } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import './App.css';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    // Only want it checked on the first load, so we pass in an empty array into useEffect()
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={() => 
          currentUser ? 
          (<Redirect to='/' />) :
          (<SignInAndSignUpPage />)} 
        />
      </Switch>
    </div>
  );
}

/** 
  createStructuredSelector() automatically passes in top level state instead of doing:
  const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state),
  });
 * */ 

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  // setCurrentUser: user => dispatch(setCurrentUser(user))
  checkUserSession: user => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
