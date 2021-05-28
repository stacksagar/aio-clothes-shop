import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';

import { signoutStart } from '../../Redux/actions'; 
import { selectCartAnimation } from '../../Redux/selectors/cart.selectors';
import { selectCurrentUser } from '../../Redux/selectors/user.selectors';
import { createStructuredSelector } from 'reselect';

import CartDropdownContainer from '../CartComponents/cart-dropdown/CartDropdownContainer';
import CartIconContainer from '../CartComponents/cart-icon/CartIconContainer';
// it's^ for use graphql 
// import CartIcon from '../CartComponents/cart-icon/CartIcon';
// import CartDropdown from '../CartComponents/cart-dropdown/CartDropdown';

const Header = (props) => {
  const {  currentUser, animation, signOutStart } = props; 

  return (
    <menu className="Header">
      <div className="HeaderContainer">
        <Link to="/" className="logo">
          <img className="w-10" src="https://i.ibb.co/4Fdn4zg/eBrand2.png" alt="" />
        </Link>
        <nav className="options flex justify-between items-center">
          <Link to="/shop" className="option"> SHOP </Link>
          {currentUser ? (
            <div className="flex flex-col justify-center items-center relative">
              <span className="absolute text-white text-xs -top-3 left-2 m-auto">
                <small>{currentUser.displayName || 'John'}</small>
              </span>
              <Link to="/signin" className="m-0 option" onClick={signOutStart}>
                Signout
              </Link>
            </div>
          ) : (
            <>
              <Link className="option" to="/signup"> Signup </Link>
              <Link to="/signin" className="option"> Signin </Link>
            </>
          )}

          <span className={`added ${animation && 'ani'}`}>Added</span>

          <CartIconContainer />
        </nav> 

        {/* <CartDropdown /> */}
        <CartDropdownContainer />
      </div>
    </menu>
  );
};

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    animation: selectCartAnimation,
  })


const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signoutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
