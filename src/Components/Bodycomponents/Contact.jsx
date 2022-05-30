import { Box, Grid, Hidden,Container,Button} from '@material-ui/core'
import React, { useState } from 'react'
import { useStyle } from "./BodyStyles"
import image from "../../images/contactus.jpg"
import { RenderSectionHeading } from '../common/commonComponents'
import { RenderInputText } from '../common/FormComponent'
import ScrollAnimation from 'react-animate-on-scroll';


export default function Contact() {
    const classes = useStyle();
    const [state,setState] = useState({
        data:{
            firstName:"",
            email:"",
            message:""
        },
        errors:{},
    });
    
    const handleOnChange = ({target})=>{
        const {data,errors} = state;
        //setting errors
        target.value.length <=3 ? (errors[target.name] = `${target.name} at least 3 characters`):( errors[target.name]="");
        data[target.name] = target.value;
        setState({data:data, errors:errors})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("Submitted", state.data )
        //api call to post data
    }
  return (
    <div>
      <Box className={classes.section} id='Contact'>
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
                    smallTxt:"Contact Me",
                    heading:"Seems to be interesting", 
                    description:"Got my Portfolio seen, than feel free to contact me for your future projects"
                    })}
                    <br/>
                    <form onSubmit={handleSubmit}>
                    <Grid container direction="row" justify='center' alignItems='center'>
                       <Grid item xs={12} sm={10} style={{marginBottom:"16px"}}>                 
                           {RenderInputText({
                               label:"First Name", 
                               name:"firstName",
                               state:state, 
                               onChange:handleOnChange, 
                               })}
                        </Grid> 
                       <Grid item xs={12} sm={10} style={{marginBottom:"16px"}}>                 
                           {RenderInputText({
                               label:"Email",
                                name:"email",
                                state:state, 
                                onChange:handleOnChange,
                                })}
                        </Grid> 
                       <Grid item xs={12} sm={10} style={{marginBottom:"16px"}}>                 
                           {RenderInputText({
                               label:"Messages", 
                               name:"message",
                               state:state, 
                               onChange:handleOnChange,
                               multiline:true,
                               rows:5
                               })}
                        </Grid> 
                       <Grid item xs={12} sm={8} style={{marginBottom:"16px"}}>                 
                           <Button variant = 'outlined' type='submit' fullWidth={true} className={classes.submitBtn}>

                               Submit
                           </Button>
                        </Grid> 
                    </Grid>
                    </form>
              </Grid>
          </Grid>
          </Container>
          </ScrollAnimation>
      </Box>
    </div>
  )
}
