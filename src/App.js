import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import AppRoute from './router';



function App() {

  return (
    <ThemeProvider theme={theme}>
        <AppRoute/>
    </ThemeProvider>
  );
}

export default App;
