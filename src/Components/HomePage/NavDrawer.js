import { Box, Drawer, IconButton, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import {RiAccountCircleFill} from 'react-icons/ri'

const Navdrawer = ({ open, setOpen }) => {
  return (
    <Box sx={{ display: { xs: "flex", md: "none" } }}>
      <Drawer
        anchor="top"
        variant="temporary"
        open={open}
        onClick={() => setOpen(false)}
        PaperProps={{
          sx: {
            background: "#fff",
            color: "#000",
          },
        }}
      >
        <Box
          sx={{  backgroundColor: 'rgb(239, 250, 239)',width: "100vw", display: "flex" }}
        >
          <div className="w-screen flex justify-between items-center">
           <Link to='/'> <Typography className = 'fitbitName'>Better You<span className='period'>.</span></Typography></Link>
          <IconButton>

         <CloseIcon sx={{ color: "#000" , backgroundColor: 'rgb(239, 250, 239)'}} />
         </IconButton>
         </div>
          
        </Box>
        <Box
          sx={{
          
            height: "200px",
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            color: "#000",
            backgroundColor: 'rgb(239, 250, 239)',
          }}
        >
          <Stack spacing={3}>
<Link to='/services'><Typography color="#000" sx={{cursor:'pointer'}}> Services</Typography></Link>
<Link to='/blog'> <Typography color="#000" sx={{cursor:'pointer'}}> Blog</Typography></Link>
                    <Typography color="#000" sx={{cursor:'pointer'}}>Join Team</Typography>
                    <Link to='/loggedin'> <Typography color="#000" sx={{cursor:'pointer', fontFamily:"System"}} ><RiAccountCircleFill className="md:text-2xl text-xl" /></Typography> </Link>
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
};
export default Navdrawer;