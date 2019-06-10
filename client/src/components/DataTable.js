import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class DataTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
    }
  }

  render() {
    // function createData(label, value) {
    //   return { label, value };
    // }
    
    // const rows = [
    //   createData('Holes played', 72),
    //   createData('Best round', -2),
    // ];

    return (
      <Table className="data-table">
        <TableBody>
          {this.state.data.map(row => (
            <TableRow key={row.label}>
              <TableCell component="th" scope="row">
                {row.label}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default DataTable;