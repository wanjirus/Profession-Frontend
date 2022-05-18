import React, { useEffect } from 'react';
// import { getCurrentUser, signOut } from 'src/REST-API/auth';
import { getCurrentUser, signOut } from '../../REST-API/auth/AuthProvider';


const HomePage = () => {
  useEffect(() => {
     const user = getCurrentUser();
     if (user) {
     // Landing page is automatically logged out on mount, and clears logged in user from local storage.
       signOut();
       console.log('user signed out successfully');
     } else {
       console.log('No user found on local storage, kindly login or register a new user !!');
     }
  }, []);
  return (
    <div>
      <h1>Welcome to Proffessional </h1>
      <h2><small>A Youth Activity Placement Program.</small></h2>
    </div>
  );
};

export default HomePage;
