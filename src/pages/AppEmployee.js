import React, { useContext } from 'react'
import DesktopNavbar from '../components/Navbar/DesktopNavbar'
import DrawerNavbar from '../components/Navbar/DrawerNavbar'
import SurveyList from '../components/Survey/SurveyList'
import EmployeeContextProvider from '../context/employeeContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from '../components/Landing/Landing'
import Result from '../components/Result/Result'
import EmployeeProfile from '../components/EmployeeProfile/EmployeeProfile'
import { MediaContext } from '../context/mediaContext'
import RegistrationPage from '../components/Register/RegistrationPage'
import EmployeeProfileEdit from '../components/EmployeeProfile/EmployeeProfileEdit'
import VacanciesList from '../components/Employee/VacancyList/VacancyList'
import VacancyForm from '../components/Vacancy/VacancyForm/VacancyForm'
import VacancyInfo from '../components/Vacancy/VacancyInfo/VacancyInfo'
import InterveiwList from '../components/Interview/InterviewList'

function AppEmployee(props) {
  const mediaContext = useContext(MediaContext)
  const { media } = mediaContext
  return (
    <Router>
      {props.user ? (
        <EmployeeContextProvider
          user={props.user}
          setGlobalUser={props.setGlobalUser}
        >
          {media ? <DesktopNavbar /> : <DrawerNavbar />}
          <Switch>
            <Route path="/landing" render={props => <Landing />}></Route>
            <Route path="/survey" component={SurveyList}></Route>
            <Route path="/result" component={Result}></Route>
            <Route path="/interview" component={InterveiwList}></Route>
            <Route exact path="/register" component={RegistrationPage}></Route>
            <Route exact path="/profile" component={EmployeeProfile}></Route>
            <Route
              exact
              path="/profile/edit"
              component={EmployeeProfileEdit}
            ></Route>
            <Route exact path="/vacancies" component={VacanciesList}></Route>
            <Route exact path="/vacancies/add" component={VacancyForm}></Route>
            <Route exact path="/vacancies/edit" component={VacancyForm}></Route>
            <Route exact path="/vacancies/info" component={VacancyInfo}></Route>
          </Switch>
        </EmployeeContextProvider>
      ) : null}
    </Router>
  )
}

export default AppEmployee
