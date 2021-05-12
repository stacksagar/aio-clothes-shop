import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { addCartItem, setAnimation } from '../../../Redux/actions';
import { selectCartAnimation, selectCartItems,} from '../../../Redux/selectors/cart.selectors';
import './itemCollectin.css';

const ItemCollection = ({ item, addItem, animation, setAnimation }) => {

  const { name, price, imageUrl } = item;
  const cartBtnAction = () => {
    addItem(item);
    setAnimation(!animation);
    setTimeout(() => {
      setAnimation(!animation);
    }, 1000);
  };

  return (
    <div className="ItemCollection">
      <img src={imageUrl} alt="product" />
      <div>
        <p>{name}</p>
        <span>${price}</span>
      </div>
      <button
        onClick={cartBtnAction}
        className="cartBtn focus:ring-4 focus:border-transparent focus:outline-none">
        Add TO Cart
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addCartItem(item)),
  setAnimation: (bool) => dispatch(setAnimation(bool)),
});

const mapStateToProps = createStructuredSelector({
  cart: selectCartItems,
  animation: selectCartAnimation,
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemCollection);
