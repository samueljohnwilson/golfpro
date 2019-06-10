import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';

import DataTable from './DataTable';

class Rankings extends Component {
  render() {
    const data = [
      {
        name: 'Jared',
        handicap: 3,
        plusMinus: -4,
      },
      {
        name: 'Jared',
        handicap: 3,
        plusMinus: -4,
      }
    ]

    return (
      <Card className="card">
        <CardContent>
          <CardHeader
            title="Rankings"
            classes={{ title: 'ranking-title' }}
            className="avatar-header"
          />
          <Divider />
          <DataTable data={data} />
        </CardContent>
      </Card>
    );
  }
}

export default Rankings;
