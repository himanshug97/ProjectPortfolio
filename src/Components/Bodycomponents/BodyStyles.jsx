import { makeStyles } from "@material-ui/core";
import { Theme } from "../Theme"; 


export const useStyle = makeStyles((theme)=>({
    section:{
        backgroundColor:"#1e464a",
        padding:theme.spacing(10,0,8,0),
        color:"white",
        
    },

    sectionImg:{
        marginLeft:"5px"
    },
    //common

    divider:{
        width:"65px",
        height:"4px",
        backgroundColor:"#0097a7",
        
         },

         sectionHeadingCont:{
             padding:theme.spacing(2),
             lineHeight:"50px",

         },

         sectionHeading:{
             color:"white",
             margin:theme.spacing(1, 0)
         },

    //images

    responsiveImg:{
        width:"100%",
        height:"auto",
        marginLeft:"5px"
    },

    avatarCont:{
        display:"flex",
        flexFlow:"row",
        justifyContent:"center",
        alignItems:"center"
    },

    avatar:{
        backgroundColor: "#0097a7",
        color:Theme.colors.base2
    },

    mediaText:{
        color:Theme.colors.base2,
        padding:"10px",
      
    },


    //Portfolio
    sectionDark:{
        backgroundColor:"#143438",
        // padding:theme.spacing(10,0,8,0),
        color:"white",
        height:"60vh"
    },


    imageContainer:{
        position:"relative",
        cursor:"pointer",
        '&:hover $overlay':{
            opacity:1,
        },
    },

    overlay:{
        position:"absolute",
        width:"103%",
        height:"100%",
        top:0,
        left:0,
        backgroundColor:Theme.colors.primary,
        // color:"white",
        display:"flex",
        flexFlow:"column wrap",
        justifyContent:"center",
        alignItems:"center",
        opacity:0,
        transition:"0.7s"
    },

    overlayTitle:{
        fontSize:"1.5rem",
        marginBottom:"16px",
        [theme.breakpoints.down('xs')]:{
            fontSize:"1.2rem",
        }
    },


    submitBtn:{
        backgroundColor:Theme.colors.primary,
        color:"white",
        '&:hover':{
            backgroundColor:Theme.colors.primary1,
        }
    },



    //footer

    footerContainer:{
        backgroundColor:Theme.colors.primary1,
        color:"white",
        padding:theme.spacing(1.5),
        position:"relative"
    },

   
    
}))