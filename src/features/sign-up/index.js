import React from "react";
import * as yup from "yup";
import { BoxWrapper } from "../sign-in/SignIn.style";
import { Box, Grid, Paper, Typography, useTheme } from "@mui/material";
import { Form, Formik } from "formik";
import TextField from "../../components/fields/TextField";
import Button from "../../components/button/Button";
import PasswordField from "../../components/fields/PasswordField";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../constants";

const validationSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignUp = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const onSignUp = async (values) => console.log("Sign up", values);
  return (
    <BoxWrapper>
      <Paper sx={{ padding: "1rem" }}>
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography align="center" variant="h4">
            Sign Up
          </Typography>

          <Formik
            initialValues={{}}
            validationSchema={validationSchema}
            onSubmit={onSignUp}
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
                    Sign up
                  </Button>

                  <Typography
                    sx={{ marginTop: "40px" }}
                    variant="body1"
                    color="GrayText"
                  >
                    Already have account?{" "}
                    <span
                      style={{
                        color: theme.colors.text.link,
                        cursor: "pointer",
                      }}
                      onClick={() => navigate(PATHS.logIn)}
                    >
                      Log In
                    </span>
                  </Typography>
                </Form>
              );
            }}
          </Formik>
        </Box>
      </Paper>
    </BoxWrapper>
  );
};

export default SignUp;
