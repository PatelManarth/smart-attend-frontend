import React, { useState } from 'react';
import axios from 'axios';
import uitoolkit from "@zoom/videosdk-ui-toolkit";
import '@zoom/videosdk-ui-toolkit/dist/videosdk-ui-toolkit.css';

const FacultyHome = () => {
  const [sessionName, setSessionName] = useState('');
  const [sessionPasscode, setSessionPasscode] = useState('');
  const [sessionContainer, setSessionContainer] = useState(null);

  const handleAdminPortal = () => {
    navigate('/admin-portal'); // This will navigate to the AdminPortal route
  };


  const joinSession = async () => {
    try {
      const response = await axios.post('https://smart-attend-auth-endpoint-dedf0223a758.herokuapp.com/', { sessionName, role: 1 });
      const videoSDKJWT = response.data.signature;
      const config = {
        videoSDKJWT,
        sessionName,
        userName: localStorage.getItem('name'),
        sessionPasscode: sessionPasscode || '', // Optional passcode
        features: ['video', 'audio', 'settings', 'users', 'chat', 'share']
      };
      uitoolkit.joinSession(sessionContainer, config);
    } catch (error) {
      console.error("Failed to join session:", error);
    }
  };

  return (
    <div>
      <h2>Faculty Home</h2>
      <h3>Join a Meeting</h3>
      <input
        type="text"
        placeholder="Session Name"
        value={sessionName}
        onChange={(e) => setSessionName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Session Passcode (Optional)"
        value={sessionPasscode}
        onChange={(e) => setSessionPasscode(e.target.value)}
      />
      <button onClick={joinSession}>Join Session</button>
      <div id="sessionContainer" ref={setSessionContainer}></div>
      <div>
      <button onClick={handleAdminPortal}>Go to Admin Portal</button>
    </div>
    </div>
    
  );
};

export default FacultyHome;
