import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Students from './components/Students';
import Attendance from './components/Attendance';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/students" component={Students} />
          <Route path="/attendance" component={Attendance} />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;