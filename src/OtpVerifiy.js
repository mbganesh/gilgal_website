import { React, useEffect, useState } from 'react'
import firebase from './firebase'
import { makeStyles } from '@material-ui/core'
import './App.css'
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import {Toolbar, AppBar } from '@material-ui/core';
import GilgalLogo from './images/imgLogo/gilgal_logo.png';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { ContactSupportOutlined } from '@material-ui/icons';
import { useHistory, withRouter, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    appBarStyle: {
        [theme.breakpoints.up('md')]: {
            background: 'transparent', boxShadow: 'none', display: "flex", marginTop: 24, marginBottom: 24
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: 0, marginBottom: 0, backgroundColor: "#F4F9F9"
        },
    },
    appBarImage: {
        [theme.breakpoints.up('md')]: {
            height: "3rem", marginLeft: "100px"
        },
        [theme.breakpoints.down('sm')]: {
            height: "2.5rem", marginLeft: "10px"
        },
    },
    cardsty: {
        maxWidth: 450, minHeight: 500,
        marginTop: theme.spacing(16),
        flexDirection: 'column',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderColor: 'rgb(69,150,243)',
        margin: 'auto',
    },
    btnlogin: {
        backgroundColor: "rgb(69,150,243)",
        border: 'none',

        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: "inlineBlock",
        fontSize: 16,
        border: 0,
        color: 'white',
        height: 50,
        padding: '0 80px',
        marginLeft: '115px',
        marginTop: '60px',
        borderRadius: '5px',



    },
    typo: {
        marginTop: theme.spacing(3.5),
        marginLeft: theme.spacing(14),
    },
    btnResend: {
        background: 'none',
        border: 'none',
        color: 'rgb(69,150,243)',
        marginLeft: 220,

    },
    textfield: {
        marginTop: theme.spacing(8),
        marginLeft: theme.spacing(4),
        width: '70%',
        fontSize: '70%'
    }
}));




function OtpVerifiy() {
    const history = useHistory();
    const classes = useStyles();
    const location = useLocation();
    const [otpText, setotpText] = useState("")
    const [Otp, setOtp] = useState("");
    const [phoneNumber, setphoneNumber] = useState("")


    useEffect(() => {
        setphoneNumber(location.state.mobNo)
    }, [location]);
    console.log(phoneNumber);



    const handleChange = (e) => {
        setOtp(e.target.value)
        const re = /^[0-9\b]+$/;


        if (e.target.value === '' || re.test(e.target.value)) {
          setotpText(e.target.value)
        }
        const { name, value } = e.target;
        setValues({ [name]: value, ...values });

    };

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
    }


    const onSignInSubmit = (e) => {
        e.preventDefault();

        if (captchaChecker == false) {
            configureCaptcha();
        }
        if (buttonDisabled == false) {
            setbuttonDisabled(true)
        }


        console.log(phoneNumber);
        const appVerifier = window.recaptchaVerifier;
        firebase
            .auth()
            .signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                console.log("OTP has been sent");

            })
            .catch((error) => {
                console.log(error)
                console.log("SMS not sent");
            });

    };
    function subjectPage() {
        history.push("/subject");
        
    }

    const onSubmitOTP = (e) => {
        if(otpText=="")
    {
      
      alert("Please Enter a Correct OTP")
      setbuttonDisabled(false)
      return
    }
        e.preventDefault()
        const code = Otp
        console.log(code)
        window.confirmationResult.confirm(code).then((result) => {
            // User signed in successfully.
            const user = result.user;
            console.log(JSON.stringify(user))

            subjectPage();
            // ...
        }).catch((error) => {
            alert("Please Enter Valid OTP")
        });
    }


    const [values, setValues] = useState({});
    const [mobileNo, setMobileNo] = useState("");
    const [captchaChecker, setcaptchaChecker] = useState(false);
    const [buttonDisabled, setbuttonDisabled] = useState(false)

    return (
        <>
           <div  >
                <AppBar position="static" className={classes.appBarStyle} >
                    <Toolbar>
                        <Box display='flex' flexGrow={1} >
                            <div  >
                                <img alt="FirstImage" className={classes.appBarImage} src={GilgalLogo}></img>
                            </div>
                        </Box>
                        {/* whatever is on the right side */}

                    </Toolbar>
                </AppBar>
            </div>
            <div id="sign-in-button"></div>
            <Card className={classes.cardsty} >
                <form >
                    <Typography component="div" variant="body1">
                        <Grid item xs={12} >
                            <Box bgcolor="info.main" color="background.paper" p={3} >
                                <Typography style={{ fontSize: 40, textAlign: 'center' }} >OTP Verification</Typography>
                            </Box>
                        </Grid>

                        <CardContent>
                            <Typography style={{ fontSize: 22, textAlign: 'center' }}>We have sent Verification Code to your </Typography>
                            <Typography style={{ fontSize: 26, textAlign: 'center' }}>
                                {phoneNumber}
                            </Typography>
                            <TextField label="Enter OTP" name="otp" type="text" onChange={handleChange} value={otpText} inputProps={{maxLength:6}} className={classes.textfield} />
                            <Button onClick={onSignInSubmit} className={classes.btnResend} disabled={buttonDisabled}  >Resend OtP</Button>
                        </CardContent>
                    </Typography>

                    <Button onClick={onSubmitOTP} className={classes.btnlogin} >Verify</Button>

                </form>
            </Card>
        </>
    )
}
export default withRouter(OtpVerifiy);