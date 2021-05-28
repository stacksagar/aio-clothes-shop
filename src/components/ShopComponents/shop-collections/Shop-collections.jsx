import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsAndMakeArray } from '../../../Redux/selectors/local.database.selector';
import PreviewComponent from '../preview-component/PreviewComponent';
import './Shop-collections.css';

const ShopCollections = ({ collections }) => (
  <div className="ShopComponent">
    {collections.map(({ id, ...collections }) => (
      <PreviewComponent key={id} {...collections} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsAndMakeArray,
});

export default connect(mapStateToProps)(ShopCollections);