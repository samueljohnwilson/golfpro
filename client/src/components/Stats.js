import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';

import './Main.css';
import './Stats.css';
import defaultAvatar from '../assets/avatar.jpeg'

class StatCard extends Component {
  render() {
    const profilePic = defaultAvatar;
    const username = 'Al User';
    return (
    <div className="container statcard-container">
      <Card className="profile-card">
        <CardContent>
          <CardHeader
            avatar={
              <Avatar 
                alt={this.props.username} 
                src={profilePic} 
                className="avatar"
              />
            }

            title={username}
          />
          <Divider />
          <button className="button primary-button">Add stats</button>
        </CardContent>
      </Card>
    </div>
    );
  }
}

export default StatCard;