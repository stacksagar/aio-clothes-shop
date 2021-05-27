import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import ShopCollections from './Shop-collections';

const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const ShopCollectionContainer = () => (
  <Query query={GET_COLLECTIONS}>
    {({ loading, data }) => {
   if (loading) return <h1 className="text-5xl mt-20 w-100vw text-center">Loading...</h1> 
      return <ShopCollections collections={data.collections} />;
    }}
  </Query>
);

export default ShopCollectionContainer;

// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { selectIsCollectionFetching } from '../../../Redux/selectors/local.database.selector';
// import WithSpinner from '../../Spinner/Spinner.component';
// const mapStateToProps = createStructuredSelector({
//   isLoading: selectIsCollectionFetching,
// });
// const ShopCollectionsContainer = connect(mapStateToProps)(
//   WithSpinner(ShopCollections)
// );
// export default ShopCollectionsContainer;
