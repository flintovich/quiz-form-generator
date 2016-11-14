import React, { Component } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {
  render() {
    return (
      <ul className="header">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create-form">Create new form</Link></li>
      </ul>
    );
  }
}

export default Navigation;
