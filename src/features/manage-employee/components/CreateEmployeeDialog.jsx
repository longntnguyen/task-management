import React from 'react'
import { Dialog, DialogContent, DialogTitle, Grid, IconButton, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { Form, Formik } from 'formik';
import TextField from '../../../components/fields/TextField';
import Button from '../../../components/button/Button';
import * as yup from 'yup'
import AutoCompleteField from '../../../components/fields/AutocompleteField';

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  phone: yup.string().required('Phone is required'),
  email: yup.string().required('Email is required'),
  role: yup.string().required('Role is required'),
})

export const CreateEmployeeDialog = ({ open, onClose, onCreate, initialValues = {} }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        <Typography sx={{ fontSize: '20px', fontWeight: 600 }}>
          Create a new employee
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
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onCreate}>
          {({ handleSubmit }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <TextField name="name" label="Employee name" />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField name="phone" label="Phone number" />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField name="email" label="Email address" />
                  </Grid>

                  <Grid item xs={6}>
                    <AutoCompleteField disableClearable name="role" label="Role" options={[
                      {
                        value: 'owner',
                        label: "Owner"

                      },
                      {
                        value: 'employee',
                        label: "Employee"

                      },
                    ]} />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField name="address" label="Address" />
                  </Grid>

                </Grid>
                <Button type="submit" style={{ marginTop: '24px' }} size="large" variant="contained">
                  Submit
                </Button>
              </Form>
            )
          }}
        </Formik>
      </DialogContent>

    </Dialog>
  )
}
