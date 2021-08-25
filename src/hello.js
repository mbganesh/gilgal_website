import React from 'react'
import firebase from './firebase'

class App extends React.Component {
  handleChange = (e) =>{
    const {name, value } = e.target
    this.setState({
        [name]: value
      })
  }
  configureCaptcha = () =>{
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
        console.log("Recaptca varified")
      },
      defaultCountry: "IN"
    });
  }
  onSignInSubmit = (e) => {
    e.preventDefault()
    this.configureCaptcha()
    const phoneNumber = "+91" + this.state.mobile
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log("OTP has been sent")
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          console.log("SMS not sent")
        });
  }
  onSubmitOTP = (e) =>{
    e.preventDefault()
    const code = this.state.otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      alert("User is verified")
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }
  render() {
    return (
      <div>
        <h2>Login Form</h2>
        <form onSubmit={this.onSignInSubmit}>
          <div id="sign-in-button"></div>
          <input type="number" name="mobile" placeholder="Mobile number" required onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>

        <h2>Enter OTP</h2>
        <form onSubmit={this.onSubmitOTP}>
          <input type="number" name="otp" placeholder="OTP Number" required onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
export default App









import React from "react";

import AppBar from "@material-ui/core/AppBar";

import Toolbar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";

import DehazeIcon from "@material-ui/icons/Dehaze";

import Phy from "./Physics.svg";

import Drawer from "@material-ui/core/Drawer";

import "./A.css";

import Mat from "./Maths.svg";

import Che from "./Chemistry.svg";

import Bot from "./Botany.svg";

import Zoo from "./Zoology.svg";

import Acc from "./Accountancy.svg";

import His from "./History.svg";

import Geo from "./Geography.svg";

import Com from "./Commerce.svg";

import Eco from "./Economics.svg";

import Sta from "./Statistics.svg";

import Comp from "./Computerscience.svg";

import clsx from "clsx";

import Divider from "@material-ui/core/Divider";

import MenuIcon from "@material-ui/icons/Menu";

import InboxIcon from "@material-ui/icons/MoveToInbox";

import List from "@material-ui/core/List";

import ListItem from "@material-ui/core/ListItem";

import ListItemIcon from "@material-ui/core/ListItemIcon";

import ListItemText from "@material-ui/core/ListItemText";

import CssBaseline from "@material-ui/core/CssBaseline";

import MailIcon from "@material-ui/icons/Mail";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import LockIcon from "@material-ui/icons/Lock";

import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";

import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";

import ShareIcon from "@material-ui/icons/Share";

import ListAltIcon from "@material-ui/icons/ListAlt";

import ErrorIcon from "@material-ui/icons/Error";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import Grid from "@material-ui/core/Grid";

​

const drawerWidth = 350;

​

const useStyles = makeStyles((theme) => ({

  root: {

    display: "flex",

  },

  rootgrid: {

    flexGrow: 1,

  },

  appBar: {

    transition: theme.transitions.create(["margin", "width"], {

      easing: theme.transitions.easing.sharp,

      duration: theme.transitions.duration.leavingScreen,

    }),

  },

  appBarShift: {

    width: `calc(100% - ${drawerWidth}px)`,

    marginLeft: drawerWidth,

    transition: theme.transitions.create(["margin", "width"], {

      easing: theme.transitions.easing.easeOut,

      duration: theme.transitions.duration.enteringScreen,

    }),

  },

  menuButton: {

    marginRight: theme.spacing(2),

  },

  hide: {

    display: "none",

  },

  drawer: {

    width: drawerWidth,

    flexShrink: 0,

  },

  drawerPaper: {

    width: drawerWidth,

  },

  drawerHeader: {

    display: "flex",

    alignItems: "center",

    padding: theme.spacing(0, 1),

    // necessary for content to be below app bar

    ...theme.mixins.toolbar,

    justifyContent: "flex-end",

  },

  content: {

    flexGrow: 1,

    padding: theme.spacing(3),

    transition: theme.transitions.create("margin", {

      easing: theme.transitions.easing.sharp,

      duration: theme.transitions.duration.leavingScreen,

    }),

    marginLeft: -drawerWidth,

  },

  contentShift: {

    transition: theme.transitions.create("margin", {

      easing: theme.transitions.easing.easeOut,

      duration: theme.transitions.duration.enteringScreen,

    }),

    marginLeft: 0,

  },

  root1: {

    width: "9.375rem",

  },

  media: {

    height: "9.375rem",

  },

}));

​

function App() {

  const classes = useStyles();

  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

​

  const handleDrawerOpen = () => {

    setOpen(true);

  };

​

  const handleDrawerClose = () => {

    setOpen(false);

  };

​

  const alertInfo = (text) => {

    alert(text + " Item Clicked");

  };

  const [navItemIcons] = React.useState([

    <LockIcon style={{ color: "#00ADB5" }} />,

    <SupervisorAccountIcon style={{ color: "#00ADB5" }} />,

    <PhoneInTalkIcon style={{ color: "#00ADB5" }} />,

    <ShareIcon style={{ color: "#00ADB5" }} />,

    <ListAltIcon style={{ color: "#00ADB5" }} />,

    <ErrorIcon style={{ color: "#00ADB5" }} />,

    <ExitToAppIcon style={{ color: "#00ADB5" }} />,

  ]);

​

  const [navItemName] = React.useState([

    "Account",

    "About Us",

    "Contact Us",

    "Share the App",

    "Terms and Privacy Policy",

    "App info",

    "Sign Out",

  ]);

​

  const [subjectName] = React.useState([

    "Maths",

    "Chemistry",

    "Physics",

    "Botany",

    "Zoology",

    "History",

    "Geography",

    "Economics",

    "Commerce",

    "Accountancy",

    "Statistics",

    "Computer",

  ]);

  const [subjectIcon] = React.useState([

    Mat,

    Che,

    Phy,

    Bot,

    Zoo,

    His,

    Geo,

    Eco,

    Com,

    Acc,

    Sta,

    Comp,

  ]);

  const [spacing] = React.useState(2);

​

  return (

    <div>

      <div className={classes.root}>

        <CssBaseline />

        <AppBar

          style={{ background: "#00ADB5" }}

          position="fixed"

          className={clsx(classes.appBar, {

            [classes.appBarShift]: open,

          })}

        >

          <Toolbar>

            <IconButton

              color="inherit"

              aria-label="open drawer"

              onClick={handleDrawerOpen}

              edge="start"

              className={clsx(classes.menuButton, open && classes.hide)}

            >

              <MenuIcon />

            </IconButton>

            <Typography variant="h6" noWrap>

              Gilgal

            </Typography>

          </Toolbar>

        </AppBar>

        <Drawer

          className={classes.drawer}

          variant="persistent"

          anchor="left"

          open={open}

          classes={{

            paper: classes.drawerPaper,

          }}

        >

          <div className={classes.drawerHeader}>

            <IconButton onClick={handleDrawerClose}>

              {theme.direction === "ltr" ? (

                <ChevronLeftIcon style={{ color: "#00ADB5" }} />

              ) : (

                <ChevronRightIcon />

              )}

            </IconButton>

          </div>

          <Divider />

          <List>

            {navItemName.map((text, index) => (

              <ListItem onClick={() => alertInfo(text)} button key={text}>

                <ListItemIcon>{navItemIcons[index]}</ListItemIcon>

                <ListItemText primary={text} />

              </ListItem>

            ))}

          </List>

        </Drawer>

      </div>

      <div class="button" style={{ display: "flex", justifyContent: "center" }}>

        <Button

          variant="contained"

          style={{

            background: "#00ADB5",

            color: "white",

            marginTop: "6.25rem",

            fontWeight: "bold",

            textTransform: "none",

            paddingLeft: "3.125rem",

            paddingRight: "3.125rem",

            fontSize: "1.5rem",

            display: "inline-block",

          }}

        >

          Standard 12

        </Button>

      </div>

      <div

        style={{

          marginLeft: "6.25rem",

          fontSize: "1.5rem",

          display: "inline-block",

          fontWeight: "bold",

          color: "#00ADB5",

        }}

      >

        Subjects

      </div>

      <div style={{ marginTop: "3.125rem", marginBottom: "3.125rem" }}>

        <hr />

      </div>

      <div>

        <Grid container className={classes.rootgrid} justify="center" spacing={spacing}>

          {subjectName.map((text, index) => (

            <Button

              variant="contained"

              style={{

                background: "#ffffff",

                color: "black",

                fontWeight: "bold",

                width: "18.75rem",

                height: "18.75rem",

                textTransform: "none",

                paddingLeft: "3.125rem",

                paddingRight: "3.125rem",

                fontSize: "1.5rem",

                display: "inline-block",

              }}

            >

              <img

                style={{

                  marginTop: "0.625rem",

                  width: "12.5rem",

                  height: "12.5rem",

                }}

                src={subjectIcon[index]}

              ></img>

              {text}

            </Button>

          ))}

        </Grid>

      </div>

    </div>

  );

}

​

export default App;

