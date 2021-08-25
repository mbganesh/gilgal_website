import React, { useState } from 'react'

import Contact from './Contact'
import Login from './Login';
import Register from './Register';
import UnitList from './UnitList';
export const multiStepContext = React.createContext();
const StepperContext = () => {

    const [CurrentStep, setCurrentStep] = useState(1);
    const [UserData, setUserData] = useState([]);
    const [FinalData, setFinalData] = useState([]);
      function sumbitData()
    {
        setFinalData(FinalData=>[...FinalData,UserData]);
        setUserData('');
      
    }
    return (
        <div>
            <multiStepContext.Provider value={{ CurrentStep, setCurrentStep, UserData, setUserData, FinalData, setFinalData, sumbitData, }}>
                <Register/>
               
            </multiStepContext.Provider>
            {/* <multiStepContext.Provider value={{CurrentStep, setCurrentStep, UserData, setUserData, FinalData, setFinalData }}>
            <Contact/>
            </multiStepContext.Provider> */}
         
        </div>
    )
}
export default (StepperContext);