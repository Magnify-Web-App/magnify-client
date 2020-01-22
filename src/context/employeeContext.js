import React, { createContext, useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import {
  linkedin_logout,
  saveSurvey,
  fetchSubmitSurvey,
  isRegistered,
  updateEmployee,
  getAllVacancies,
  updateVacancy
} from './helper/employee'

export const EmployeeContext = createContext()

const EmployeeContextProvider = props => {
  let history = useHistory()
  const [user, setUser] = useState(props.user)
  const [redirectToRegistration, setRedirectToRegistration] = useState(false)
  // let history = props.history
  const handleLogout = () => {
    linkedin_logout()
    props.setGlobalUser(false)
    history.push('/')
  }

  const handleUpdate = editedEmployee => {
    setUser(() => editedEmployee)
    updateEmployee({ editedEmployee: user })
  }

  const submitSurvey = async survey => {
    const score = await fetchSubmitSurvey(survey)
    if (score) {
      setUser(prevState => {
        prevState.score = score.score
        return { ...prevState }
      })
    }
  }

  const updateCurrent = async (section, page) => {
    setUser(prevState => {
      const newUser = prevState
      newUser.current.current_count = page + 1
      newUser.current.current_section = section
      return newUser
    })
  }

  const updateVacancyById = async updatedVacancy => {
    const response = await updateVacancy(updatedVacancy)
    return response
  }

  useEffect(() => {
    if (user) {
      const redirectAfterLogin = () => {
        setRedirectToRegistration(() => {
          return isRegistered(user)
        })
        if (user.email) {
          redirectToRegistration
            ? user.score.rating
              ? history.push('/result')
              : history.push('/landing')
            : history.push('/register')
        }
      }
      redirectAfterLogin()
    }
  }, [user, redirectToRegistration, history])

  return (
    <EmployeeContext.Provider
      value={{
        user,
        handleLogout,
        saveSurvey,
        submitSurvey,
        handleUpdate,
        updateCurrent,
        getAllVacancies,
        updateVacancyById
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  )
}

export const useEmployeeContext = () => useContext(EmployeeContext)

export default EmployeeContextProvider
