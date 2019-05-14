import React, { Component } from 'react';
import LandingModal from './LandingModal';
import background from '../assets/background-with-logo.png';

import './Main.css';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      showLoginModal: false,
      showSignInModal: false,
    };

    this.toggleLoginModal = this.toggleLoginModal.bind(this);
    this.toggleSignInModal = this.toggleSignInModal.bind(this);
  }

  toggleLoginModal() {
    this.setState({showLoginModal: !this.state.showLoginModal})
  };

  toggleSignInModal() {
    this.setState({showSignInModal: !this.state.showSignInModal})
  }

  render() {
    return (
      <div className="container landing-container">
        <LandingModal
          type="login"
          showModal={this.state.showLoginModal} 
          toggleModal={this.toggleLoginModal} 
        />
        <LandingModal
          type="signin"
          showModal={this.state.showSignInModal} 
          toggleModal={this.toggleSignInModal} 
        />
        <img src={background} className="background-image" alt="background" />
        <button className="button primary-button" onClick={this.toggleSignInModal}>
          Sign up
        </button>
        <button className="button primary-button" onClick={this.toggleLoginModal}>
          Log in
        </button>
      </div>
    );
  }
}

export default Landing;
