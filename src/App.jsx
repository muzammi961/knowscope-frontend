import React from 'react';
import { Route,Routes } from 'react-router-dom';

// homeside
import SmartLearnAIHowItWorks  from './components/homeside/SmartLearnAIHowItWorks '
import SmartLearnAIHome from './components/homeside/SmartLearnAIHome'

// profileside
import StudentProfileSetup from './components/Profileside/StudentProfileSetup'
import StudentProfile from './components/Profileside/StudentProfile'


import Dashboard from './components/userhomeiner/SmartLearnAINavbar'
import SmartLearnAINavbar from './components/userhomeiner/SmartLearnAINavbar'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SmartLearnAIHowItWorks/>} />
      <Route path='/SmartLearnAIHome' element={<SmartLearnAIHome/>}/>

      <Route path='/StudentProfileSetup' element={<StudentProfileSetup/>}/>
      <Route path='/StudentProfile' element={<StudentProfile/>}/>

      <Route path='/SmartLearnAINavbar' element={<SmartLearnAINavbar/>}/>
    </Routes>
  );
}

export default App;

