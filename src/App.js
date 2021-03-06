import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import Header from './components/HeaderComponents/Header';
import ShopComponent from './components/ShopComponents/shop-collections/ShopRouteComponent';
import Signin from './components/Signin-Signup/Signin.jsx';
import Signup from './components/Signin-Signup/Signup.jsx';
import Homepage from './Homepage';
import {} from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { checkUserSession } from './Redux/actions';
import { selectCurrentUser } from './Redux/selectors/user.selectors';
import { createStructuredSelector } from 'reselect';
import Checkout from './components/CartComponents/checkout/Checkout';

const App = ({ currentUser, checkUserSession }) => {

  React.useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  // React.useEffect(() => {
  //   let unsubscribe;
  //   const getUser = async () => {
  //     unsubscribe = await auth.onAuthStateChanged((user) => {
  //       if (user) {
  //         const userRef = createUserProfileDocument(user);
  //         userRef
  //           .then((ref) => ref.get())
  //           .then((getData) => {
  //             setCurrentUser({ id: getData.id, ...getData.data() });
  //           });
  //       }
  //     });
  //   };
  //   getUser();
  //   return function cleanup() {
  //     unsubscribe();
  //   };
  // }, [setCurrentUser]);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopComponent} />
        <Route path="/checkout" component={Checkout} />
        <Route
          path="/signin"
          render={() => currentUser ? Redirect('/shop') :  <Signin />}
        />
        <Route
          path="/signup"
          render={() => currentUser ? Redirect('/shop') : <Signup />}
        />
      </Switch>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
