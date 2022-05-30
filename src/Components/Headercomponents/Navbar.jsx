import * as React from 'react';
import { AppBar, Toolbar, Typography, Button, Box,Hidden, IconButton } from "@material-ui/core";
import { useStyles } from "./Headerstyle";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import {Link} from 'react-scroll';
export default function Navbar({navlinks, handleDrawerToogler}) {
    const classes = useStyles();
    // const navlinks = [
    //     {label:"About", Id:"About"},
    //     {label:"Portfolio", Id:"Portfolio"},
    //     {label:"Contact", Id:"Contact"},
    // ]
  return (
    <div >
      <AppBar position="fixed" className={classes.navBar}>
        <Toolbar style={{backgroundColor:"#1e464a",color:"white"}} className={classes.ToolBar}>
          <Typography variant="h4" component="h6">
            {"GreatCoders"}
          </Typography>
         <Box component={Hidden} xsDown>
          <Box>
            {navlinks.map((item,i)=>
            <Button key={i} className={classes.navlinks} style={{color:"white"}}
            activeClass='active' to={`${item.Id}`} spy={true} smooth={true} offset={-70} duration={500} color='inherit' component={Link}
            
            >
              {item.label}
            </Button>)}
          </Box>
          </Box>


          <Box component = {Hidden} smUp>
            <IconButton  color="inherit" onClick={handleDrawerToogler}>
              <MenuOpenIcon/>
            </IconButton>


          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
