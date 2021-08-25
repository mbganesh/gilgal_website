import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { colors, makeStyles, TextField } from '@material-ui/core'
import GilgalLogo from './images/imgWelcomeScreen/gilgal_logo.png';
import { useHistory, withRouter } from 'react-router-dom';
import { Loader } from "@googlemaps/js-api-loader";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Contact from './images/imgContactScreen/contact.svg';
import Location from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import flag from './images/imgContactScreen/indianflag .png';
import FacebookIcon from '@material-ui/icons/Facebook';
import Card from '@material-ui/core/Card';
import Avatar from "@material-ui/core/Avatar";
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import EmailOutlineIcon from '@material-ui/icons/EmailOutlined';
import PersonOutlineIcon from '@material-ui/icons/PersonOutlineOutlined';
import ChatOutlineIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import { useAlert } from 'react-alert'
import Alert from '@material-ui/lab/Alert';
import {  Box, Typography, Toolbar, Button, Grid, Paper, AppBar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Collapse from '@material-ui/core/Collapse';


function Contactus() {

    const [alertOpen, setalertOpen] = useState(false)
    const [drawerOpen, setdrawerOpen] = useState(false)


    const history = useHistory();
    const sendMessageClick = () => {
        setalertOpen(true)
        console.log("hello")
    }
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

        appBarMenuButton: {
            [theme.breakpoints.up('md')]: {
                visibility: "hidden"
            },
            [theme.breakpoints.down('sm')]: {
                visibility: "visible",
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
                marginLeft: "210px",


            },
        },


        feedbackHeading: {
            marginLeft: "225px",
            marginTop: '50px',
            fontSize: '30px',

        },
        contactHeading: {
            marginLeft: "340px",
            marginTop: '25px',
            fontWeight: '900',
            fontSize: '24px',
        },
        headofcHeading: {

            marginTop: '25px',
            fontWeight: '900',
            fontSize: '16px',
            align: 'middle',
            display: 'inline-block',
            verticalAlign: 'top',
            marginLeft: '10px'
        },
        address: {
            marginLeft: "140px",


        },
        addressDetails: {
            fontSize: '16px',
            fontFamily: 'Nunito',
            marginLeft: '5px',

        },
        br: {
            lineHeight: '1.5',


        },
        telephone: {
            marginLeft: '140px',
            marginTop: theme.spacing(1),
        },
        telephoneNo:
        {
            color: '#0d6efd',
            cursor: 'pointer',
            marginLeft: '5px',
            fontSize: '16px',
            fontFamily: 'Nunito'
        },
        card: {
            height: '83%',
            width: '78%',
            marginLeft: "85px",

        },
        getintouch: {
            marginTop: theme.spacing(5),
            marginLeft: theme.spacing(2),
            fontSize: '24px',
            fontWeight: '900'
        },
        textfield: {
            marginTop: theme.spacing(1),
            marginLeft: theme.spacing(2),
            width: '95%'
        },
        feedbackDetails:
        {
            marginTop: theme.spacing(2),
            fontFamily: 'Nunito',
            marginLeft: theme.spacing(2),
            fontSize: '16px', fontWeight: '900'
        },
        astrike: {
            color: 'red'
        },
        buttonSendMessage: {
            backgroundColor: '#2f55d4',
            color: 'white',
            marginTop: theme.spacing(5),
            marginLeft: theme.spacing(2),
            width: '95%',
            '&:hover': {
                background: 'none',
                backgroundColor: '#2f55d4'
            },
            
        },
        icons: {
            marginLeft: theme.spacing(43),
            marginTop: theme.spacing(3),

        },
        avatar: {
            backgroundColor: theme.palette.grey[50],
            border: `1px solid ${theme.palette.info.main}`,
            color: theme.palette.info.main
        }
    }));
    const classes = useStyles();
    const onLandingPageClick = () => {
        history.push("/")
    }
    const onHomeClick = () => {
        history.push("/")
    }
    const onLoginClick = () => {
        history.push("/Login")
    }
    const onMenuBtnClick = () => {
        if (drawerOpen === true) {
            setdrawerOpen(false)
        }
        else {
            setdrawerOpen(true)
        }
    }

    // or const {Loader} = require('google-maps'); without typescript

    const google = window.google
    let map;
    const center = { lat: 8.719911, lng: 77.740626 };
    const zoom = 14;
    const url = "https://goo.gl/maps/1LuDwb59YqRPG6gRA";
    const loader = new Loader({
        apiKey: "AIzaSyBcf43PxNyq77yXGBsTr5rGfhu7TdZPNLA",
        version: "weekly",
    });
    document.addEventListener("DOMContentLoaded", () => {
        const wrapper = document.getElementById("wrapper");
        wrapper.style.backgroundImage = `url(${url}?center=${center.lat},${center.lng}&zoom=${zoom}&scale=2&size=${wrapper.clientWidth}x${wrapper.clientHeight}&key=YOUR_API_KEY)`;
        wrapper.addEventListener("click", () => {
            wrapper.remove();
            loader.load().then(() => {
                map = new google.maps.Map(document.getElementById("map"), {
                    center,
                    zoom,
                });
            });
        });
    });


    const mapStyles = {
        width: '100%',
        height: '100%'
    };
    const [nameError, setnameError] = useState(false)
    const [nameTextField, setnameTextField] = useState("");
    const [nameHelperText, setnameHelperText] = useState("")




    return (
        <>
            <div style={{ overflow: 'hidden', minHeight: '100vh', maxWidth: '100vw', backgroundImage: "linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)", backgroundRepeat: 'no-repeat' }}>
                <div  >
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
                                <Button style={{ marginLeft: "60px", }} onClick={onHomeClick} >Home</Button>
                                <Button style={{ marginLeft: "60px", color: "#1EA5FC" }} color="#000000">Contact</Button>
                                <Button style={{ marginLeft: "60px" }} color="#000000">About</Button>
                                <Button style={{ marginLeft: "60px" }} color="#000000">Careers</Button>
                                <Button style={{ marginRight: "100px", marginLeft: "60px", background: "#1EA5FC", color: "#ffffff" }} variant="contained" onClick={onLoginClick}>Login</Button>
                            </div>

                        </Toolbar>
                    </AppBar>

                </div>



                <div style={{ flexGrow: 1 }} >
                    <Grid container spacing={3}>
                        <Grid item lg={6} sm={6} xs={12} >
                            <h4 className={classes.contactHeading}> Contact Details</h4>

                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={3}>
                                    <Grid item x5={6} style={{ width: '50%' }}>
                                        <div style={{ display: 'inline', float: 'left', }} >
                                            <img alt="flag" style={{ marginLeft: '140px', width: '9%', height: '5%', marginTop: '17px' }} src={flag}></img>
                                            <h4 className={classes.headofcHeading}> Head Office</h4>


                                        </div>
                                    </Grid>
                                    <Grid item x5={6} style={{ width: '50%' }}>
                                        <div style={{ display: 'inline', float: 'left', }} >
                                            <img alt="flag" style={{ marginLeft: '20px', width: '9%', height: '5%', marginTop: '17px' }} src={flag}></img>
                                            <h4 className={classes.headofcHeading}> Branch Office</h4>
                                        </div>
                                    </Grid>

                                </Grid>
                            </div>

                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={3}>
                                    <Grid item x5={6}>
                                        <div className={classes.address}>
                                            <Location style={{ fontSize: '17px', verticalAlign: 'sub', display: 'inline-flex' }} /><h7 className={classes.addressDetails}>
                                                No.1/1,Nathan Street,<br className={classes.br} />
                                                Adikalapuram, Murgankurichi,<br className={classes.br} />
                                                Palayamkottai,<br className={classes.br} />
                                                Tirunelveli- 627 002.
                                            </h7>
                                        </div>
                                        <div className={classes.telephone}>
                                            <PhoneIcon style={{ fontSize: '17px', verticalAlign: 'sub', display: 'inline-flex' }} />
                                            <h7 className={classes.telephoneNo}>0462-2585979 </h7>
                                        </div>
                                        <div className={classes.telephone}>
                                            <EmailIcon style={{ fontSize: '17px', verticalAlign: 'sub', display: 'inline-flex' }} />
                                            <h7 className={classes.telephoneNo}>contact@ncpli.com </h7>
                                        </div>
                                    </Grid>

                                    <Grid item x5={6}>
                                        <div className={classes.address}>
                                            <Location style={{ fontSize: '17px', verticalAlign: 'sub', display: 'inline-flex' }} /><h7 className={classes.addressDetails}>
                                                No.1/1,Nathan Street,<br className={classes.br} />
                                                Kush Kumar Road, <br className={classes.br} />
                                                Nungambakkam,<br className={classes.br} />
                                                Chennai- 600 034.
                                            </h7>
                                        </div>
                                        <div className={classes.telephone}>
                                            <PhoneIcon style={{ fontSize: '17px', verticalAlign: 'sub', display: 'inline-flex' }} />
                                            <h7 className={classes.telephoneNo}>044-42125369 </h7>
                                        </div>
                                        <div className={classes.telephone}>
                                            <EmailIcon style={{ fontSize: '17px', verticalAlign: 'sub', display: 'inline-flex' }} />
                                            <h7 className={classes.telephoneNo}>contact@ncpli.com </h7>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className={classes.icons} style={{ flexGrow: 1 }}>
                                <Grid container spacing={0}>
                                    <Grid item xs={3} style={{ maxWidth: '60px' }}>
                                        <Avatar className={classes.avatar}> <FacebookIcon style={{ cursor: 'pointer', fontSize: '20px', }} /></Avatar>
                                    </Grid>
                                    <Grid item xs={3} style={{ maxWidth: '60px' }}>
                                        <Avatar className={classes.avatar}>   <YouTubeIcon style={{ cursor: 'pointer', fontSize: "20px" }} /></Avatar>
                                    </Grid>
                                    <Grid item xs={3}>   <Avatar className={classes.avatar}>   <InstagramIcon style={{ cursor: 'pointer', fontSize: '20px', textAlign: "center" }} /></Avatar>
                                    </Grid>
                                </Grid>
                            </div>
                            <img alt="Contact" style={{ display: "block", justifyContent: "center", alignItems: "center", marginLeft: '100px', marginTop: '20px', width: '50%', height: '45%', }} src={Contact}></img>
                        </Grid>

                        <Grid item lg={6} sm={6} xs={12}>
                            <h1 className={classes.feedbackHeading}> For any feedback, message here</h1>
                            <Card className={classes.card}>
                                <Typography className={classes.getintouch}>Get in Touch !</Typography>
                                <div>
                                    <Typography className={classes.feedbackDetails}>Your Name <h7 className={classes.astrike}>*</h7></Typography>
                                    <TextField className={classes.textfield}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <PersonOutlineIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="outlined" />
                                </div>
                                <div>
                                    <Typography className={classes.feedbackDetails}>Your Email <h7 className={classes.astrike}>*</h7></Typography>
                                    <TextField className={classes.textfield}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <EmailOutlineIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="outlined" />
                                </div>
                                <div>
                                    <Typography className={classes.feedbackDetails}>Subject </Typography>
                                    <TextField className={classes.textfield}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <ChatOutlineIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="outlined" />
                                </div>
                                <div>
                                    <Typography className={classes.feedbackDetails}>Comments <h7 className={classes.astrike}>*</h7></Typography>
                                    <TextField className={classes.textfield}
                                        multiline={true}
                                        rows={2}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="end">
                                                    <ChatOutlineIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="outlined" />
                                </div>
                                <Button className={classes.buttonSendMessage} onClick={sendMessageClick}>Send Message</Button>
                            </Card>
                        </Grid>
                    </Grid>
                </div>

                <Collapse in={alertOpen}>
                    <Alert
                    variant="filled"
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setalertOpen(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                    >
                        Thanks for your Feedback
                    </Alert>
                </Collapse>
            </div >



        </>

    )
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyBcf43PxNyq77yXGBsTr5rGfhu7TdZPNLA'
})(Contactus);