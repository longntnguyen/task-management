import React, { useState } from 'react'
import { Box, ButtonBase, Paper, Typography } from '@mui/material'
import { BoxWrapper } from './SignIn.style'
import { Form, Formik } from 'formik'
import * as yup from 'yup'
import { SignInStep1, SignInStep2 } from './components'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const SignIn = () => {
  const [step, setStep] = useState(1)
  const validationSchema = yup.object({
    ...(step === 1 && {
      phone: yup.string().required('Phone is required'),

    }),
    ...(step === 2 && {
      code: yup.string().required('Code is required')
    })
  })


  const onSendCode = async (values) => {
    setStep(2)
  }

  const onSubmit = async (values) => {
    console.log("Send submit", values)

  }


  return (
    <BoxWrapper>
      <Paper sx={{ padding: '1rem' }} >
        {step === 2 && (
          <ButtonBase onClick={() => setStep(1)}>
            <ArrowBackIcon />
            &nbsp;&nbsp;<Typography align='center' variant='body1' style={{ fontWeight: 700 }}>Back</Typography>
          </ButtonBase>
        )}
        <Box display="flex" flexDirection="column" gap={2}>
          {step === 1 && (
            (
              <>
                <Typography align='center' variant='h4'>Sign In</Typography>
                <Typography align='center' variant='body1' color="GrayText">Please enter your phone to sign in</Typography>
              </>

            )
          )}
          {step === 2 && (
            <>
              <Typography align='center' variant='h4'>Phone verification</Typography>
              <Typography align='center' variant='body1' color="GrayText">Please enter your code that send to your phone</Typography>
            </>
          )}


          <Formik initialValues={{}} validationSchema={validationSchema} onSubmit={step === 1 ? onSendCode : onSubmit}>
            {({ handleSubmit }) => {
              return (
                <Form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <SignInStep1 />
                  )}
                  {step === 2 && (
                    <SignInStep2 onSendCode={onSendCode} />
                  )}


                </Form>
              )
            }}
          </Formik>
        </Box>
      </Paper>
    </BoxWrapper>
  )
}

export default SignIn