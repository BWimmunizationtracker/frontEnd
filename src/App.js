import React, { useReducer } from 'react';

import { UserReducer, initialState } from './reducers/index.js'
import { UserContext } from './contexts/UserContext.js'
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom'
import PrivateRoute from './components/privateRoute'
import SignUp from './components/SignUpForm'
import PatientOnboarding from './components/PatientOnboarding'
import PatientDashboard from './components/PatientDashboard'
import { DoctorDashboard } from './components/DoctorDashboard'
import { DoctorOnboarding } from './components/DoctorOnboarding'
import DoctorSignUp from './components/DoctorSignUp'
import DoctorLogin from './components/DoctorLogin'
import Login from './components/LoginForm'

import './App.css';



function App() {

  const [state, dispatch] = useReducer(UserReducer, initialState)

  return (
    <Router>
      <UserContext.Provider value={''}>
        <div className="App">
          <ul>
            <li>
              <Link to='/'>Log In</Link>
            </li>
            <li>
            <Link to='/SignUp'>SingUp</Link>
            </li>
            <li>
            <Link to ='/DoctorSignUp'>Doctor Sign Up</Link>
            </li>
            <Link to = '/DoctorLogin' >Doctor Login</Link>
          </ul>
          <Route exact path='/' component={Login} />
          <Route exact path='/SignUp' component={SignUp} />
          <Route exact path='/DoctorSignUp' component={DoctorSignUp} />
          <Route exact path='/DoctorLogin' component={DoctorLogin} />
          <Route exact path='/PatientOnboarding' component={PatientOnboarding} />
          <Route exact path='/PatientDashboard' component={PatientDashboard} />
          <Route exact path='/DoctorDashboard' component={DoctorDashboard} />
          <Route exact path='/DoctorOnboarding' component={DoctorOnboarding} />
          {/* <PrivateRoute exact path='/PatientOnboarding' component={PatientOnboarding} />
          <PrivateRoute exact path='/PatientDashboard' component={PatientDashboard} />
          <PrivateRoute exact path='/DoctorDashboard' component={DoctorDashboard} />
          <PrivateRoute exact path='/DoctorOnboarding' component={DoctorOnboarding} /> */}
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
