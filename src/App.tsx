import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { PortfolioLayout } from './layouts/PortfolioLayout';
import { HomePage } from './pages/HomePage';

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioLayout>
        <HomePage />
      </PortfolioLayout>
    </ThemeProvider>
  );
}
