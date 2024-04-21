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
  const [count, setCount] = useState(0);

  return (
    <Router>
      <>
        <div>
          {/* <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a> */}
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/authpage" element={<AuthPage />} />
          <Route path="/" element={<DashboardPage/>} />
          {/* <Route path="/hr" element={<"."/>}/> */}
        </Routes>
      </>
    </Router>
  );
}

export default App;
