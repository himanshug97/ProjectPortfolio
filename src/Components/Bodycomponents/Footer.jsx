import { Box, IconButton,Typography } from '@material-ui/core'
import React from 'react'
import { useStyle } from './BodyStyles'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {Link} from 'react-scroll';

export default function Footer() {
    const classes = useStyle()
  return (
    <Box className={classes.footerContainer} id='Footer'>
       <IconButton className={classes.iconButton } style={{
        
        position:"absolute",
        right:8,
        top:-10,
        backgroundColor:"#0097a7",
        color:"white",
    }}
    
    to="Header" spy={true} smooth={true} offset={-70} duration={2000} color='inherit' component={Link}>
           <ArrowUpwardIcon/>
        </IconButton>    
        <Typography variant='body1' component='h4' align="center" color="inherit">
            Developed and Designed by Himanshu, All Right Reserved © 2022
        </Typography>
    </Box>
  )
}
