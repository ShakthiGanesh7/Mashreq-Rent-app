'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5E00',
      light: '#FF9A27',
    },
    secondary: {
      main: '#1F1F27',
    },
    text: {
      primary: '#000000',
      secondary: '#666666',
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Droid Sans, Arial, sans-serif',
    h4: {
      fontWeight: 700,
      fontSize: '40px',
      lineHeight: 1.17,
    },
    h5: {
      fontWeight: 700,
      fontSize: '32px',
      lineHeight: 1.17,
    },
    body1: {
      fontSize: '16px',
      lineHeight: 1.17,
    },
    button: {
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: 1.17,
      textTransform: 'none',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: 0,
          margin: 0,
          maxWidth: '100% !important',
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '10px',
            backgroundColor: 'rgba(217, 217, 217, 0.1)',
            '& fieldset': {
              borderColor: 'rgba(93, 86, 86, 0.5)',
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          height: '75px',
          background: '#FF5E00',
          borderRadius: '10px',
          fontSize: '20px',
          textTransform: 'none',
          color: '#FFFFFF',
          fontFamily: 'Droid Sans',
          '&:hover': {
            background: '#e65400',
          },
        },
      },
    },
  },
});

export default theme;
