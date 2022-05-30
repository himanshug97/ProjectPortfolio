import { makeStyles } from "@material-ui/core"
import { Theme } from '../Theme'
import Image from '../../images/brandBanner.jpg'


export const useStyles = makeStyles((theme)=>({

   head:{
      backgroundColor:"#1e464a"
   },
    HeaderWraper:{
       width:'100%',
       minHeight:"90vh",
       height:"auto",
       background:`linear-gradient(to bottom right,#04303140, #00606473),url(${Image})`,
       backgroundSize:"cover",
       backgroundRepeat:"no-repeat",
       
    },

    Headercontainer:{
      width:'85%',
      minHeight:"90vh",
      height:"auto",
      display:"flex",
      flexFlow:"column wrap",
      alignItems:"left",
      justifyContent:"center",
      marginLeft:"15px"
    },

    headerTitle:{
       fontSize:"3rem",
       color:"white",
       textAlign:'left',
      [theme.breakpoints.down("xs")]:{
         fontSize:"2rem",
      },
    },
    headerDesc:{
      fontSize:"2rem",
      color:"white",
      [theme.breakpoints.down("xs")]:{
         fontSize:"1.5rem",
      },
   },
    navBar:{
      backgroundColor:'#1e464a',
      color: Theme.colors.base2
    },

    ToolBar:{
       display:"flex",
       flexFlow:"row wrap",
       justifyContent:"space-between"
    },
    navlinks:{
       color:"white"
    },
    
    decorator:{
      
       display:"flex",
       color:"white",
       fontSize:"1.5rem",
       position:"relative",
       marginTop:"20px",
       '&:before':{
          width:"45px",
          height:"45px",
          backgroundColor:"#0097a7",
          content:'""',
          borderRadius:"50%"
       }
    },

    decoratorText:{
       lineHeight:"45px",
       position:"absolute",
       left:"25px",
       cursor:"pointer"
    },

    arrow:{
      lineHeight:"10px",
      position:"absolute",
      left:"100px",
      animationName:"upDown",
      animationDuration:"0.7s",
      animationIterationCount:"infinite",
      cursor:"pointer"
      
    },

    //creating animation
   "@global":{
       "@keyframes upDown":{
          "1%":{
             transform:"scale(0)",
             paddingTop:"0px",
          },
          "100%":{
            transform:"scale(1)",
            paddingTop:"15px",
          },
       },
    },

    //drawer

    drawer:{
       width:"250px",
       height:"100vh"
    },

    drawerContainer:{
      width:"250px",
      height:"100vh",
      backgroundColor:Theme.colors.primary1
    }
    }))
    