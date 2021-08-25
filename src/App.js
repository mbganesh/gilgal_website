import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Login'
import OtpVerifiy from './OtpVerifiy';
import StepperContext from './StepperContext';
import UnitPage from './UnitPage'
import PlayerPage from './Player'
import subject from './Subject'
import Register from './Register';
import Welcome from './Welcome';
import UnitList from './UnitList';
import TopicQuizStart from './TopicQuizStart'
import Contactus from './Contactus'
import { render } from 'react-dom'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

function App() {
  const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    width: '300',
  
    timeout: 3000,
    offset: '40px',
    // you can also just use 'scale'
    transition: transitions.SCALE
  }
  
  
  return (
    <>
      <BrowserRouter>
        <Switch>
       
          <Route exact path="/"><Welcome/></Route>
          <Route exact path="/Welcome"><Welcome /></Route>
          <Route exact path="/Login"><Login /></Route>
          <Route exact path="/OtpVerifiy"><OtpVerifiy /></Route>
          <Route path="/subject" exact component={subject} />
          <Route path="/UnitList" exact component={UnitList}/>
          <Route path="/unitpage" component={UnitPage} />
          <Route path="/playerpage" component={PlayerPage} />
          <Route path="/TopicQuizStart" component={TopicQuizStart} />
          <Route path="/Contactus" component={Contactus} />
  
        
          <Route exact Path="/Register">{(props) => <StepperContext> <Register {...props} /> </StepperContext>}</Route>


         



        </Switch>

      </BrowserRouter>
    </>
  );


}

export default App;