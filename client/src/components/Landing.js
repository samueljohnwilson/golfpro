import React, { Component } from 'react';

import LandingModal from './LandingModal';
import background from '../assets/background-with-logo.png';
import './Main.css';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      showModal: false,
      modalId: '',
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(event) {
    this.setState({ 
      modalId: event.currentTarget.id,
      showModal: !this.state.showModal
    });
  };

  render() {
    const buttons = [];

    ([
      { 
        id: 'signup',
        text: 'Sign up'
      },
      { 
        id: 'login',
        text: 'Log in'
      },
    ]).forEach((button) => {
      buttons.push(
        <button 
          className="button primary-button"
          id={button.id}
          onClick={this.toggleModal}
        >
          {button.text}
        </button>
      )
    })

    return (
      <div className="landing-wrapper">
        <LandingModal
          showModal={this.state.showModal}
          id={this.state.modalId}
          toggleModal={this.toggleModal} 
        />
        <img 
          src={background}
          className="background-image"
          alt="background"
        />
        {buttons}
      </div>
    );
  }
}

export default Landing;
