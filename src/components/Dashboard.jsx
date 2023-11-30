// import React from 'react'

// const Dashboard = () => {
//   return (
//     <div>
//         <h2>Dashboard</h2>
//     </div>
//   )
// }

// export default Dashboard

// Dashboard.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  // Retrieve the state from the location object
  const { state } = useLocation();

  return (
    <div>
      <h2 className='head'>Dashboard</h2>
      {state && state.otplessUser && (
        <div>
          <h3>Details from OTPless:</h3>
          <pre>{JSON.stringify(state.otplessUser, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
