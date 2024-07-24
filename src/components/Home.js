import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-5">
      <h1>Attendance System(Admin Portal)</h1>
      <Link to="/students" className="btn btn-primary">Students</Link>
      <Link to="/attendance" className="btn btn-secondary ml-3">Attendance</Link>
    </div>
  );
}

export default Home;
