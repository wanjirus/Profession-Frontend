import { Box, Container, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Blog, Brand, Cta, Feature, Footer, WhatGPT3 } from '../../Component/homepage';
// import { getCurrentUser, signOut } from 'src/REST-API/auth';
import { getCurrentUser, signOut } from '../../REST-API/auth/AuthProvider';


const HomePage = () => {
  useEffect(() => {
     const user = getCurrentUser();
     if (user) {
     // Landing page is automatically logged out on mount, and clears logged in user from local storage.
       signOut();
       localStorage.clear();
       console.log('user signed out successfully');
     } else {
       console.log('No user found on local storage, kindly login or register a new user !!');
     }
  }, []);
  return (
    
    <Box
        sx={{
          backgroundColor: 'white',
          display: 'flex',
          // justifyContent: 'center',
          alignItems: 'flex-start',
          flexDirection: 'column',
          height: '100%',
         
        }}
      >
         <Container maxWidth="lg">
         <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Sign in
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Sign in on the internal platform
                  </Typography>


               
                <div>
            <Brand />
            </div>
            <div>
            <WhatGPT3 />
            </div>
            <div>
           <Feature />
           </div>
           <div>
            <Cta />
            </div>
            <div>
            <Blog />
            </div>
            <div>
            < Footer />
            </div>
            </Box>
    </Container>
    </Box>
    
  );
};

export default HomePage;
