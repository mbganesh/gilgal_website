import React, { useState, useContext } from 'react'
import { makeStyles, Button, TextField } from '@material-ui/core';
import { multiStepContext } from './StepperContext';
import firebase from './firebase'
import { useHistory,withRouter } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: "70%",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    textfield: {
        marginLeft: theme.spacing(7),
        marginTop: theme.spacing(5),
        width: '50%'
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
        marginLeft: theme.spacing(8),
        marginTop: theme.spacing(5),
        borderRadius: '5px',
        "&:hover": {
            //you want this to be the same as the backgroundColor above
            backgroundColor: "rgb(69,150,243)"
        },
    }

}));
function Stepper2() {
    const classes = useStyles();
    const { setCurrentStep, UserData, setUserData, sumbitData} = useContext(multiStepContext);

    const [nameTextField, setnameTextField] = useState("");
    const [mobileNoText, setmobileNoText] = useState("");
    const [email, setemail] = useState("");

    const [nameError, setnameError] = useState(false)
    const [mobileNoError, setmobileNoError] = useState(false)
    const [emailError, setemailError] = useState(false)

    const [nameHelperText, setnameHelperText] = useState("")
    const [mobileNoHelperText, setmobileNoHelperText] = useState("")
    const [emailHelperText, setemailHelperText] = useState("")

    const [captchaChecker, setcaptchaChecker] = useState(false);
    const history = useHistory();

    const onNameBlur = () => {
        if (nameTextField === "") {
            setnameError(true)
            setnameHelperText("Please Enter your name")
        }
        else {
            setnameError(false)
            setnameHelperText("")
        }
    };

    const handleChangeUsername = (event) => {
        const textFie = /^[a-z,A-Z\b]+$/;
        setnameError(false)
        setnameHelperText("")
        if (event.target.value == '' || textFie.test(event.target.value)) {
            setnameTextField(event.target.value)
            setUserData({ ...UserData, "name": event.target.value })
        }
        // console.log(setnameTextField)
    };


    const configureCaptcha = () => {
        console.log("Entered config capcha")
        // setcaptchaChecker(true);
        // console.log("captchaChecker "+captchaChecker)

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
        history.push(setCurrentStep(3),{ mobileNoText: phoneNumber })
    }

    const onSignInSubmit = (e) => {
        
        if (mobileNoText == "") {
            console.log("Alert");
            alert("Please Enter Values")
            return
        }
        configureCaptcha();

       // e.preventDefault();
        // if (captchaChecker === false) {
        //     configureCaptcha();
        // }

        console.log("hai")
        const phoneNumber = "+91" + mobileNoText;
        console.log(phoneNumber);
      
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
                handleOtpVerify(phoneNumber);
            });
            sumbitData();
    };
    const onMobileNoBlur = () => {
        console.log("onMobileNumber " + mobileNoText)
        if (mobileNoText === "") {
            setmobileNoError(true)
            setmobileNoHelperText("Plsease enter your mobile number")
        }
        else {
            setmobileNoError(false)
            setmobileNoHelperText("")
        }
    };
    const handleChangeMobileno = (event) => {
        // console.log("handlChanMObNo")
        const re = /^[0-9\b]+$/;
        setmobileNoError(false)
        setmobileNoHelperText("")
        if (re.test(event.target.value)) {
            setmobileNoText(event.target.value)
            setUserData({ ...UserData, "mobileNo": event.target.value })

        }

    };


    const onEmailBlur = () => {
        const regEmailChecker = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
        if (email === "") {
            setemailError(true)
            setemailHelperText("Please Enter Your Email")
        }
        else {
            setemailError(false)
            setemailHelperText("")
        }

    }

    const handleChangeEmail = (event) => {
        setemail(event.target.value)
        setemailError(false)
        setemailHelperText("")
        setUserData({ ...UserData, "email": event.target.value })
    };


    return (
        <div>
            <div id="sign-in-button"></div>
            <div >
                <TextField
                    error={nameError}
                    label="Name"
                    value={nameTextField}
                    helperText={nameHelperText}
                    variant="outlined"
                    onBlur={onNameBlur}
                    onChange={handleChangeUsername}
                    inputProps={{ maxLength: 20 }}
                    type="text"
                    className={classes.textfield} />
            </div>
            <div >
                <TextField
                    prefix="+91"
                    error={mobileNoError}
                    label="MobileNo"
                    value={mobileNoText, UserData['mobileNo']}
                    helperText={mobileNoHelperText}
                    variant="outlined"
                    onBlur={onMobileNoBlur}
                    onChange={handleChangeMobileno}
                    inputProps={{ maxLength: 10 }}
                    type="text"
                    className={classes.textfield} />
            </div>
            <div >
                <TextField
                    error={emailError}
                    label="Email"
                    value={email, UserData['email']}
                    helperText={emailHelperText}
                    variant="outlined"
                    onBlur={onEmailBlur}
                    onChange={handleChangeEmail}
                    type="text"
                    className={classes.textfield} />
            </div>
            

            <Button className={classes.btnlogin} variant="contained" onClick={() => setCurrentStep(1)} >Back</Button><span />
            <Button className={classes.btnlogin} variant="contained" onClick={()=>setCurrentStep(3)} >Next</Button>
        </div>
    )
}
export default withRouter(Stepper2)