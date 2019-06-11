import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class DataTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: this.props.columns,
      data: this.props.data,
    }
  }

  // const data = [
  //   {
  //     name: 'Jared',
  //     handicap: 3,
  //     plusMinus: -4,
  //     columns: ['Name', 'Handicap', '+/-'],
  //   },
  //   {
  //     name: 'Jared',
  //     handicap: 3,
  //     plusMinus: -4,
  //   }
  // ]

  render() {
    function createData(rawData) {
      let data = [];

      rawData.forEach((obj) => {
        data.push(Object.values(obj));
      });
      
      return data;
    }

    const tableData = createData(this.state.data);
    console.log(tableData)
    
    // const rows = [
    //   createData('Holes played', 72),
    //   createData('Best round', -2),
    // ];

    return (
      <Table className="data-table">
        
          <TableHead>
            <TableRow key="head">
              {
                this.state.columns.map(column => (
                  <TableCell component="th" scope="row">
                    {column}
                  </TableCell>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
          {
            tableData.map(row => (
              <TableRow key={row.label}>
              {
                row.map(entry =>
                  <TableCell component="th" scope="row">
                    {entry}
                  </TableCell>
                )
              }
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    );
  }
}

export default DataTable;
