import React, { Component } from 'react';

import Landing from './Landing';
import Header from './Header';
import Content from './Content'

class Main extends Component {
  render() {
    const isLoggedIn = true;
    let display;
    
    if (isLoggedIn) {
      display = <div className="main-inner-wrapper"><Header /><Content /></div>
    } else {
      display = <div className="main-inner-wrapper"><Landing /></div>
    }

    return (
      <div className="main-wrapper">{display}</div>
    );
  }
}

export default Main;
