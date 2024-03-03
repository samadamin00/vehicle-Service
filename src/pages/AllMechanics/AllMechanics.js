import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function AllMechanics() {
  const [mechanics, setMechanics] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  let token = localStorage.getItem('token');

  const fetchData = async () => {
    try {
      const response = await axios.get('https://mechanic-system-backend-bano-qabil-mern.vercel.app/api/admin/mechanicprofile',token); // Replace '/api/users' with your API endpoint
      console.log(response.data)
      setMechanics(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Mechanic Name</TableCell>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">CNIC</TableCell>
              <TableCell align="right">Phone No</TableCell>
              <TableCell align="right">Location</TableCell>
              <TableCell align="right">service</TableCell>
              <TableCell align="right">utilityImage</TableCell>
              <TableCell align="right">Verification</TableCell>
              <TableCell align="right">serviceVerification</TableCell>
              <TableCell align="right">__v</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mechanics.map((mechanic) => (
              <TableRow key={mechanic.name}>
                <TableCell component="th" scope="row">{mechanic.avatar}</TableCell>
                <TableCell component="th" scope="row">{mechanic.name}</TableCell>
                <TableCell align="right">{mechanic._id}</TableCell>
                <TableCell align="right">{mechanic.CNIC}</TableCell>
                <TableCell align="right">{mechanic.phoneNumber}</TableCell>
                <TableCell align="right">{mechanic.location}</TableCell>
                <TableCell align="right">{mechanic.service}</TableCell>
                <TableCell align="right">{mechanic.utilityImage}</TableCell>
                <TableCell align="right">{mechanic.verification}</TableCell>
                <TableCell align="right">{mechanic.serviceVerification}</TableCell>
                <TableCell align="right">{mechanic.__v}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default AllMechanics;
