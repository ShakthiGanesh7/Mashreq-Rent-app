'use client';
import { ThemeProvider } from '@mui/material';
import theme from './theme/theme';
import Header from './components/Header';
import LoginPage from './components/LoginPage';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <LoginPage />
    </ThemeProvider>
  );
}
