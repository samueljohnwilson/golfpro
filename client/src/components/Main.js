import React, { Component } from 'react';

import Landing from './Landing';
import Header from './Header';
import StatCard from './StatCard';

class Main extends Component {
  render() {
    const isLoggedIn = false;
    let display;
    
    if (isLoggedIn) {
      display = <div className="main-inner-wrapper"><Header /><StatCard /></div>
    } else {
      display = <div className="main-inner-wrapper"><Landing /></div>
    }

    return (
      <div className="main-wrapper">{display}</div>
    );
  }
}

export default Main;
