import {} from '../firebase/firebase.utils';
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
  type: actionTypes.ALL_CART_CLEAR,
});

export const setCollections = (collections) => ({
  type: actionTypes.SET_COLLECTIONS,
  payload: collections,
});

export const checkUserSession = (get) => ({
  type: actionTypes.CHECK_USER_SESSION,
});

// * fething data from server
export const fetchCollectionsStart = () => ({
  type: actionTypes.FETCH_COLLECTION_START,
});

export const fetchCollectionsSuccess = (collection) => ({
  type: actionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collection,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: actionTypes.FETCH_COLLECTION_FAILURE,
  payload: errorMessage,
});

/* TODO GOOGLE AND EMAIL SIGNIN */

export const googleSigninStart = () => ({
  type: actionTypes.GOOGLE_SIGNIN_START,
});

export const emailSigninStart = (emailAndPassword) => ({
  type: actionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword,
});

export const signinSuccess = (user) => ({
  type: actionTypes.SIGNIN_SUCCESS,
  payload: user,
});

export const signinFailure = (error) => ({
  type: actionTypes.SIGNIN_FAILURE,
  payload: error,
});

// Signout Actions
export const signoutStart = () => ({
  type: actionTypes.SIGN_OUT_START,
});
export const signoutFailure = () => ({
  type: actionTypes.SIGN_OUT_FAILURE,
});
export const signoutSuccess = () => ({
  type: actionTypes.SIGN_OUT_SUCCESS,
});

// SIGNUP USER
export const signupStart = (userCreadentials) => ({
  type: actionTypes.SIGN_UP_START,
  payload: userCreadentials,
});

export const signupSuccess = ({ user, additionalData }) => ({
  type: actionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signupFailure = (error) => ({
  type: actionTypes.SIGN_UP_FAILURE,
  payload: error,
});
