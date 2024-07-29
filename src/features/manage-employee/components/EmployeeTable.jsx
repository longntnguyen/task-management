import React, { useState } from 'react'
import { Table } from '../../../components/table/Table'
import { Box, TableCell, TableRow } from '@mui/material'
import Button from '../../../components/button/Button'
import SchedulePopover from './SchedulePopover'


const EmployeeTable = ({ employees, onEditEmp, onDeleteEmp }) => {
  const [openSchedule, setOpenSchedule] = useState(false)
  const [selectedEmp, setSelectedEmp] = useState({})
  return (
    <>
      <Table
        header={[
          {
            label: "Employee name",
          },

          {
            label: "Phone",
          },

          {
            label: "Email",
          },

          {
            label: "Role",
          },

          {
            label: "Address",
          },

          {
            label: "Actions",
            cellStyle: {
              align: 'center'
            }
          },
        ]}
      >
        {employees.map((employee, index) => (
          <TableRow key={index}>
            <TableCell component="th" scope="row">
              {employee.name}
            </TableCell>
            <TableCell component="th" scope="row">
              {employee.phone}
            </TableCell>
            <TableCell component="th" scope="row">
              {employee.email}
            </TableCell>
            <TableCell component="th" scope="row">
              {employee.role}
            </TableCell>

            <TableCell component="th" scope="row">
              {employee.address}
            </TableCell>
            <TableCell component="th" scope="row">
              <Box display="flex" gap="8px">
                <Button sx={{ backgroundColor: "red", '&:hover': { backgroundColor: "red" } }} size="medium" onClick={() => onDeleteEmp(employee.id)}>Delete</Button>

                <Button size="medium" onClick={() => onEditEmp(employee)}>Edit</Button>

                <Button onClick={(e) => {
                  setSelectedEmp(employee)
                  setOpenSchedule(true)
                }} size="medium">Set schedule</Button>
              </Box>
            </TableCell>
          </TableRow>
        ))}
      </Table>

      <SchedulePopover employee={selectedEmp} open={openSchedule} onClose={() => setOpenSchedule(false)} onSetSchedule={(time) => {
        console.log("Employee schedule", time)
      }} />
    </>
  )
}

export default EmployeeTable