import React, { Component } from 'react';
import ShopData from '../../assets/shop.data';
import PreviewComponent from '../preview-component/PreviewComponent';
import './shopComponent.css'

export default class ShopComponent extends Component {
  state = {
    collections: ShopData,
  };
  
  render() {
    const { collections } = this.state;
    return (
      <div className="ShopComponent">
        {collections.map(({ id, ...collections }) => (
          <PreviewComponent key={id} {...collections} />
        ))}
      </div>
    );
  }
}
