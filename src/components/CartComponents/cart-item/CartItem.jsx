import React from 'react';
import './CartItem.scss';
import { connect } from 'react-redux'
import { addCartItem, clearCartItem, removeCartItem} from '../../../Redux/actions'

const CartItem = ({item, addItem, removeItem, clearItem}) => {
  const { name, price, quantity, imageUrl, id } = item;
  return (
    <div className="CartItem">
      
      <div className="cartContainer">
        <img className="cartImage" src={imageUrl} alt="" />
        <div className="cartInfo">
          <p className="cartPrice">Price: ${price}</p>
          <div className="cartQuantity">
            <button onClick={()=>removeItem(item)} className="focus:ring-2">-</button>
            <span className="quantity">{quantity}</span>
            <button onClick={()=>addItem(item)} className="focus:ring-2">+</button>
          </div>
          <button onClick={()=>clearItem(id)} className="cartRemove focus:ring-2">Remove</button>
        </div>
      </div>

      <div className="itemName truncate overflow-ellipsis">
      <b>{name}</b>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addCartItem(item)),
  removeItem: item => dispatch(removeCartItem(item)),
  clearItem: id => dispatch(clearCartItem(id))
})

export default connect(null, mapDispatchToProps)(CartItem);