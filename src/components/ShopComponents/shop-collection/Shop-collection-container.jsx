// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { selectIsCollectionIsLoaded } from '../../../Redux/selectors/local.database.selector';
// import WithSpinner from '../../Spinner/Spinner.component';
// import ShopCollection from './Shop-collection';

// const mapStateToProps = createStructuredSelector({
//   isLoading: (state) => !selectIsCollectionIsLoaded(state),
// });

// const ShopCollectionContainer = connect(mapStateToProps)(
//   WithSpinner(ShopCollection)
// );
// export default ShopCollectionContainer;

// :: With Apollo-GraphQL

import ShopCollection from './Shop-collection';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
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

const ShopCollectionContainer = ({ match }) => (
  <Query
    query={GET_COLLECTION_BY_TITLE}
    variables={{ title: match.params.category }}
  >
    {({ loading, data }) => { 
      if (loading) return <h1>Loading.....</h1>;
      return <ShopCollection collection={data.getCollectionsByTitle} />;
    }}
  </Query>
);

export default ShopCollectionContainer;
