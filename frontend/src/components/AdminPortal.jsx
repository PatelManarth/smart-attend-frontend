import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPortal = () => {
  const [attendances, setAttendances] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    // Fetch attendance records
    const fetchAttendances = async () => {
      const response = await axios.get('/api/attendance');
      setAttendances(response.data);
    };

    fetchAttendances();
  }, []);

  const handleStatusChange = async (recordId) => {
    await axios.patch(`/api/attendance/${recordId}`, { status });
    // Refresh records
    const response = await axios.get('/api/attendance');
    setAttendances(response.data);
  };

  return (
    <div>
      <h2>Admin Portal</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Student ID</th>
            <th>Course ID</th>
            <th>Meeting ID</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {attendances.map((record) => (
            <tr key={record._id}>
              <td>{record._id}</td>
              <td>{record.student_id}</td>
              <td>{record.course_id}</td>
              <td>{record.meeting_id}</td>
              <td>
                <select
                  value={selectedRecord === record._id ? status : record.status}
                  onChange={(e) => {
                    setSelectedRecord(record._id);
                    setStatus(e.target.value);
                  }}
                >
                  <option value="present">Present</option>
                  <option value="absent">Absent</option>
                  <option value="unknown">Unknown</option>
                </select>
              </td>
              <td>
                <button onClick={() => handleStatusChange(record._id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPortal;
