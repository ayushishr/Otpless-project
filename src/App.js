// import React from 'react'

// import './App.css'
// import { BrowserRouter, Routes,Route } from 'react-router-dom'
// import Dashboard from './components/Dashboard'
// import Login from './components/Login'
// const App = () => {
  //   return (
    //     <BrowserRouter>
    //         <Routes>
    //           <Route path="/" element={<Login />} />
    //           <Route path="/dashboard" element={<Dashboard />} />
    //         </Routes>
    //       </BrowserRouter>
    //   )
    // }
    
    // export default App
    
    
    //////////////
    // App.js
    import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import Dashboard from './components/Dashboard';
    import Login from './components/Login'
    import { initOTPless } from './utills/initOtpless';
    import { ToastContainer } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';
    
    // Call initOTPless before the application renders
    initOTPless();
    
    const App = () => {
      return (
        <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
      {/* ToastContainer notifications */}
      <ToastContainer />
    </Router>
  );
};

export default App;
