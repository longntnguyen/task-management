import React, { Suspense } from 'react'
import {
  BrowserRouter,
  Routes as RoutesComponent,
  Route,
} from "react-router-dom";
import { PATHS } from '../../constants';
import { Backdrop, CircularProgress } from '@mui/material';
const SignIn = React.lazy(() => import('../../features/sign-in/SignIn'));
const SignUp = React.lazy(() => import('../../features/sign-up'));
const LogIn = React.lazy(() => import('../../features/log-in'));
const ManageEmployee = React.lazy(() => import('../../features/manage-employee'));
const ManageTask = React.lazy(() => import('../../features/manage-task'));
const InAppMessage = React.lazy(() => import('../../features/message'));



const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={
        <Backdrop open={true}>
          <CircularProgress />
        </Backdrop>
      }>

        <RoutesComponent>
          <Route path={PATHS.signIn} element={<SignIn />} />
          <Route path={PATHS.signUp} element={<SignUp />} />
          <Route path={PATHS.logIn} element={<LogIn />} />
          <Route path={PATHS.employee} element={<ManageEmployee />} />
          <Route path={PATHS.task} element={<ManageTask />} />
          <Route path={PATHS.message} element={<InAppMessage />} />
        </RoutesComponent>
      </Suspense>
    </BrowserRouter>
  )
}

export default Routes