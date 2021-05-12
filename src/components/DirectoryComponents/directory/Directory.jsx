import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCategories } from '../../../Redux/selectors/local.database.selector';
import MenuItem from '../menu-item/MenuItem';
import './directory.css';

const Directory = ({ categories }) => (
  <div className="Directory">
    {categories.map((category, index) => (
      <MenuItem key={index} section={category} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  categories: selectCategories,
});

export default connect(mapStateToProps)(Directory);
