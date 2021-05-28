import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { SelectCollection } from '../../../Redux/selectors/local.database.selector';
import ItemCollection from '../item-collection/ItemCollection';
import './Shop-collection.scss';

const ShopCollection = ({ match, collection }) => {
  return (
    <div>
      <h1 className="text-4xl p-3">{collection && collection.title}</h1>
      <div className="shop_collection">
        {collection ? (
          collection.items.map((item) => (
            <ItemCollection key={item.id} item={item} />
          ))
        ) : (
          <h1 className="text-red-500 text-4xl text-center">
            Server can't find <b className="bg-red-500 text-yellow-300 px-2 rounded">{match.params.category}</b> category!
          </h1>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  collection: SelectCollection(props.match.params.category)(state),
});

export default connect(mapStateToProps)(ShopCollection); 
