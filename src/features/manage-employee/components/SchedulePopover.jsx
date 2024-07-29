import { Dialog, DialogContent, DialogTitle, Grid, IconButton, Typography } from '@mui/material'
import { Form, Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import Button from '../../../components/button/Button'
import TextField from '../../../components/fields/TextField'
import CloseIcon from '@mui/icons-material/Close';


const validationSchema = yup.object({
  days: yup.string().required('Day is required').matches(/^\d+$/, "Invalid day"),
  hours: yup.string().required('Hour is required').matches(/^(2[0-3]|[01]?[0-9])$/, "Invalid hour")
})


const SchedulePopover = ({ employee, open, onClose, onSetSchedule }) => {
  return (

    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        <Typography sx={{ fontSize: '20px', fontWeight: 600 }}>
          {`Set schedule work for ${employee.name}`}
        </Typography>
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent>
        <Formik initialValues={{}} validationSchema={validationSchema} onSubmit={onSetSchedule}>
          {({ handleSubmit }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <TextField name="days" label="Work days" />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField name="hours" label="Work hours" />
                  </Grid>
                </Grid>

                <Grid container spacing={1} style={{ marginTop: 24 }}>
                  <Grid item xs={6}>
                    <Button variant="outlined" onClick={onClose}>
                      Close
                    </Button>
                  </Grid>

                  <Grid item xs={6}>

                    <Button type="submit" variant="contained">
                      Set
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )
          }}
        </Formik>
      </DialogContent>

    </Dialog>

  )
}

export default SchedulePopover