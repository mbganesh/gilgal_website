// react 
import { React, useState } from 'react'
// firebase
import firebase from './firebase'

// react=router 
import { useHistory, withRouter } from 'react-router-dom';
//lab
import { Alert } from '@material-ui/lab';
// core 
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { Divider, Drawer, Toolbar, AppBar } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List'
import { Box } from '@material-ui/core';
import { Snackbar } from '@material-ui/core';
import { Slide } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';

// icons
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg'
import PersonIcon from '@material-ui/icons/Person';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// logo
import GilgalLogo from './images/imgLogo/gilgal_logo.png';

// cookies
import Cookies from 'universal-cookie';

//axios
import axios from 'axios';




const useStyles = makeStyles((theme) => ({

  appBarStyle: {
    [theme.breakpoints.up('md')]: {
      background: 'transparent', boxShadow: 'none', display: "flex", marginTop: 24, marginBottom: 24
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(0), backgroundColor: "#F4F9F9"
    },
  }, loginbox: {
    backgroundColor: '#1ea5fc',
    color: '#ffffff'
  }, appBarImage: {
    [theme.breakpoints.up('md')]: {
      height: "3rem", marginLeft: "10px"
    },
    [theme.breakpoints.down('sm')]: {
      height: "2.5rem", marginLeft: "10px"
    },
  }, appBarMenuButton: {
    [theme.breakpoints.up('md')]: {
      visibility: "hidden"
    },
    [theme.breakpoints.down('sm')]: {
      visibility: "visible",
      display: "flex",
      justifyContent: "flex-end",
      width: "100%",
      marginLeft: "150px",
    },
  },
  appBarAllButtons: {
    [theme.breakpoints.up('lg')]: {
      visibility: "visible"
    },
    [theme.breakpoints.up('md')]: {
      visibility: "visible"
    },
    [theme.breakpoints.down('sm')]: {
      display: "none"
    },
  }, cardsty: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 340, minHeight: 340,
      margin: theme.spacing(5),
      marginTop: 50,
      flexDirection: 'column',
      border: 'none',
      margin: 'auto',
    }, [theme.breakpoints.up('md')]: {
      maxWidth: 380, minHeight: 380,
      marginLeft: theme.spacing(55),
      marginTop: 65,
      flexDirection: 'column',
      border: 'none',
      margin: 'auto'
    }, [theme.breakpoints.up('lg')]: {
      maxWidth: 390, minHeight: 390,
      flexDirection: 'column',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: 'rgb(69,150,243)',
      margin: 'auto',
      marginTop: 15,
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: 500, minHeight: 500,
      flexDirection: 'column',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: 'rgb(69,150,243)',
      margin: 'auto',
      marginTop: 120,
    },
  },
  btnlogin: {
    [theme.breakpoints.down('sm')]: {
      backgroundColor: "#1ea5fc",
      border: 'none',
      textTransform: 'none',
      padding: '15px 32px',
      textAlign: 'center',
      textDecoration: 'none',
      display: "inlineBlock",
      fontSize: 16,
      border: 0,
      color: 'white',
      height: 50,
      padding: '0 80px',
      marginLeft: theme.spacing(8),
      marginTop: '30px',
      borderRadius: '5px',
      "&:hover": {
        //you want this to be the same as the backgroundColor above
        backgroundColor: "#1ea5fc"
      }
    }, [theme.breakpoints.up('sm')]: {
      backgroundColor: "#1ea5fc",
      border: 'none',
      textTransform: 'none',
      padding: '15px 32px',
      textAlign: 'center',
      textDecoration: 'none',
      display: "inlineBlock",
      fontSize: 16,
      border: 0,
      color: 'white',
      height: 50,
      padding: '0 80px',
      marginLeft: theme.spacing(11),
      marginTop: '50px',
      borderRadius: '5px',
      "&:hover": {
        //you want this to be the same as the backgroundColor above
        backgroundColor: "#1ea5fc"
      }
    }, [theme.breakpoints.up('md')]: {
      backgroundColor: "#1ea5fc",
      border: 'none',
      textTransform: 'none',
      padding: '15px 32px',
      textAlign: 'center',
      textDecoration: 'none',
      display: "inlineBlock",
      fontSize: 16,
      border: 0,
      color: 'white',
      height: 50,
      padding: '0 80px',
      marginLeft: theme.spacing(11),
      marginTop: '50px',
      borderRadius: '5px',
      "&:hover": {
        //you want this to be the same as the backgroundColor above
        backgroundColor: "rgb(69,150,243)"
      },
    }, [theme.breakpoints.up('lg')]: {
      backgroundColor: "#1ea5fc",
      border: 'none',
      textTransform: 'none',
      padding: '15px 32px',
      textAlign: 'center',
      textDecoration: 'none',
      display: "inlineBlock",
      fontSize: 16,
      border: 0,
      color: 'white',
      height: 50,
      padding: '0 80px',
      marginLeft: theme.spacing(13),
      marginTop: '30px',
      borderRadius: '5px',
      "&:hover": {
        //you want this to be the same as the backgroundColor above
        backgroundColor: "#1ea5fc"
      },
    }, [theme.breakpoints.up('xl')]: {
      backgroundColor: "#1ea5fc",
      border: 'none',
      textTransform: 'none',
      padding: '15px 32px',
      textAlign: 'center',
      textDecoration: 'none',
      display: "inlineBlock",
      fontSize: 16,
      border: 0,
      color: 'white',
      height: 50,
      padding: '0 80px',
      marginLeft: theme.spacing(18),
      marginTop: '40px',
      borderRadius: '5px',
      "&:hover": {
        //you want this to be the same as the backgroundColor above
        backgroundColor: "#1ea5fc"
      },
    }
  },
  typo: {
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(8),
      marginLeft: theme.spacing(7),
      fontSize: '90%'
    }, [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(30),
      marginLeft: theme.spacing(7),
      fontSize: '90%'
    }, [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(3.5),
      marginLeft: theme.spacing(10),
      fontSize: '100%'
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: theme.spacing(3.5),
      marginLeft: theme.spacing(10),
      fontSize: '100%'
    }
  },
  button: {
    background: 'none',
    border: 'none',
    color: 'rgb(69,150,243)',
    cursor: 'pointer',
  },
  textfield: {
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(6),
      marginLeft: theme.spacing(6),
      width: '70%',
      fontSize: '70%'
    },
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(8),
      marginLeft: theme.spacing(8),
      width: '70%',
      fontSize: '70%'
    }
  },
  doHaveAcc: {
    [theme.breakpoints.up('lg')]: {
      marginLeft: theme.spacing(3)
    },
    [theme.breakpoints.up('xl')]: {
      marginLeft: theme.spacing(7),
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(2),
      marginTop: theme.spacing(2)
    }
  },
  disclaimer: {
    [theme.breakpoints.down('sm')]: {
      marginRight: "6%",
      marginTop: "5%",
      marginLeft: "6%"
    },
    [theme.breakpoints.up('sm')]: {
      marginRight: "6%",
      marginTop: "20%",
      marginLeft: "6%"
    },
    [theme.breakpoints.up('md')]: {
      marginRight: "6%",
      marginTop: "15%",
      marginLeft: "6%"
    },
    [theme.breakpoints.up('lg')]: {
      marginRight: "6%",
      marginTop: "4%",
      marginLeft: "6%"
    },
    [theme.breakpoints.up('xl')]: {
      marginRight: "6%",
      marginTop: "10%",
      marginLeft: "6%"
    }
  }
}));



