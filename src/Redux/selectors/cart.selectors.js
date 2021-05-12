import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(selectCartItems, (cart) =>
  cart.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectTotalPrice = createSelector(selectCartItems, (items) =>
  items.reduce((acc, item) => acc + item.quantity * item.price, 0)
);

export const selectCartAnimation = createSelector(
  [selectCart],
  (cart) => cart.animation
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);
