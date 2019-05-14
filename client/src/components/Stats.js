import React, { Component } from 'react';

import './Main.css';
import './Stats.css';

class Stats extends Component {
  render() {
    return (
    <div className="container stats-container">
      <button className="button primary-button">Add stats</button>
    </div>
    );
  }
}

export default Stats;