function Login() {
  const cookies = new Cookies();
  const classes = useStyles();
  const history = useHistory();
  const [values, setValues] = useState({});
  const [mobileNoText, setMobileNoText] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [captchaChecker, setcaptchaChecker] = useState(false);
  const [buttonDisabled, setbuttonDisabled] = useState(false)
  const [drawerOpen, setdrawerOpen] = useState(false)
  const [menuIcons] = useState([<HomeIcon />, <PermPhoneMsgIcon />, <InfoIcon />, <PersonIcon />])
  const [logIn, setlogIn] = useState("Log In")

  const [api, setapi] = useState("");
  const [alert1, setalert] = useState(false);
  const [openSnackbar, setopenSnackbar] = useState(false)
  const [mobileNoError, setmobileNoError] = useState(false)
  const [mobileNoHelpertext, setmobileNoHelpertext] = useState("")

  const handleChange = (e) => {
    setMobileNo(e.target.value)
    const re = /^[0-9\b]+$/;
    setmobileNoError(false)
    setmobileNoHelpertext("")
    if (e.target.value === '' || re.test(e.target.value)) {
      setMobileNoText(e.target.value)
    }


  };

  const onMenuBtnClick = () => {
    if (drawerOpen === true) {
      setdrawerOpen(false)
    }
    else {
      setdrawerOpen(true)
    }
  }


  const configureCaptcha = () => {
    setcaptchaChecker(true);
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          onSignInSubmit();
          console.log("Recaptca varified");
        },
        defaultCountry: "IN",
      }
    );
  };
  const handleOtpVerify = (phoneNumber) => {

    history.push("/OtpVerifiy", { mobNo: phoneNumber })


  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      onSignInSubmit();
    }
  };
  const onRegister = () => {
    history.push("/Register")
  }


  console.log(cookies.get('thalaivar'))


  const onTimeChange = () => {

    // axios.get("http://192.168.1.29:3000/api/netSmart_details").then((response) => {
    //  console.log(response);
    //   setapi(response.data.name )

    // });
    const mobileNumberApi = { "mobNo": "+918754887762" }
    axios.post("http://192.168.1.29:3000/api/netSmart_number_check", mobileNumberApi).then((response) => {
      setapi(response.data.message)
    }, []);
    console.log("hello " + api);


    // const date = new Date();
    // const stime = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    // const etime = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + ' ' + (date.getHours() + 1) + ':' + date.getMinutes() + ':' + date.getSeconds();
    // const token = { mobileNo, stime, etime };
    // const days = ["sunday", "monday", "tuesday"]
    // console.log(days[1]);
    // delete days[1];
    // console.log(days);
    // console.log("hello")
    // console.log(mobileNo)

    // console.log("Start Time " + stime);
    // console.log("End   Time " + etime);

  }
  const onSignInSubmit = (e) => {
    setbuttonDisabled(true)
    setlogIn("Logging In")
    e.preventDefault();
    if (mobileNoText == "") {
      setmobileNoError(true)
      setmobileNoHelpertext("Please Enter Mobile Number")
      setbuttonDisabled(false)
      return
    }
    if (mobileNoText.length < 10) {
      setmobileNoError(true)
      setmobileNoHelpertext("Please Enter Valid Mobile Number")
      setopenSnackbar(false)
      setbuttonDisabled(false)
    }
    else {


      const mobileNumberApi = { "mobNo": "+91" + mobileNoText }
      axios.post("http://192.168.1.29:3000/api/netSmart_number_check", mobileNumberApi).then((response) => {
        setapi(response.data.message)
        console.log(response.data.message)
        if (response.data.message === "No_User") {
          setalert(true);
          setbuttonDisabled(false)
          setlogIn("Log In")
          setopenSnackbar(true)

        }
        else {
          if (captchaChecker == false) {
            configureCaptcha();
          }
          if (buttonDisabled == false) {
            setbuttonDisabled(true)
            setlogIn("Logging In")
          }
          const phoneNumber = "+91" + mobileNo;
          const appVerifier = window.recaptchaVerifier;
          firebase
            .auth()
            .signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
              window.confirmationResult = confirmationResult;
              console.log("OTP has been sent");
              handleOtpVerify(phoneNumber);
            })
            .catch((error) => {
              console.log(error)
              console.log("SMS not sent");
            });
        }

      }, []);
    }
  }
  const onLandingPageClick = () => {
    history.push("/")
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickway') {
      return;
    }
    setopenSnackbar(false)

  }

  return (
    <> <div  >

         <AppBar position="static" className={classes.appBarStyle} >
        <Toolbar>
          <Box display='flex' flexGrow={1} >
            <div  >
              <img alt="FirstImage" style={{ cursor: 'pointer' }} className={classes.appBarImage} src={GilgalLogo} onClick={onLandingPageClick}></img>
            </div>
          </Box>
          {/* whatever is on the right side */}
          <div className={classes.appBarMenuButton}>
            <IconButton onClick={onMenuBtnClick}>
              <MenuIcon />
            </IconButton>
          </div>
          <div className={classes.appBarAllButtons}>
            <Button style={{ marginLeft: "60px", color: "#1EA5FC" }} >Home</Button>
            <Button style={{ marginLeft: "60px" }} color="#000000" >Contact</Button>
            <Button style={{ marginLeft: "60px" }} color="#000000">About</Button>
            <Button style={{ marginLeft: "60px" }} color="#000000">Careers</Button>
            <Button style={{ marginRight: "100px", marginLeft: "60px", background: "#1EA5FC", color: "#FFFFFF" }} onClick={onRegister} variant="contained" >Register</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>



      <div id="sign-in-button"></div>
      <Card className={classes.cardsty} >

        <form >
          <Typography component="div" variant="body1">
            <Grid item xs={12} >
              <Box bgcolor="info.main" color="background.paper" p={3} >
                <Typography style={{ fontSize: 40, textAlign: 'center' }} >Login</Typography>
              </Box>
            </Grid>
            <CardContent>
              <TextField label="Enter Mobile Number" name="mobile" inputProps={{ maxLength: 10 }} InputProps={{ startAdornment: <InputAdornment position="start">+91</InputAdornment> }} value={mobileNoText}
                error={mobileNoError} helperText={mobileNoHelpertext}
                type="text" onChange={handleChange} className={classes.textfield} />
            </CardContent>
          </Typography>
          <Button className={classes.btnlogin} variant="contained" disabled={buttonDisabled} onKeyPress={handleKeypress} onClick={onSignInSubmit}>{logIn}</Button>
          <div className={classes.doHaveAcc}>
            <Typography className={classes.typo}>Don't hava an Account?<button className={classes.button} onClick={onRegister}>Register</button></Typography></div>
        </form>

      </Card>
      <div>
        <Snackbar open={openSnackbar} TransitionComponent={Slide} autoHideDuration={3000} onClose={handleClose}>
          {alert1 ? <Alert onclose={handleClose} variant="filled" severity="warning">No User is Registered. Please Register with us continue</Alert> : <></>}
        </Snackbar>

      </div>


      <div style={{ marginRight: "6%", marginTop: "7%", marginLeft: "6%" }}>
        <hr />
        <Grid lg={12} container spacing={1}>
          <Grid item lg={6} sm={6} xs={12} >
            <Typography noWrap={false} variant="h6" style={{ marginBottom: "5px" }} color="#000000">
              Disclaimer |  Privacy Policy |  Terms of Services
            </Typography>
          </Grid>
          <Grid item lg={6} sm={6} xs={12} >
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Typography noWrap={false} variant="h6" style={{ marginBottom: "5px" }} color="#000000">
                © 2021, GILGAL. All rights reserved.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
      <Drawer
        variant="temporary"
        onEscapeKeyDown={onMenuBtnClick}
        onBackdropClick={onMenuBtnClick}
        className={classes.drawer}
        anchor="right"
        open={drawerOpen}
        width="100%"                >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
          <IconButton onClick={onMenuBtnClick}>
            {<ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Home', 'Contact', 'About', 'Login'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{menuIcons[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}
export default withRouter(Login);