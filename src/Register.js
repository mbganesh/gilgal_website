import { React, useState, useContext } from 'react'
import { makeStyles, Stepper, Step, StepLabel, StepConnector } from '@material-ui/core'
import './App.css'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useHistory, withRouter } from 'react-router-dom';
import { Divider, Drawer, Toolbar, Paper, AppBar } from '@material-ui/core';
import GilgalLogo from './images/imgLogo/gilgal_logo.png';
import signImg from './images/imgSignupScreen/signImg.svg'
import Stepper1 from './Stepper1';
import Stepper2 from './Stepper2';
import Stepper3 from './Stepper3';
import { multiStepContext } from './StepperContext';
import Cookies from 'universal-cookie';
import date from 'date-and-time';
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
    appBarAllButtons: {
        [theme.breakpoints.up('md')]: {
            visibility: "visible"
        },
        [theme.breakpoints.down('sm')]: {
            display: "none"
        },
    },

    







cardsty: {
    [theme.breakpoints.up('md')]: {
        maxWidth: 450, minHeight: 400,
            marginTop: theme.spacing(12),
                flexDirection: 'column',
                    borderStyle: 'solid',
                        borderWidth: '2px',
                            borderColor: 'rgb(69,150,243)',
                                margin: 'auto',
        },
    [theme.breakpoints.down('sm')]: {
        maxWidth: 450, minHeight: 400,
            marginTop: theme.spacing(15),
                flexDirection: 'column',
                    borderStyle: 'solid',
                        borderWidth: '2px',
                            borderColor: 'rgb(69,150,243)',
                                margin: 'auto',
        },
},
signIamge: {
    [theme.breakpoints.up('md')]:
    {
        visibility: 'visible',

        },
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
},
mobileButton: {
    [theme.breakpoints.up('md')]: {
        display: 'none'
    },
    [theme.breakpoints.up('sm')]: {
        visibility: 'visible'
    }
},
mobileButtonSty: {
    backgroundColor: '#1EA5FC',
        color: 'white',
            '&:hover': { backgroundColor: '#1EA5FC' }
},
stepperSty: {
    [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(10),
            marginLeft: theme.spacing(14),
        },
    [theme.breakpoints.up('md')]: {
        marginLeft: theme.spacing(2)
    }
},

startFree: {
    fontSize: '17px',
        marginLeft: theme.spacing(6),
            marginTop: theme.spacing(10),
    },
signupSty: {
    fontSize: '25px',
        fontWeight: 'bold',
            marginLeft: theme.spacing(6)
}
}));

function SignupPage1() {
    const cookies = new Cookies();

    cookies.set('thalaivar', 'Steven', { path: '/' });
    // console.log(cookies.get('thalaivar'));

    const classes = useStyles();
    const history = useHistory();
    const [board, setBoard] = useState('');
    const { CurrentStep } = useContext(multiStepContext)
    function showStep(Step) {
        switch (Step) {
            case 1:
                return <Stepper1 />
            case 2:
                return <Stepper2 />
            case 3:
                return <Stepper3 />

        }
    }
    const onLogin = () => {
        history.push("/Login")
    }
    const onLandingPageClick = () => {
        history.push("/");
    }
    return (
        // @AppBar 
        <>
            <div  >
                <AppBar position="static" className={classes.appBarStyle} >
                    <Toolbar>
                        <Box display='flex' flexGrow={1} >
                            <div  >
                                <img alt="FirstImage" style={{ cursor: 'pointer' }} className={classes.appBarImage} src={GilgalLogo} onClick={onLandingPageClick}></img>
                            </div>
                        </Box>
                        {/* whatever is on the right side */}
                        <div className={classes.mobileButton}>
                            <Button onClick={onLogin} className={classes.mobileButtonSty}>Login</Button>
                        </div>

                        <div className={classes.appBarAllButtons}>
                            <Button style={{ marginRight: "100px", marginLeft: "60px", background: "#1EA5FC", color: "#FFFFFF" }} onClick={onLogin} variant="contained" >Login</Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>

            <Grid items xs={12} container spacing={1} >
                <Grid items xs={6} className={classes.signIamge} >
                    <img src={signImg} style={{ width: '100%' }}></img>
                </Grid>
                <Grid items xs={6}>
                    <div >
                        <Typography className={classes.startFree}>Start for free</Typography>
                    </div>
                    <div >
                        <Typography className={classes.signupSty}>Signup to GILGAL</Typography>
                    </div>
                    <div className={classes.stepperSty}>
                        <Stepper style={{ width: '25%' }} activeStep={CurrentStep - 1} orientation="horizontal">

                            <Step >

                                <StepLabel classes={{ label: classes.customLabelStyle }}>

                                </StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>

                                </StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>

                                </StepLabel>
                            </Step>
                        </Stepper>
                    </div>
                    {showStep(CurrentStep)}
                </Grid>


            </Grid>

        </>
    )
}
export default withRouter(SignupPage1)