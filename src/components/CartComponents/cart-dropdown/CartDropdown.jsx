import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { clearAllCart, TOGGLE_CART_HIDDEN } from '../../../Redux/actions';
import {
  // selectCartHidden,
  selectCartItems,
} from '../../../Redux/selectors/cart.selectors';
import CartItem from '../cart-item/CartItem';
import './CartDropdown.scss';

const CartDropdown = ({ /* this */ hidden /* come from graphql*/ , cartItems, history, clearAll, toggleCart }) => {
  
  return (
    <div className={`CartDropdown ${hidden && 'hiddenCart'}`}>
      <div className="cartDropdown-container">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <p className="text-red-500 font-semibold text-center">
            Your cart is empty!
          </p>
        )}
      </div>

      <div className="cart-buttons">
        <button
          onClick={() => {
            toggleCart();
            history.push('/checkout');
          }}
          className="checkoutBtn focus:border-transparent focus:outline-none focus:ring-4 text-white  px-7 py-2 rounded"
        >
          {' '}
          CHECKOUT{' '}
        </button>

        <button
          onClick={() => {
            toggleCart();
            clearAll();
          }}
          className="clearAll focus:border-transparent focus:outline-none focus:ring-4 text-white bg-red-600 px-7 py-2 rounded"
        >
          {' '}
          Clear ALL{' '}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  // hidden: selectCartHidden,
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  clearAll: () => dispatch(clearAllCart()),
  toggleCart: () => dispatch(TOGGLE_CART_HIDDEN()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
