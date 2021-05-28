import React from 'react';
import { connect } from 'react-redux';
import { SelectCollection } from '../../../Redux/selectors/local.database.selector';
import ItemCollection from '../item-collection/ItemCollection';
import './Shop-collection.scss';

const ShopCollection = ({ collection }) => {
  const { title, items } = collection;

  return (
    <div>
      <h1 className="text-4xl p-3">{title}</h1>
      <div className="shop_collection">
        {items
          .map((item) => (
            <ItemCollection key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  collection: SelectCollection(props.match.params.category)(state),
});

export default connect(mapStateToProps)(ShopCollection);