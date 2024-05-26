import "./header.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SideDrawer from "../drawer/SideDrawer";

interface HeaderProps {
  openDrawer: boolean;
  setOpenDrawer: (action: boolean) => void;
}

const Header = ({ openDrawer, setOpenDrawer }: HeaderProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              setOpenDrawer(!openDrawer);
            }}
          >
            <MenuIcon
             
            />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            APICA
          </Typography>
        </Toolbar>
      </AppBar>
      <SideDrawer open={openDrawer} setOpen={() => setOpenDrawer(false)} />
    </Box>
  );
};

export default Header;
