import React, { useContext } from 'react'
import DesktopNavbar from '../components/Navbar/DesktopNavbar'
import DrawerNavbar from '../components/Navbar/DrawerNavbar'
import SurveyList from '../components/Employee/Survey/SurveyList'
import EmployeeContextProvider from '../context/employeeContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from '../components/Employee/Landing/Landing'
import Result from '../components/Employee/Result/Result'
import EmployeeProfile from '../components/Employee/EmployeeProfile/EmployeeProfile'
import { MediaContext } from '../context/mediaContext'
import RegistrationPage from '../components/Employee/Register/RegistrationPage'
import EmployeeProfileEdit from '../components/Employee/EmployeeProfile/EmployeeProfileEdit'
import VacanciesList from '../components/Employee/VacancyList/VacancyList'
import VacancyForm from '../components/Employee/Vacancy/VacancyForm/VacancyForm'
import VacancyInfo from '../components/Employee/Vacancy/VacancyInfo/VacancyInfo'
import FooterComponent from '../components/Footer/Footer'

function AppEmployee(props) {
  const mediaContext = useContext(MediaContext)
  const { media } = mediaContext
  return (
    <Router>
      {props.user ? (
        <Switch>
          <EmployeeContextProvider
            user={props.user}
            setGlobalUser={props.setGlobalUser}
          >
            {media ? <DesktopNavbar /> : <DrawerNavbar />}
            <Route path="/landing" component={Landing}></Route>
            <Route path="/survey" component={SurveyList}></Route>
            <Route path="/result" component={Result}></Route>
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
            <FooterComponent />
          </EmployeeContextProvider>
        </Switch>
      ) : null}
    </Router>
  )
}

export default AppEmployee
