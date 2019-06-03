import React, { Component } from 'react';
import Landing from './Landing';
import Header from './Header';
import StatCard from './StatCard';

class Main extends Component {
  render() {
    const isLoggedIn = true;
    let display;
    
    if (isLoggedIn) {
      display = <div><Header /><StatCard /></div>
    } else {
      display = <Landing />
    }

    return (
      <div>{display}</div>
    );
  }
}

export default Main;
