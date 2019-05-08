import React, { Component } from 'react';
import background from '../assets/background-with-logo.png';

import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="landing-container">
        <img src={background} className="background-image" alt="background" />
        <button className="button">
          Sign up
          {/* <img src={forwardIcon} className="forward-icon" alt="forward-icon" /> */}
        </button>
        <button className="button">
          Log in
          {/* <img src={forwardIcon} className="forward-icon" alt="forward-icon" /> */}
        </button>
      </div>
    );
  }
}

export default Landing;