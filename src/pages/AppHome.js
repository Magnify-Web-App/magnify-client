import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import AppEmployee from './AppEmployee.js'
import AppEmployer from './AppEmployer.js'
import LoginPage from '../components/Login/LoginPage'

function Home() {
  const defaultUser = {
    email: undefined,
    displayName: '',
    photos: null
  }
  const [user, setUser] = useState(false)

  const getProfile = async () => {
    try {
      const user = await fetch('http://localhost:3000/login', {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true
        }
      }).then(resp => resp.json())
      return user
    } catch (error) {
      return false
    }
  }

  useEffect(() => {
    async function fetchData() {
      const user = await getProfile()
      if (user) {
        setUser(user)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      {console.log(user)}
      <Router>
        {user.type !== 'Employer' ? (
          <AppEmployee user={user} setGlobalUser={setUser} />
        ) : (
          <AppEmployer user={user} setGlobalUser={setUser} />
        )}
        {!user ? (
          <Switch>
            <Route
              path="/"
              component={props => <LoginPage {...props} user={user} />}
            ></Route>
          </Switch>
        ) : null}
      </Router>
    </>
  )
}

export default Home
