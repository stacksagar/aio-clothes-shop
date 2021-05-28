import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { TOGGLE_CART_HIDDEN } from '../../../Redux/actions';
import { selectCartAnimation, selectCartItems,  selectCartItemsCount } from '../../../Redux/selectors/cart.selectors';
import './CartIcon.scss';
const CartIcon = ({ toggleHidden, cartItemsCount, animation }) => {
  
  return (
    <div className="CartIcon" onClick={toggleHidden}>
      <h1 className="cart-bag">👜</h1>
      <span className={`cart-count ${animation && 'cartCountAnim'}`}>
        {cartItemsCount}
      </span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems, 
  cartItemsCount: selectCartItemsCount,
    animation: selectCartAnimation
  });

const mapDispatchToProps = (dispatch) => ({
  toggleHidden: () => dispatch(TOGGLE_CART_HIDDEN()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);