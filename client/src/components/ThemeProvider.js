import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import HomePage from './HomePage';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff0000',
    },
    secondary: {
      main: '#00ff00',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
