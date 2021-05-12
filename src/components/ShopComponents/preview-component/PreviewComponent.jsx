import React from 'react';
import ItemCollection from '../item-collection/ItemCollection';
import './previewComponent.css';

const PreviewComponent = ({ title, items }) => {
  return (
    <div className="PreviewColletion bg-gray-100 mb-10">

      <h1 className="text-5xl text-yellow-800">{title}</h1>
      <div className="PreviewColletionContainer">
        
        {items
          // .filter((_, i) => i < 9)
          .map((item) => (
            <ItemCollection key={item.id} item={item} />
          ))}
        
      </div>

    </div>
  );
};

export default PreviewComponent;