import React from 'react'
import {
    BrowserRouter,
    Routes as RoutesComponent,
    Route,
  } from "react-router-dom";
import { PATHS } from '../../constants';
const SignIn = React.lazy(() => import('../../features/sign-in/SignIn'));


const Routes = () => {
  return (
    <BrowserRouter>
        <RoutesComponent>
            <Route path={PATHS.signIn} element={<SignIn/>}/>
        </RoutesComponent>
    </BrowserRouter>
  )
}

export default Routes