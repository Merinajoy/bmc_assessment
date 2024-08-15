import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App';
import './index.css';

const theme = createTheme({
  palette: {
    primary: {
      light: '#9b6ed1',
      main: '#9b62e0',
      dark: '#5d3f81',
      contrastText: '#fff',
    },
    secondary: {
      light: '#f3f3f3',
      main: '#535353',
      dark: '#131313',
      contrastText: '#272727',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);


