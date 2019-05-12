import React, { Component } from 'react';
import background from '../assets/background-with-logo.png';

import './Main.css';

class Landing extends Component {
  loginClick = () => {
    this.props.loginClick();
  }

  signUpClick = () => {
    this.props.signUpClick();
  }

  render() {
    return (
      <div className="container landing-container">
        <img src={background} className="background-image" alt="background" />
        <button className="primary-button" onClick={this.signUpClick}>
          Sign up
        </button>
        <button className="primary-button" onClick={this.loginClick}>
          Log in
        </button>
      </div>
    );
  }
}

export default Landing;
