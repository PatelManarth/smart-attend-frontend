import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Attendance() {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/attendance')
      .then(response => {
        setAttendance(response.data);
      })
      .catch(error => {
        console.error('Error fetching attendance:', error);
      });
  }, []);

  return (
    <div>
      <h1>Attendance</h1>
      <ul>
        {attendance.map(record => (
          <li key={record._id}>{record.name} - {record.time}</li>
        ))}
      </ul>
    </div>
  );
}

export default Attendance;











/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Admin() {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    fetchStudents();
    fetchAttendance();
  }, []);

  const fetchStudents = async () => {
    const response = await axios.get('/api/students');
    setStudents(response.data);
  };

  const fetchAttendance = async () => {
    const response = await axios.get('/api/attendance');
    setAttendance(response.data);
  };

  return (
    <div className="container mt-5">
      <h2>Admin Portal</h2>
      <h3>Students</h3>
      <ul>
        {students.map(student => (
          <li key={student._id}>{student.name} - {student.email}</li>
        ))}
      </ul>
      <h3>Attendance Records</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Timestamp</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map(record => (
            <tr key={record._id}>
              <td>{record.name}</td>
              <td>{record.timestamp}</td>
              <td>{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin; 



import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Admin() {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    fetchStudents();
    fetchAttendance();
  }, []);

  const fetchStudents = async () => {
    const response = await axios.get('/api/students');
    setStudents(response.data);
  };

  const fetchAttendance = async () => {
    const response = await axios.get('/api/attendance');
    setAttendance(response.data);
  };

  const handleEdit = (data) => {
    setEditMode(true);
    setEditData(data);
  };

  const handleSave = async () => {
    // Implement save logic here
    // Example: await axios.put(`/api/students/${editData._id}`, editData);
    setEditMode(false);
  };

  return (
    <div className="container mt-5">
      <h2>Admin Portal</h2>
      <h3>Students</h3>
      <ul>
        {students.map(student => (
          <li key={student._id}>
            {student.name} - {student.email}
            <button onClick={() => handleEdit(student)}>Edit</button>
          </li>
        ))}
      </ul>
      <h3>Attendance Records</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Timestamp</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map(record => (
            <tr key={record._id}>
              <td>{record.name}</td>
              <td>{record.timestamp}</td>
              <td>{record.status}</td>
              <td>
                <button onClick={() => handleEdit(record)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editMode && (
        <div className="edit-form">
          <h3>Edit Form</h3>
          {// Example editable form }
          <input type="text" value={editData.name} onChange={(e) => setEditData({...editData, name: e.target.value})} />
          <input type="text" value={editData.email} onChange={(e) => setEditData({...editData, email: e.target.value})} />
          <button onClick={handleSave}>Save</button>
        </div>
      )}
    </div>
  );
}

export default Admin; */
