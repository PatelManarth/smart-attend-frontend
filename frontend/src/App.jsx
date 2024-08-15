// src/app.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import StudentHome from './components/StudentHome';  // Assuming you have these components
import FacultyHome from './components/FacultyHome';  // Assuming you have these components
import AdminPortal from './components/AdminPortal';  

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/student-home" element={<StudentHome />} />
          <Route path="/faculty-home" element={<FacultyHome />} />
          <Route path="/admin-portal" element={<AdminPortal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
