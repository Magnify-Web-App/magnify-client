import React, { useState, useContext } from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const LoginButton = props => {
  const [fill, setFill] = useState('#40abde')
  const linkedin_login = () => {
    window.open(
      'http://localhost:3000/auth/linkedin/login/' +
        props.userType.toLowerCase(),
      '_self'
    )
  }

  const useStyles = makeStyles(theme => ({
    button: {
      backgroundColor: '#DDE6F4',
      maxWidth: '90%',
      marginTop: '35px',
      boxShadow: '5px 5px 8px rgb(163, 177, 198), -5px -5px 8px #FFFFFF',
      borderRadius: '30px'
    },
    text: {
      margin: '0 5px',
      color: fill
    }
  })) 
  const classes = useStyles()
  return (
    <Button
      onClick={linkedin_login}
      onMouseOver={() => setFill('white')}
      onMouseOut={() => setFill('#40abde')}
      variant="contained"
      color="primary"
      className={classes.button}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={fill}
      >
        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" />
      </svg>
      <span className={classes.text}>
        Login with LinkedIn as {props.userType}
      </span>
    </Button>
  )
}

export default LoginButton
