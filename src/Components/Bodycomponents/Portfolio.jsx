import React from 'react'
import { useStyle } from './BodyStyles'
import { Box,Grid,Container,Typography ,Button} from '@material-ui/core';
import { RenderSectionHeading } from '../common/commonComponents';
import image1 from "../../images/5-2.jpg"
import image2 from "../../images/5-3.jpg"
import image3 from "../../images/5-4.jpg"
import image4 from "../../images/5-6.jpg"
import image5 from "../../images/5-8.jpg"
import image6 from "../../images/5-9.jpg"
import ScrollAnimation from 'react-animate-on-scroll';



export default function Portfolio() {
    const classes = useStyle();
    const portfolioData =[
        {url:image1,title:"# Portfolio",link:""  },
        {url:image2,title:"# Portfolio",link:""  },
        {url:image3,title:"# Portfolio",link:""  },
        {url:image4,title:"# Portfolio",link:""  },
        {url:image5,title:"# Portfolio",link:""  },
        {url:image6,title:"# Portfolio",link:""  },
    ]
  return (
    <Box className={classes.sectionDark} id="Portfolio">
        {/* header 
        image*/}
        <Grid container style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <Grid item xs={12} sm={8}>
                {RenderSectionHeading({
                    smallTxt:"Portfolio",
                    heading:"Let's See My Work",
                    alignCenter:true
                })}
            </Grid>
        </Grid>

        {/* image section */}
        <ScrollAnimation animateIn='fadeIn'>
        <Container maxWidth="xl">
        <Grid container spacing={3}>
            {portfolioData.map((item,i)=>(
            <Grid item xs={6} sm={6} lg= {2} key={i}>
            <Box className={classes.imageContainer}>
                <img src={item.url} alt={item.title} className={classes.responsiveImg}/>
                
                <Box className={classes.overlay}> 
                <Typography className={classes.overlayTitle}>{item.title}</Typography>
                <Button variant="contained">Visit</Button>
                </Box>
            </Box>

            
        </Grid>
        ))}
            
        </Grid>
        </Container>
        </ScrollAnimation>
    </Box>
  )
}
