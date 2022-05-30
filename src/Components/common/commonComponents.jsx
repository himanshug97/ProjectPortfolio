import React from 'react'
import { useStyles } from '../Headercomponents/Headerstyle';
import { Box, Typography,Avatar,Grid} from '@material-ui/core';
import { useStyle as BodyStyles } from '../Bodycomponents/BodyStyles';

export const Decorator = ({label,withIcon,Icon,styles})=>{
    const classes = useStyles()
    return (<Box className={classes.decorator} style={styles}>
        <Typography component='span' className={classes.decoratorText}>
          {label}
        </Typography>
        {withIcon ? <Typography component='span' className={classes.arrow}>
         {Icon}
        </Typography>: null}
      </Box>  )
}

export const Divider = ({style})=>{
    const classes = BodyStyles()
    return <div className={classes.divider} style={style}></div>
}



export const RenderSectionHeading =({smallTxt,heading,description, alignCenter}) =>{
    
    const classes = BodyStyles();
    return(
    <Box className={classes.sectionHeadingCont}>
    {Decorator({
        label:smallTxt,
        withIcon:false,
        styles:alignCenter?{width:"100px",margin:"10px auto"}: {},
        })}
    <Typography variant='h4' align={alignCenter?"center":"left"} className={classes.sectionHeading}>
        {heading}
    </Typography> 
    {Divider({style:alignCenter?{margin:"16px auto"}:{margin:"16px 0px"}})}
    <Typography variant='body1' component='h6' align={alignCenter?"center":"left"} className={classes.sectionHeading}>
        {description}
    </Typography> 
    </Box>
    )
}

export const CardMedia =({label,Desc,Icon,key})=>{
    const classes = BodyStyles();
   return ( 
   <Grid container style={{marginTop:"10px",}} >
        <Grid item xs={3} className={classes.avatarCont} >
        <Avatar className={classes.avatar} style={{backgroundColor:"#0097a7"}}>{Icon}</Avatar>
        </Grid>
        <Grid item xs={9} className={classes.mediaText} >
            <Typography variant='body1' component='h6' gutterBottom>
                {label}
            </Typography>
            <Typography variant='caption' gutterBottom>
                {Desc}
            </Typography>

        </Grid>
    </Grid>
    );
};


