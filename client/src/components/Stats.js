import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import './Main.css';
import './Stats.css';

class Stats extends Component {
  render() {
    return (
    <div className="container stats-container">
      <Card className="profile-card">
        <CardContent>
          <Avatar 
            alt={this.props.username} 
            src={this.props.profilePic} 
            className="avatar"
          />
          <button className="button primary-button">Add stats</button>
        </CardContent>
      </Card>
    </div>
    );
  }
}

export default Stats;