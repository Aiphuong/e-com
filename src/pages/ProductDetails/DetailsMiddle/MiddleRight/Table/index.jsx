import React from "react";
import PropTypes from "prop-types";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./style.scss";

TableContent.propTypes = {};
export function createData(name, vitamins, quantity, dv) {
  return { name, vitamins, quantity, dv };
}

const rows = [
  createData("Vitamin A equiv", "735 μg", "104 %"),
  createData("Vitamin A equiv", "735 μg", "104 %"),
  createData("Vitamin A equiv", "735 μg", "104 %"),
  createData("Vitamin A equiv", "735 μg", "104 %"),
  createData("Vitamin A equiv", "735 μg", "104 %"),
  createData("Vitamin A equiv", "735 μg", "104 %"),
  createData("Vitamin A equiv", "735 μg", "104 %"),
];

function TableContent(props) {
  const { id } = props;
  return (
    <>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Vitamins</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">% DV</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.vitamins}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">{row.dv}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TableContent;
