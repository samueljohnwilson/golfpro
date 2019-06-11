import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';

import DataTable from './DataTable'
import './Main.css';
import './Profile.css';

import defaultAvatar from '../assets/avatar.jpeg'

class Profile extends Component {
  render() {
    const profilePic = defaultAvatar;
    const username = 'Jared Siminoff';
    const columns = ['Name', 'Handicap', '+/-']
    const data = [
      {
        label: 'Jared',
        handicap: 3,
        plusMinus: -4,
      },
      {
        label: 'Sam',
        handicap: 10,
        plusMinus: -9,
      }
    ]

    return (
      <Card className="card">
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
            classes={{ title: 'avatar-title' }}
            className="avatar-header"
          />
          <Divider />
          <DataTable columns={columns} data={data}/>
          <button className="button primary-button">
            Add stats
          </button>
        </CardContent>
      </Card>
    );
  }
}

export default Profile;
