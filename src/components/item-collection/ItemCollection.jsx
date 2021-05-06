import React from 'react';
import './itemCollectin.css';

const ItemCollection = ({ name, imageUrl, price }) => {
  return (
    <div className="ItemCollection">
      <img src={imageUrl} alt="product" />
      <div>
        <p>{name}</p>
        <span>${price}</span>
      </div>
      <button className="cartBtn">Add TO Cart</button>
    </div>
  );
};

export default ItemCollection;
