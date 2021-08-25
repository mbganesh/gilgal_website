import React, { useContext, useState } from 'react'
import { Step, Stepper, StepLabel, makeStyles, ButtonGroup, Button } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import Stepper4 from './Stepper4'
import Stepper5 from './Stepper5'
import Stepper6 from './Stepper6'
import { multiStepContext } from './StepperContext';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { classes } from 'istanbul-lib-coverage'

const useStyles = makeStyles((theme) => ({
  
}));


function Contact() {
    const classes = useStyles();
   
    function showStep(Step)
    {
        switch(Step)
        {
            case 1:return <Stepper4/>
            case 2:return <Stepper5/>
            case 3:return<Stepper6/>

        }
    }
    return (
        <div className={classes.buttonGroup}>
            <Typography>Get in Touch</Typography>
            <ButtonGroup aria-label="outlined primary button group" className={classes.buttonGroup}>
                <Button onClick={showStep(1)}  >
                    <LocationOnIcon>
                        Location</LocationOnIcon>{"\n"} 
                    <Typography>Location</Typography></Button>
                <Button onclick={showStep(2)}>Contact</Button>
                <Button onClick={showStep(3)}>Email</Button>
            </ButtonGroup>
        </div>
    )
}
export default (Contact)