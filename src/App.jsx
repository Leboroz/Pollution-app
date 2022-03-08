import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
function App() {
  const logged = true;
  return (
    <Routes>
      <Route
        path="/"
        element={logged ? <Navigate replace to="/home" /> : <Login />}
      />
      <Route path="/home/*" element={<Home />} />
    </Routes>
  );
}

export default App;
