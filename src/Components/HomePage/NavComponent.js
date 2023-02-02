
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";



import { useState } from "react";
import './Navbar.css';
import MenuIcon from "@mui/icons-material/Menu";
import Navdrawer from "./NavDrawer";
import { Link } from "react-router-dom";
const NavbarComponent = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <AppBar sx={{background:'#fff',width:"100%",margin:"0" }} >
      <Container maxWidth="xl">
        <Toolbar>
          <Box sx={{ width:{md:'40%',xs:'100%'} }}>
<Link to='/'> <Typography className = 'fitbitName'>Better You<span className='period'>.</span></Typography></Link>
          </Box>
          <Box
            color="#fff"
            sx={{
              display: "flex",
              width: { xs: "5%", md: "60%", lg:'40%' },
              justifyContent: "space-around",
              opacity: { xs: 0, md: 1 },
            }}
          >
                  <Typography color="#000" sx={{cursor:'pointer', fontFamily:"System"}} >About Us</Typography>
              <Link to='/services'> <Typography color="#000" sx={{cursor:'pointer', fontFamily:"System"}} >Services</Typography></Link>
                  <Typography color="#000"sx={{cursor:'pointer', fontFamily:"System"}} > Blog</Typography>
                  <Typography color="#000" sx={{cursor:'pointer', fontFamily:"System"}} >Join Team</Typography>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={handleOpen}>
              <MenuIcon sx={{ color: "#000" }} />
            </IconButton>
          </Box>
          <Navdrawer handleOpen={handleOpen} open={open} setOpen={setOpen} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavbarComponent;