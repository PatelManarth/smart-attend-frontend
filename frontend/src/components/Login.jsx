import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/login', { username, password, role });
      if (response.data.success) {
        // Navigate to the appropriate home page based on the role
        navigate(`/${role}-home`);
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Login failed', error);
      alert('An error occurred during login. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <select 
        value={role} 
        onChange={(e) => setRole(e.target.value)}>
        <option value="student">Student</option>
        <option value="faculty">Faculty</option>
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
