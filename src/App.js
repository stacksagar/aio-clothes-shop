import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import ShopComponent from './components/shop-component/ShopComponent';
import { SigninAndSignup } from './components/Signin-Signup/SigninAndSignup';
import Homepage from './Homepage';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopComponent} />
        <Route path="/signin-signup" component={SigninAndSignup} />
      </Switch>
    </>
  );
}

export default App;
