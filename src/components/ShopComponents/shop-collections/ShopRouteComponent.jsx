import React from 'react';
import { Route } from 'react-router';
import ShopCollections from './Shop-collections';
import ShopCollection from '../shop-collection/Shop-collection';

const ShopComponent = ({ match }) => ( 

  <div>
    <Route exact path={`${match.path}`} component={ShopCollections} />
    <Route exact path={`${match.path}/:category`} component={ShopCollection} />
  </div>
);

export default ShopComponent;