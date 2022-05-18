import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
// import StaffListResults from 'src/components/staff/StaffListResults';
// import StaffListToolbar from 'src/components/staff/StaffListToolbar';
import StaffListResults from '../Component/staff/StaffListResults';
import StaffListToolbar from '../Component/staff/StaffListToolbar';
import { useApi } from '../REST-API/api';
// import { useApi } from 'src/REST-API/api';
// import { useLocation, useParams } from 'react-router';

function CustomerList() {
  const api = useApi();
  // const { userId } = useParams();
  // const location = useLocation();

  const [staffs, setStaffs] = useState(['']);
  // console.log('this is everything');
  // console.log(userId);
  // console.log(location);
  useEffect(() => {
    (async () => {
      const result = await api.get('staffs', {
        params: {
          userId: '1'
        }
      });
      setStaffs(result.data);
      console.log('this is the user');
      console.log(staffs);
    })();
  }, []);

  return (
    <>
      <Helmet>
        <title>Staffs | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <StaffListToolbar />
          <Box sx={{ pt: 3 }}>
            <StaffListResults staffs={[staffs]} />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default CustomerList;
