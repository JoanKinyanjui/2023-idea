import { Box, Drawer, IconButton, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
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
          <IconButton>
            <CloseIcon sx={{ color: "#000" , backgroundColor: 'rgb(239, 250, 239)'}} />
          </IconButton>
        </Box>
        <Box
          sx={{
          
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#000",
            backgroundColor: 'rgb(239, 250, 239)',
          }}
        >
          <Stack spacing={3}>
          {/* <Typography color="#000" sx={{cursor:'pointer'}}>About Us</Typography> */}
<Link to='/services'><Typography color="#000" sx={{cursor:'pointer'}}> Services</Typography></Link>
                 <Typography color="#000" sx={{cursor:'pointer'}}> Blog</Typography>
                    <Typography color="#000" sx={{cursor:'pointer'}}>Join Team</Typography>
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
};
export default Navdrawer;