import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';

const drawerWidth = 240;
const navItems = ['Help', 'Deutsch | EUR' , 'Icon'];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {    
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
  
      <Divider />
      <List>
          
  {navItems.map((item) => (
      <ListItem key={item} disablePadding>
      <ListItemButton sx={{ textAlign: 'center' }}>
     
        <ListItemText primary={item} />
      </ListItemButton>
    </ListItem>
  ))}
</List>

    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" color="primary" sx={{ background: 'white' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
  variant="h6"
  component="div"
  sx={{
    flexGrow: 1,
    display: { xs: 'none', sm: 'block' },
    color: 'rgba(255, 113, 144, 1)' // Add color property
  }}
>
  LOGO
</Typography>

<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
  {navItems.map((item) => (
 <Button key={item} sx={{ color: 'rgba(255, 113, 144, 1)' }}>
      <AssistantPhotoIcon/> {item}
    </Button>
  ))}
</Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}



export default Navbar;
