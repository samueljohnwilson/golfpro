import React, { Component } from 'react';

import Courses from './Courses';
import Header from './Header';
import Landing from './Landing';
import Profile from './Profile';
import Rankings from './Rankings';
import Stats from './Stats';
import Profile from './Profile';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      content: 'user',
    }

    this.selectContent = this.selectContent.bind(this);
  }

  selectContent(event) {
    this.setState({ content: event.currentTarget.id });
  }

  render() {
    const isLoggedIn = true;
    let content = <Profile />;

    switch (this.state.content) {
      case 'profile': content = <Profile />;
        break;

      case 'stats': content = <Stats />;
        break;

      case 'courses': content = <Courses />;
        break;
      
      case 'rankings': content = <Rankings />;
        break;

      case 'user': content = <Profile />;
        break;

      default: content = <Profile />;
        break;
    }

    let display;
    
    if (isLoggedIn) {
      display = <div className="content-wrapper"><Header selectContent={this.selectContent}/>{content}</div>
    } else {
      display = <div className="content-wrapper"><Landing /></div>
    }

    return (
      <div className="main-wrapper">{display}</div>
    );
  }
}

export default Main;
