import React, { Component } from 'react';
import logo from '../assets/golf-logo-title-white.png'

import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <img src={logo} className="logo" alt="logo" />
      </header>
    );
  }
}

export default Header;