'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5959',
    },
    secondary: {
      main: '#F3F2EF',
    },
    grey: {
      '100': '#F3F2EF',
      '200': '#D1D3CA',
      '300': '#4C4C49',
      '400': '#171717',
    },
  },
  spacing: ['20px', '40px', '60px', '80px', '120px'],
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        sx: {
          boxShadow: 'none',
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          textAlign: 'center',
          backgroundColor: 'grey.200',
        },
      },
    },
    MuiTypography: {
      defaultProps: {},
      styleOverrides: {
        body2: {
          color: 'grey.400',
          fontSize: '10px',
        },
        h3: {
          color: 'grey.400',
          fontSize: '24px',
        },
        h4: {
          color: 'grey.400',
          fontSize: '14px',
          textTransform: 'uppercase',
        },
      },
    },
  },
});

export default theme;
