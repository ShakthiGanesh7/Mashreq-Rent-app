'use client';
import { ThemeProvider } from '@mui/material';
import theme from '../theme/theme';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';

export default function DashboardPage() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Dashboard />
    </ThemeProvider>
  );
}
