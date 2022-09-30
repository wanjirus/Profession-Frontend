import React from "react";
import {
    Avatar,
    Box,
    Typography
} from '@material-ui/core';
import getInitials from '../../utils/getInitials';
import logo from '../../assets/mirror.jpg';

const Brand = () =>{
return (
     <Box
    sx={{
      alignItems: 'center',
      display: 'flex'
    //   backgroundColor:'blue'
    }}
  >
    <Avatar
      src={logo}
      sx={{ mr: 6,
        height:'300px',
        width:'300px',
        display:'flex',
          
    }}
    >
    
      {/* {getInitials(staff.firstname)} */}
    </Avatar>
    {/* <Typography
      color="textPrimary"
      variant="body1"
    >
      {staff.email}
    </Typography> */}
  </Box>
)
}
export default Brand;