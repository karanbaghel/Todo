import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginpage from './Pages/Loginpage';
import Signuppage from './Pages/Signuppage';
import Homepage from './Pages/Homepage';
import Inputt from './Pages/Inputt';
import  Getdata from './Pages/Getdata';

// import Edituser from './Pages/Edituser';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/input" element={<Inputt />} />
        <Route path="/starred" element={< Getdata />} />
       
        {/* <Route path="/drafts" element={<Drafts />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
