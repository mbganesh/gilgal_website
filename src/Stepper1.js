import React, { useContext, useState } from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles, Button, Grid, Box } from '@material-ui/core';
import { multiStepContext } from './StepperContext';
import Card from '@material-ui/core/Card';
import LockIcon from '@material-ui/icons/Lock';
const useStyles = makeStyles((theme) => ({
    formControl: {
        [theme.breakpoints.up('md')]: {
            marginBottom: theme.spacing(5),
            marginLeft:theme.spacing(1),
            minWidth: "70%",
            fontSize: '250px',
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: theme.spacing(4),
            marginTop:theme.spacing(1),
            minWidth: "180%",
        }
    },

    btnlogin: {
       [theme.breakpoints.up('md')]:{
        marginTop:theme.spacing(8),
        marginLeft: theme.spacing(32),
        width: '20%',
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
    
        borderRadius: '5px',
        "&:hover": {
            //you want this to be the same as the backgroundColor above
            backgroundColor: "rgb(69,150,243)"
        },
      },  [theme.breakpoints.down('sm')]:{
            marginTop:theme.spacing(3),
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
            width: '10%',


        }
    },

    cardSty: {
        [theme.breakpoints.up('md')]: {
            maxWidth: 500, minHeight: 400,
            marginTop: theme.spacing(3),
            flexDirection: 'column',
        }

    },
    formControlSty: {
                marginLeft: theme.spacing(5),
                marginTop: theme.spacing(4),
    },
    lockIconSty: {
        justifyContent: "end",

        color: 'rgb(69,150,243)',
    }

}));
function Stepper1() {
    const classes = useStyles();
    const { setCurrentStep, UserData, setUserData } = useContext(multiStepContext);
    const [board, setBoard] = useState('');
    const [medium, setMedium] = useState('');
    const [std, setStd] = useState('');
    const handleChangeBoard = (event) => {

        setBoard(event.target.value);
        setUserData({ ...UserData, "board": event.target.value })

    };
    const handleChangeMedium = (event) => {

        setMedium(event.target.value);
        setUserData({ ...UserData, "medium": event.target.value })

    };
    const handleChangeStd = (event) => {

        setStd(event.target.value);
        setUserData({ ...UserData, "std": event.target.value })

    };
    return (
        <div>

            <div className={classes.formControlSty}>
                <FormControl variant= "outlined" className={classes.formControl} size={medium}  >
                    <InputLabel id="demo-simple-select-label">Choose Your Board</InputLabel>
                    <Select
                    label="Choose your Board"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={board, UserData['board']}
                        onChange={handleChangeBoard} >
                        <MenuItem value="sb">TamilNadu State Board</MenuItem>
                        <MenuItem disabled value="cbse">Central Board of Secondary Education  <LockIcon className={classes.lockIconSty} /> </MenuItem>
                        <MenuItem disabled value="Indian Certificate of Secondary Education">Indian Certificate of Secondary Education  <LockIcon className={classes.lockIconSty}/></MenuItem>
                    </Select>
                </FormControl>

                <FormControl variant= "outlined" className={classes.formControl}>
                     <InputLabel id="demo-simple-select-label">Choose Your Medium</InputLabel> 
                    <Select
                     label="Choose your Medium"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={medium, UserData['medium']}
                        onChange={handleChangeMedium} >
                        <MenuItem value="tamil_medium">தமிழ் வழியில் கல்வி </MenuItem>
                        <MenuItem value="english_medium">English Medium</MenuItem> 
                    </Select>
                </FormControl>
                <FormControl variant= "outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Choose Your Class</InputLabel>
                    <Select
                    label="Choose your Class"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={std, UserData['std']}
                        onChange={handleChangeStd}
                         >
                        <MenuItem value="class12th" style={{}}>12th</MenuItem>
                        <MenuItem value="class11th" >11th</MenuItem>
                        <MenuItem value="class10th" >10th</MenuItem>
                        <MenuItem  value="class9th">9th      
                        </MenuItem>
                        <MenuItem  value="class8th">8th</MenuItem>
                        <MenuItem disabled value="class7th">7th  <LockIcon className={classes.lockIconSty} /></MenuItem>
                        <MenuItem disabled value="class6th" >6th <LockIcon className={classes.lockIconSty} /></MenuItem>
                        <MenuItem disabled value="class5th" >5th <LockIcon className={classes.lockIconSty} /></MenuItem>
                    </Select>
                    <Button className={classes.btnlogin} variant="contained" onClick={() => setCurrentStep(2)} >Next</Button>
                </FormControl>

                
            </div>

        </div>
    )
}
export default Stepper1