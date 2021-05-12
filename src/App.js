import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import Header from './components/HeaderComponents/Header';
import ShopComponent from './components/ShopComponents/shop-collections/ShopRouteComponent';
import Signin from './components/Signin-Signup/Signin.jsx';
import Signup from './components/Signin-Signup/Signup.jsx';
import Homepage from './Homepage';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { SET_CURRENT_USER } from './Redux/actions';
import { selectCurrentUser } from './Redux/selectors/user.selectors';
import { createStructuredSelector } from 'reselect';
import Checkout from './components/CartComponents/checkout/Checkout';

class App extends React.Component {
  unsubscribeAuthUser = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeAuthUser = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeAuthUser = null;
  }

  render() {
    const { currentUser } = this.props;
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopComponent} />
          <Route path="/checkout" component={Checkout} />
          <Route
            path="/signin"
            render={() => (currentUser ? <Redirect to="/shop" /> : <Signin />)}
          />
          <Route
            path="/signup"
            render={() => (currentUser ? <Redirect to="/shop" /> : <Signup />)}
          />
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(SET_CURRENT_USER(user)),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
