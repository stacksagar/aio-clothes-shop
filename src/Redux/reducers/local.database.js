import actionTypes from '../types';

const INITIAL_STATE = {
  // shop category
  categories: [    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: 'shop/sneakers',
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens',
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens',
    },
  ],
  // shop collection > TODO pull data from firebase firestore
  collections: null,
  isFetching: false,
  errorMessage: '',
};

const localDatabaseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_COLLECTIONS:
      return { ...state, collections: action.payload };

    case actionTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true,
      };

    case actionTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };

    case actionTypes.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default localDatabaseReducer;