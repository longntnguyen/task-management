import { Fragment } from 'react';
import Routes from './components/routes/Routes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';

function App() {
  return (
   <Fragment>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Routes/>
    </ThemeProvider>
   </Fragment>
  );
}

export default App;
