import React, { Component } from 'react';
import Landing from './Landing';
import Header from './Header';
import Stats from './Stats';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      isLoggedIn: false
    };

    this.loginClick = this.loginClick.bind(this);
    this.signUpClick = this.signUpClick.bind(this);
  }

  loginClick() {
    this.setState({isLoggedIn: true})
  };

  signUpClick() {
    this.setState({})
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let display;
    
    if (isLoggedIn) {
      display = <div><Header /><Stats /></div>
    } else {
      display = <Landing loginClick={this.loginClick}/>
    }

    return (
      <div>{display}</div>
    );
  }
}

export default Main;
