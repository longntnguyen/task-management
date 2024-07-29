import React from "react";
import * as yup from "yup";
import { BoxWrapper } from "../sign-in/SignIn.style";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import TextField from "../../components/fields/TextField";
import Button from "../../components/button/Button";
import PasswordField from "../../components/fields/PasswordField";

const validationSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const LogIn = () => {
  const onLogIn = async (values) => console.log("Log In", values);
  return (
    <BoxWrapper>
      <Paper sx={{ padding: "1rem" }}>
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography align="center" variant="h4">
            Log In
          </Typography>

          <Formik
            initialValues={{}}
            validationSchema={validationSchema}
            onSubmit={onLogIn}
          >
            {({ handleSubmit }) => {
              return (
                <Form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField name="username" label="Username" />
                    </Grid>
                    <Grid item xs={12}>
                      <PasswordField name="password" label="Password" />
                    </Grid>
                  </Grid>
                  <Button sx={{ marginTop: "24px" }} type="submit">
                    Log In
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </Box>
      </Paper>
    </BoxWrapper>
  );
};

export default LogIn;
