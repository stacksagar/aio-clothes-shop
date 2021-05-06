import React, { Component } from 'react';
import MenuItem from '../menu-item/MenuItem';
import './directory.css';
import SectionData from '../../assets/sections.data';

export default class Directory extends Component {
  state = {
    sections: [],
  };

  componentDidMount() {
    this.setState({ sections: SectionData });
  }

  render() {
    return (
      <div className="Directory">
        {this.state.sections.map((section, index) => (
          <MenuItem key={index} section={section} />
        ))}
      </div>
    );
  }
}
