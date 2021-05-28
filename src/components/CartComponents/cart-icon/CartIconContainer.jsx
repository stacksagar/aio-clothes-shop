import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import CartIcon from './CartIcon';

const TOGGLE_CART_HIDDEN = gql`
 mutation {
    toggleCartHidden @client
 }
`;

const CartIconContainer = () => (
  <Mutation mutation={TOGGLE_CART_HIDDEN}>
    {(toggleCartHidden) => <CartIcon toggleHidden={toggleCartHidden} />}
  </Mutation>
);

export default CartIconContainer;