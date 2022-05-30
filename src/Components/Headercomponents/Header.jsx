import { Box, Typography} from '@material-ui/core'
import React, { useState } from 'react'
import { useStyles } from './Headerstyle'
import Navbar from './Navbar'
import { Decorator } from '../common/commonComponents'
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import DrawerComponent from './DrawerComponent'
import ReactTyped from 'react-typed'


export default function Header() {
    const classes = useStyles()
    const [initalState, setInitalState] = useState(false)
    const handleDrawerToogler = ()=>{
      setInitalState(!initalState)
    }

    const navlinks = [
          {label:"About", Id:"About"},
          {label:"Portfolio", Id:"Portfolio"},
          {label:"Contact", Id:"Contact"},
      ] 
  return (<>
  
    <Box className={classes.HeaderWraper} id='Header'>
    <Navbar className={classes.head} navlinks={navlinks} handleDrawerToogler={handleDrawerToogler}/>
    <DrawerComponent initalState={initalState} navlinks={navlinks} handleDrawerToogler={handleDrawerToogler}/>
      <Box className={classes.Headercontainer}>
      <Typography variant='h3' component='h4' className={classes.headerTitle}>
        I'm a <span style={{paddingRight:"5px"}}></span>
        <ReactTyped
        strings={[
          "Web Developer,",
          "UI/UX Designer,",
          "Digital Expert,"
        ]}
         typeSpeed =  {30}
         backSpeed={50}
         loop
        />

        
      </Typography>
      <Typography variant='h3' component='h4' className={classes.headerDesc}>
        I Create Website And Application, 
        <br/>
        Based On Your Needs...
      </Typography>
      {Decorator({label:"About Us", withIcon:true,Icon:<ArrowDownwardRoundedIcon/>})}
      </Box>
    </Box>
  
    </>
    
  )
}
