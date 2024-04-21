import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './modules/LoginPage';
// import DashboardPage from './modules/DashboardPage';
import reactLogo from './assets/react.svg';
// import viteLogo from './assets/vite.svg';
import './App.css';
import AuthPage from './modules/AuthPage';
import DashboardPage from './modules/DashboardPage';

function App() {

  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/authpage" element={<AuthPage />} />
          <Route path="/dashboard" element={<DashboardPage/>} />
          {/* <Route path="/hr" element={<"."/>}/> */}
        </Routes>
      </>
    </Router>
  );
}

export default App;
