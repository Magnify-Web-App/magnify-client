const linkedin_logout = async () => {
  await fetch('http://localhost:3000/logout', {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true
    }
  })
  return true
}

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

const isRegistered = user => {
  if (user.category.length === 0) {
    return false
  }
  return true
}

const saveSurvey = async survey => {
  const resp = await fetch('http://localhost:3000/employee/survey', {
    method: 'POST',
    body: JSON.stringify(survey),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true
    }
  })
  return resp
}

const submitSurvey = async survey => {
  const resp = await fetch('http://localhost:3000/employee/result', {
    method: 'POST',
    body: JSON.stringify(survey),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true
    }
  })
  return resp
}

const updateEmployee = async editedEmployee => {
  const resp = fetch('http://localhost:3000/employee/update', {
    method: 'PUT',
    body: JSON.stringify(editedEmployee),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true
    }
  })
  return resp
}

module.exports = {
  linkedin_logout,
  getProfile,
  saveSurvey,
  submitSurvey,
  isRegistered,
  updateEmployee
}
