import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Asigură-te că folosești ThemeProvider
import LoginPage from './modules/LoginPage';
import AuthPage from './modules/AuthPage';
import DashboardPage from './modules/DashboardPage';
import './App.css';

// Creează o temă pentru ThemeProvider
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', 
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}> {/* Adaugă ThemeProvider în jurul Router */}
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/authpage" element={<AuthPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          {/* Adaugă alte rute după necesitate */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
