import React from 'react'
import * as yup from 'yup'
import { Dialog, DialogContent, DialogTitle, Grid, IconButton, Typography } from '@mui/material'
import { Form, Formik } from 'formik'
import TextField from '../fields/TextField'
import Button from '../button/Button'
import CloseIcon from '@mui/icons-material/Close';



const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  phone: yup.string().required('Phone is required'),
  email: yup.string().required('Email is required'),
})

const EditProfileDialog = ({ initialValues = {}, open, onClose }) => {

  const onUpdate = async (values) => {
    console.log("Update user profile", values)
  }


  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        <Typography sx={{ fontSize: '20px', fontWeight: 600 }}>
          Update user profile
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
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onUpdate}>
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
                    <TextField name="address" label="Address" />
                  </Grid>

                </Grid>
                <Button type="submit" style={{ marginTop: '24px' }} size="large" variant="contained">
                  Update
                </Button>
              </Form>
            )
          }}
        </Formik>
      </DialogContent>

    </Dialog>
  )
}

export default EditProfileDialog