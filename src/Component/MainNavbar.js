import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { AppBar, Box, Toolbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Logo from './Logo';

function MainNavbar(props) {
  const navigate = useNavigate();
  const handleLoginForm = () => navigate('/login');
  const handleSignUpForm = () => navigate('/register');

  return (
    <AppBar
      elevation={0}
      {...props}
    >
      <Toolbar sx={{ height: 64 }}>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        <Button onClick={handleLoginForm} color="inherit">Login</Button>
        <Button onClick={handleSignUpForm} color="inherit">Sign Up</Button>
      </Toolbar>
    </AppBar>
  );
}

export default MainNavbar;
