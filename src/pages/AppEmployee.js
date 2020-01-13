import React, { useContext } from 'react'
import DesktopNavbar from '../components/Navbar/DesktopNavbar'
import DrawerNavbar from '../components/Navbar/DrawerNavbar'
import SurveyList from '../components/Survey/SurveyList'
import EmployeeContextProvider from '../context/employeeContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from '../components/Landing/Landing'
import Result from '../components/Result/Result'
import EmployeeProfile from '../components/EmployeeProfile/EmployeeProfile'
import LoginPage from '../components/Login/LoginPage'
import { MediaContext } from '../context/mediaContext'
import RegistrationPage from '../components/Register/RegistrationPage'
import EmployeeProfileEdit from '../components/EmployeeProfile/EmployeeProfileEdit'
import InterviewList from '../components/Interview/InterviewList'

function AppEmployee(props) {
  const mediaContext = useContext(MediaContext)
  const { media } = mediaContext
  return (
    <Router>
      <EmployeeContextProvider>
        {media ? <DesktopNavbar /> : <DrawerNavbar />}
        <Switch>
          <Route exact path="/" render={props => <Landing />}></Route>
          <Route exact path="/survey" component={SurveyList}></Route>
          <Route exact path="/profile" component={EmployeeProfile}></Route>
          <Route exact path="/interviews" component={InterviewList}></Route>

          <Route exact path="/result" component={Result}></Route>
          <Route
            exact
            path="/profile/edit"
            component={EmployeeProfileEdit}
          ></Route>
          <Route exact path="/login" component={LoginPage}></Route>
          <Route exact path="/register" component={RegistrationPage}></Route>
        </Switch>
      </EmployeeContextProvider>
    </Router>
  )
}

export default AppEmployee
