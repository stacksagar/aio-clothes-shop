import actionTypes from '../types';
import { addToCartItem, removeToCartItem } from '../utilities/cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  animation: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };

    case actionTypes.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: [...addToCartItem(state.cartItems, action.payload)],
      };
    case actionTypes.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: [...removeToCartItem(state.cartItems, action.payload)],
      };

    case actionTypes.CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    case actionTypes.ALL_CART_CLEAR:
      return {
        ...state,
        cartItems: [],
      };

    case actionTypes.SET_ANIMATION:
      return { ...state, animation: !state.animation };

    default:
      return state;
  }
};

export default cartReducer;
