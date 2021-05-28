import React from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../../Redux/actions';

import ShopCollectionContainer from '../shop-collection/Shop-collection-container';
import ShopCollectionsContainer from './Shop-collections-container';

const ShopComponent = ({ match, fetchCollectionsStart }) => {
  React.useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        component={ShopCollectionsContainer}
      />
      <Route
        exact
        path={`${match.path}/:category`}
        component={ShopCollectionContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopComponent);
