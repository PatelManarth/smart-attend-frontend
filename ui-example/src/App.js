import './App.css';
import { useState } from "react";
import uitoolkit from "@zoom/videosdk-ui-toolkit";
import '@zoom/videosdk-ui-toolkit/dist/videosdk-ui-toolkit.css'

function App() {

  var sessionContainer
  var authEndpoint = 'https://smart-attend-auth-endpoint-dedf0223a758.herokuapp.com/'
  var config = {
      videoSDKJWT: '',
      sessionName: 'Smart-Attend',
      userName: 'React',
      sessionPasscode: '1234',
      features: ['video', 'audio', 'settings', 'users', 'chat', 'share']
  };
  var role = 1

  function getVideoSDKJWT() {
    sessionContainer = document.getElementById('sessionContainer')

    document.getElementById('join-flow').style.display = 'none'

    fetch(authEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionName:  config.sessionName,
        role: role,
      })
    }).then((response) => {
        return response.json()
    }).then((data) => {
      if(data.signature) {
        console.log(data.signature)
        config.videoSDKJWT = data.signature
        joinSession()
      } else {
        console.log(data)
      }
    }).catch((error) => {
        console.log(error)
    })
  }

  function joinSession() {
    console.log(config)
    console.log(sessionContainer)
    uitoolkit.joinSession(sessionContainer, config)

    uitoolkit.onSessionClosed(sessionClosed)
  }

  var sessionClosed = (() => {
    console.log('session closed')
    uitoolkit.closeSession(sessionContainer)

    document.getElementById('join-flow').style.display = 'block'
  })

  return (
    <div className="App">
      <main>
        <div id="join-flow">
          <h1>Smart-Attend</h1>
          <p>Test-Meeting</p>

          <button onClick={getVideoSDKJWT}>Join Session</button>
        </div>

        <div id='sessionContainer'></div>
      </main>
    </div>
  );
}

export default App;
