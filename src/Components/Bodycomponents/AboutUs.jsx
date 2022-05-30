import { Box, Grid, Hidden,Container } from '@material-ui/core'
import React from 'react'
import { useStyle } from "./BodyStyles"
import image from "../../images/About.jpg"
import { CardMedia, RenderSectionHeading } from '../common/commonComponents'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WebIcon from '@mui/icons-material/Web';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ScrollAnimation from 'react-animate-on-scroll';

export default function AboutUs() {
    const classes = useStyle()
    const cardMediaData = [
      {
        title:"Web Development",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, earum.",
        icon:<WebIcon />,
    },
      {
        title:"Graphic Design",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, earum.",
        icon:<GraphicEqIcon/>,
    },
      {
        title:"Mobile Apps",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, earum.",
        icon:<PhoneIphoneIcon/>,
    },
      {
        title:"Marketing",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, earum.",
        icon:<AcUnitIcon/>,
    },
  ]
  return (
    <div>
      <Box className={classes.section} id='About'>
        <ScrollAnimation animateIn='fadeIn'>
        <Container className={classes.sectionImg}>
          <Grid container spacing={4}>
              <Grid item sm={5} >
                  <Box component={Hidden} xsDown>
                  <img src={image} alt="about us" className={classes.responsiveImg}/> 
                  </Box>
                  </Grid>
              <Grid item xs={12} sm={7}>
                  {RenderSectionHeading({
                      smallTxt:"ABOUT ME",
                      heading:"Hello I'm Himanshu", 
                      description:"A self taught developer who loves to code something that will impact majority of the people"
                      })}
                      <br/>

                      <Grid container >
                        
                      {cardMediaData.map((item,i)=> <Grid item xs={12} sm={6} key={i} >{
                        CardMedia({
                          label:item.title,
                          Desc:item.description,
                          Icon:item.icon,
                          
                          })

                      } </Grid>
                      )}
                        </Grid>
              </Grid>
          </Grid>
          </Container>
          </ScrollAnimation>
      </Box>
    </div>
  )
}
