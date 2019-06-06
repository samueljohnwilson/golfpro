import React, { Component } from 'react';

import Courses from './Courses';
import Profile from './Profile';
import Rankings from './Rankings';
import Stats from './Stats';
import UserOutline from './UserOutline';


class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    }
  }

  render() {
    let content = <UserOutline />;
    switch (this.state.content) {
      case 'profile': content = <Profile />;
        break;

      case 'stats': content = <Stats />;
        break;

      case 'courses': content = <Courses />;
        break;
      
      case 'rankings': content = <Rankings />;
        break;

      default: content = <UserOutline />;
        break;
    }

    return (
      <div className="content-wrapper">
        {content}
      </div>
    );
  }
}

export default Content;