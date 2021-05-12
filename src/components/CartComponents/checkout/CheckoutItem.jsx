import React from 'react';
import { connect } from 'react-redux';
import { addCartItem, removeCartItem, clearCartItem } from '../../../Redux/actions';

const CheckoutItem = ({ item, addItem, removeItem, clearItem }) => {
  const { name, price, imageUrl, quantity, id } = item;
  return (
    <div className="checkout-product">
      <img src={imageUrl} alt="product" />
      <span className="p-name">{name}</span>
      <div className="p-quantity">
        <button 
        onClick={() => removeItem(item)} className="focus:border-transparent focus:outline-none focus:ring-2">
          {' '}
          -{' '}
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => addItem(item)}
          className="focus:border-transparent focus:outline-none focus:ring-2"
        >
          {' '}
          +{' '}
        </button>
      </div>
      <span className="p-price">${price}</span>
      <button onClick={()=>clearItem(id)} className="bg-red-500 focus:outline-none focus:border-transparent focus:ring-4 rounded px-3 pb-2 pt-1 text-white"
      >
        Remove
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addCartItem(item)),
  removeItem: (item) => dispatch(removeCartItem(item)),
  clearItem: (id) => dispatch(clearCartItem(id)),
});
 

export default connect(null, mapDispatchToProps)(CheckoutItem);
