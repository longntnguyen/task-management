import { Paper, TableContainer, Table as MuiTable, TableHead, TableRow, TableBody, TableCell } from '@mui/material'
import React from 'react'

export const Table = ({
  header = [],
  children
}) => {
  return (
    <TableContainer component={Paper}>
      <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {header.map((cell, index) =>
              <TableCell key={index}  {...cell.cellStyle}>{cell.label}</TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {children}
        </TableBody>
      </MuiTable>
    </TableContainer>
  )
}
