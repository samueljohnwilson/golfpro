import React, { Component } from 'react';
import background from '../assets/background-with-logo.png';

import './Main.css';

class Landing extends Component {
  clickLogin = () => {
    this.props.loginClick();
  }

  render() {
    return (
      <div className="container landing-container">
        <img src={background} className="background-image" alt="background" />
        <button className="primary-button">
          Sign up
          {/* <img src={forwardIcon} className="forward-icon" alt="forward-icon" /> */}
        </button>
        <button className="primary-button" onClick={this.clickLogin}>
          Log in
          {/* <img src={forwardIcon} className="forward-icon" alt="forward-icon" /> */}
        </button>
      </div>
    );
  }
}

export default Landing;
