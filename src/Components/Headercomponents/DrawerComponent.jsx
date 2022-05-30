import React from 'react'
import { Box, Drawer, ListItem, ListItemText,List } from '@material-ui/core'
import { useStyles } from './Headerstyle'



export default function DrawerComponent({initalState,handleDrawerToogler,navlinks}) {
    const classes = useStyles();
  return (
    <Drawer anchor='left' open= {initalState} onClose={handleDrawerToogler} className={classes.drawer}>
        <Box className={classes.drawerContainer}>
          <List style={{paddingTop:"30px",color:"white"}}>
            {navlinks.map ((item,i)=> (
            <ListItem key={i} style={{paddingTop:"30px",color:"white"}}>
              <ListItemText>{item.label}</ListItemText>
            </ListItem>
            ))}
            
          </List>
      </Box>
    </Drawer>
  )
}
