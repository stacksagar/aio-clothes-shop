import React from 'react';
import './menuItem.css';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ section, history }) => { 
  const { size, imageUrl, title, linkUrl } = section; 
  return (
    <div
      onClick={() => history.push(linkUrl)}
      className={`Menu-item ${size}`}
    >
    <img className="backgroundImage" src={ imageUrl} alt="Image_Loading..."/>
      <div className="content">
        <h1 className="title">{title}</h1>
        <h5 className="subTitle">SHOP NOW</h5>
      </div>
    </div>
  );
};

export default withRouter(MenuItem)
 