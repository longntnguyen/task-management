import React from 'react'
import { Table } from '../../../components/table/Table'
import { TableCell, TableRow } from '@mui/material'
import Button from '../../../components/button/Button'
import DoneIcon from '@mui/icons-material/Done';

const TaskTable = ({ tasks }) => {
  const onMarkDone = (task) => console.log("Task done", task.id)
  return (
    <Table
      header={[
        {
          label: "ID",
        },

        {
          label: "Task name",
        },

        {
          label: "Actions",
          cellStyle: {
            align: 'center'
          }
        },
      ]}
    >
      {tasks.map((task) => (
        <TableRow key={task.id}>
          <TableCell component="th" scope="row">
            {task.id}
          </TableCell>
          <TableCell component="th" scope="row">
            {task.name}
          </TableCell>

          <TableCell component="th" scope="row">
            <Button onClick={() => onMarkDone(task)} startIcon={<DoneIcon />} sx={{ backgroundColor: "green", '&:hover': { backgroundColor: "green" } }} size="medium">Mark done</Button>
          </TableCell>
        </TableRow>
      ))}
    </Table>
  )
}

export default TaskTable
