import { Box, Drawer, IconButton, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
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
          // sx={{ width: "100vw", display: "flex", justifyContent: "flex-end" }}
        >
          <IconButton>
            <CloseIcon sx={{ color: "#000" }} />
          </IconButton>
        </Box>
        <Box
          sx={{
          
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#000",
          }}
        >
          <Stack spacing={4}>
          <Typography color="#000" sx={{cursor:'pointer'}}>About Us</Typography>
                    <Typography color="#000" sx={{cursor:'pointer'}}> Services</Typography>
                 <Typography color="#000" sx={{cursor:'pointer'}}> Blog</Typography>
                    <Typography color="#000" sx={{cursor:'pointer'}}>Join Team</Typography>
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
};
export default Navdrawer;