import React, { useContext, useEffect, useState } from 'react'
import { makeStyles, Button } from '@material-ui/core';
import { multiStepContext } from './StepperContext';
import firebase from './firebase'
import './App.css'
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { useHistory, withRouter, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: "70%",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    btnlogin: {
        backgroundColor: "rgb(69,150,243)",
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
        marginLeft: '115px',
        marginTop: '90px',
        borderRadius: '5px',
        "&:hover": {
            //you want this to be the same as the backgroundColor above
            backgroundColor: "rgb(69,150,243)"
        },
    }

}));
function Stepper3() {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const [otpText, setotpText] = useState("")
    const [Otp, setOtp] = useState("");
    const [phoneNumber, setphoneNumber] = useState("")
    const [captchaChecker, setcaptchaChecker] = useState(false);
    useEffect(() => {
        setphoneNumber(location.state.mobileNoText)
    }, [location]);
    // console.log(phoneNumber);



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
        if (otpText === "") {

            alert("Please Enter a Correct OTP")
            return
        }
        subjectPage();
        e.preventDefault()
        const code = Otp
        console.log(code)

        window.confirmationResult.confirm(code).then((result) => {
            // User signed in successfully.
            const user = result.user;
            console.log(JSON.stringify(user))

            subjectPage();
        }).catch((error) => {
            alert("Please Enter Valid OTP")
        });
    }
    const { setCurrentStep, UserData, setUserData, sumbitData } = useContext(multiStepContext);
    console.log("Userdata: " + UserData["email"] )


    const [values, setValues] = useState({});
    const { FinalData } = useContext(multiStepContext)
     console.log(FinalData)
    const [board, setBoard] = useState('');

   

const onDataSumbit=()=>
{
    let a={
        "mobModelNumber": "",
        "email_id": UserData["email"],
        "tn_medium": UserData["medium"],
        "mobID": "",
        "className": UserData["std"],
        "mob_no": UserData["mobileNo"],
        "mobSdkNumber": "",
        "mobBoardName": "",
        "mobManufacturerName": "",
        "mobVersionCode": "",
        "mobRAM": "",
        "name": UserData["name"],
        "location": "Nil",
        "board": UserData["board"],
        "mobBrandName": "",
    }
    console.log(a)
   
}








    return (
        <>
       
        <div style={{ textAlign: 'center', justifyContent: 'center' }}>
         
                <div id="sign-in-button"></div>

        <form >
            <Typography component="div" variant="body1">


                <Typography style={{ fontSize: 22, textAlign: 'center' }}>We have sent Verification Code to your </Typography>
                <Typography style={{ fontSize: 26, textAlign: 'center' }}>
                    {phoneNumber}
                </Typography>
                <TextField label="Enter OTP" name="otp" type="text" onChange={handleChange} value={otpText} inputProps={{ maxLength: 6 }} className={classes.textfield} />
            </Typography>
            
            <Button onClick={onSubmitOTP} className={classes.btnlogin} >Verify</Button>

        </form>
        <Button className={classes.btnlogin} variant="contained" onClick={() => setCurrentStep(2)} >Back</Button><span />
        {/* <Button className={classes.btnlogin} variant="contained" onClick={onSignInSubmit}  >Finish</Button> */}
        <Button className={classes.btnlogin} variant="contained" onClick={onDataSumbit}>Finish</Button>

        </div>

        </>

      
    )
}
export default withRouter(Stepper3)