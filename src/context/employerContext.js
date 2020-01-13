import React, { createContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { linkedin_logout } from './helper/employer'

export const EmployerContext = createContext()

const EmployerContextProvider = props => {
  // const defaultUser = {
  //   email: undefined,
  //   displayName: '',
  //   photos: null,
  //   category: [],
  //   bio: undefined,
  //   survey: {},
  //   current: {}
  // }
  let history = useHistory()
  const [user, setUser] = useState(props.user)

  const handleLogout = () => {
    linkedin_logout()
    props.setGlobalUser(false)
    history.push('/')
  }

  // useEffect(() => {
  //   // async function fetchData() {
  //   //   const user = await getProfile()
  //   //   if (user) setUser(user)
  //   // }
  //   // fetchData()
  //   if (user) setUser(props.user)
  // }, [])

  useEffect(() => {
    if (user) {
      history.push('/landing')
    }
  }, [user, history])

  return (
    <EmployerContext.Provider
      value={{
        user,
        handleLogout
      }}
    >
      {props.children}
    </EmployerContext.Provider>
  )
}

export default EmployerContextProvider
