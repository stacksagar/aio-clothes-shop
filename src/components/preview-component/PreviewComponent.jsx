import React from 'react';
import ItemCollection from '../item-collection/ItemCollection';
import './previewComponent.css';

const PreviewComponent = ({ title, items }) => {
  return (
    <div className="PreviewColletion">
      <h1>{title}</h1>
      <div className="PreviewColletionContainer">
        {items
          .filter((_, i) => i < 4)
          .map(({ id, ...OtherItem }) => (
            <ItemCollection key={id} {...OtherItem} />
          ))}
      </div>
    </div>
  );
};

export default PreviewComponent;
