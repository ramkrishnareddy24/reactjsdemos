import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material';


function createData(number, item, qty, price) {
  return { number, item, qty, price };
}

const row = [
  createData(1, 'AppleCider', 5, 200),
  createData(2, 'MangoShots', 6, 300),
  createData(3, 'TomatoPunch', 7, 400),
];
const BasicTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>S.No.</TableCell>
            <TableCell>Item</TableCell>
            <TableCell>Qty</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {row.map((row) => (
            <TableRow key={row.number}>
              <TableCell component='th' scope='row'>
                {row.number}
              </TableCell>
              <TableCell >{row.item}</TableCell>
              <TableCell >{row.qty}</TableCell>
              <TableCell >{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
