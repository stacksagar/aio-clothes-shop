import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import CartDropdown from './CartDropdown';

const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

const CartDropdownContainer = () => (
  <Query query={GET_CART_HIDDEN}>
    {({ data }) => {
      return <CartDropdown hidden={data.cartHidden} />;
    }}
  </Query>
);

export default CartDropdownContainer;
