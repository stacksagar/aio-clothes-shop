import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { clearAllCart } from '../../../Redux/actions';
import {
  selectCartItems,
  selectTotalPrice,
} from '../../../Redux/selectors/cart.selectors';
import StripeButton from '../../../Stripe/StripeButton';
import './Checkout.scss';
import CheckoutItem from './CheckoutItem';

const Checkout = ({ cartItems, totalPrice, clearAll}) => {
  return (
    <div className="Checkout">
      <div className="checkout-header">
        <div>
          <span>Product</span>
          <span>Description</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Remove</span>
        </div>
      </div>

      <div className="checkout-products">
        {cartItems.length ? (
          <>
            {cartItems.map((item) => (
              <CheckoutItem key={item.id} item={item} />
            ))}

            <div className="checkout-footer">
              <StripeButton price={totalPrice} />

              <p className="totalPrice ml-5">TOTAL PRICE: $<b>{totalPrice}</b></p>
              
              <button onClick={clearAll} className="clearAll focus:border-transparent focus:outline-none focus:ring-4 text-white bg-red-600 px-7 py-2 rounded"> Clear ALL </button>
            </div>
            
          </>
        ) : (
          <h1 className="p-3 text-3xl text-red-700 text-center">
            Your cart is empty!
          </h1>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectTotalPrice,
});

const mapDispatchToProps = dispatch => ({
  clearAll: () => dispatch(clearAllCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
