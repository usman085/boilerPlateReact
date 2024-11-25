 // src/theme.js
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#834F37',
    },
    secondary: {
      main: '#F6D8C6',
    },
    background: {
      default: 'white',
      paper: '#ffffff',
    },
    text: {
      primary: '#2C2C2C',
      secondary: 'white',
    },
  },
  typography: {
    fontFamily: 'san-sarif',
  },
  InputLabel: {
    fontFamily: 'Inter',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'white', // Ensures text in buttons is white by default
        },
      },
    },
  },
});

export default theme;
