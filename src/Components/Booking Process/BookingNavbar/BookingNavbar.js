import React from 'react';

import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function BookingNavbar() {
  return (
    <div>
    <AppBar sx={{background:'#fff',width:"100%",margin:"0" }} >
      <Container maxWidth="xl">
        <Toolbar>
          <Box sx={{ width:{md:'40%',xs:'100%'} }}>
<Link to='/'> <Typography className = 'fitbitName'>Better You<span className='period'>.</span></Typography></Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>


    </div>
  )
}

export default BookingNavbar;