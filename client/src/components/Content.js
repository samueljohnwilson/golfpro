import React, { Component } from 'react';

import Courses from './Courses';
import Profile from './Profile';
import Rankings from './Rankings';
import Stats from './Stats';
import StatCard from './StatCard';


class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    }
  }

  render() {
    let content = <StatCard />;
    switch (this.state.content) {
      case 'profile': content = <Profile />;
        break;

      case 'stats': content = <Stats />;
        break;

      case 'courses': content = <Courses />;
        break;
      
      case 'rankings': content = <Rankings />;
        break;

      default: content = <StatCard />;
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