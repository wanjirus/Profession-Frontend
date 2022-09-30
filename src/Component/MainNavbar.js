import React, {useState} from 'react';
// import './navbar.css';
// import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './MainNavbar.css';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Button} from '@mui/material';
import { AppBar, Box, Toolbar } from '@material-ui/core';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
const Menu = () => (
  <>
   <p><a href='home'> Home</a></p>
    <p><a href='gpt3'> What is Gpt3</a></p>
    <p><a href='possibility'> Opon AI</a></p>
    <p><a href='features'> Case Studies</a></p>
    <p><a href='Blog'> Library</a></p>
    <p><a href='etc'> Etc</a></p>
  </ >
)

//BEM -> Block Element Modifier

const MainNavbar = (props) => {
  const navigate = useNavigate();
const [toggleMenu, setToggleMenu] = useState(false);
const handleSignUpForm = () => navigate('/register');
const handleLoginForm = () => navigate('/login');
  // return (

//     <AppBar
//       elevation={0}
//       {...props}
//     >
// <div className='toolbar'>
 
//     <div className='gpt3__navbar'>
//       <div className='gpt3__navbar-links'>
//         <div className='gpt3__navbar-links_logo'>
//           <img src={logo} alt ='logo' />
//         </div>
//         <div className='gpt3__navbar-links_container'>
//           <Menu />
//         </div>
//       </div>
//       <div className='gpt3__navbar-sign'>
//         <p>
//         <Button onClick={handleLoginForm} style={{}}>Login</Button>
//         </p>
//         <Button onClick={handleSignUpForm} type='submit'>Sign Up</Button>
//       </div>
//       <div className='gpt3__navbar-menu'>
//         {toggleMenu
//         ? <MenuItem color='white' size = {27} onClick = {() => setToggleMenu(false)} />
//         : <MenuItem color='white' size = {27} onClick = {() => setToggleMenu(true)}/>
//       }
//       {toggleMenu && (
//         <div className='gpt3__navbar-menu_container scale-up-center'>
//           <div className='gpt3__navbar-menu_container-links'>
//             <Menu />
//             <div className='gpt3__navbar-menu_container-links-sign'>
//               <p>Sign in</p>
              
//             </div>
             
//             </div>      
//          </div>
      
//       )}
//       </div>

//       </div>
//       </div>
//       </AppBar>
//   );
return (
  <AppBar
    elevation={0}
    {...props}
  >
    <Toolbar sx={{ height: 64 }}>
      
      <RouterLink to="/">
      <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt ='logo' />
        </div>
      </RouterLink>
      
      <div className='gpt3__navbar-links_container'>
           {/* <Menu /> */}
           <RouterLink to ='/'>
              <p> Home</p>
            </RouterLink>

            <RouterLink to ='/properties'>
            <p>properties</p>
            </RouterLink>

            
       </div>
      <Box sx={{ flexGrow: 1 }} />
      <div className='Gpt3__login__singup'>
      <Button onClick={handleLoginForm} color="inherit">Login</Button>
      <Button onClick={handleSignUpForm} color="inherit">Sign Up</Button>
    </div>
      <div className='gpt3__navbar-menu'>
        {
          toggleMenu
          ? <RiCloseLine color='white' size = {27} onClick = {() => setToggleMenu(false)} />
          : <RiMenu3Line color='white' size = {27} onClick = {() => setToggleMenu(true)}/>
        
        } {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
              <div className='gpt3__navbar-menu_container-links-sign'>
              <Button onClick={handleLoginForm} color="inherit">Login</Button>
      <Button onClick={handleSignUpForm} color="inherit">Sign Up</Button>
              </div>
               
              </div>      
           </div>
        
        )
}
      </div>
    </Toolbar>
  </AppBar>
);
}

export default MainNavbar