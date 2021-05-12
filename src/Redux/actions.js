import actionTypes from './types';

export const SET_CURRENT_USER = (user) => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user,
});

export const TOGGLE_CART_HIDDEN = () => ({
  type: actionTypes.TOGGLE_CART_HIDDEN,
});

export const addCartItem = (item) => ({
  type: actionTypes.ADD_CART_ITEM,
  payload: item,
});

export const removeCartItem = (item) => ({
  type: actionTypes.REMOVE_CART_ITEM,
  payload: item,
});

export const setAnimation = (bool) => ({
  type: actionTypes.SET_ANIMATION,
  payload: bool,
});

export const clearCartItem = (id) => ({
  type: actionTypes.CLEAR_ITEM,
  payload: id,
});

export const clearAllCart = () => ({
  type: actionTypes.ALL_CART_CLEAR
});