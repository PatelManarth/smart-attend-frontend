import React, { useEffect, useState } from 'react';
import axios from 'axios';
import uitoolkit from "@zoom/videosdk-ui-toolkit";
import '@zoom/videosdk-ui-toolkit/dist/videosdk-ui-toolkit.css';

const StudentHome = () => {
  const [meetings, setMeetings] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [sessionContainer, setSessionContainer] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const meetingsResponse = await axios.get('/api/student/meetings');
      const attendanceResponse = await axios.get('/api/student/attendance');
      setMeetings(meetingsResponse.data);
      setAttendance(attendanceResponse.data);
    };
    fetchData();
  }, []);

  const joinSession = async (sessionName) => {
    try {
      const response = await axios.post('https://smart-attend-auth-endpoint-dedf0223a758.herokuapp.com/', { sessionName, role: 0 });
      const videoSDKJWT = response.data.signature;
      const config = {
        videoSDKJWT,
        sessionName,
        userName: localStorage.getItem('name'),
        features: ['video', 'audio', 'settings', 'users', 'chat', 'share']
      };
      uitoolkit.joinSession(sessionContainer, config);
    } catch (error) {
      console.error("Failed to join session:", error);
    }
  };

  return (
    <div>
      <h2>Student Home</h2>
      <h3>Scheduled Meetings</h3>
      <ul>
        {meetings.map((meeting) => (
          <li key={meeting.id}>
            {meeting.title} - {meeting.date} 
            <button onClick={() => joinSession(meeting.title)}>Join Session</button>
          </li>
        ))}
      </ul>
      <h3>Attendance Records</h3>
      <ul>
        {attendance.map((record) => (
          <li key={record.id}>{record.course} - {record.status}</li>
        ))}
      </ul>
      <div id="sessionContainer" ref={setSessionContainer}></div>
    </div>
  );
};

export default StudentHome;
