import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-5">
      <h1>Attendance System</h1>
      <Link to="/register" className="btn btn-primary">Register</Link>
      <Link to="/admin" className="btn btn-secondary ml-3">Admin</Link>
    </div>
  );
}

export default Home;
