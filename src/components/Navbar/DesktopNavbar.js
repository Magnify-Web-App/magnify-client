import React, { useContext } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge
} from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { EmployeeContext } from '../../context/employeeContext'
import { Link } from 'react-router-dom'
import { EmployerContext } from '../../context/employerContext'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    color: 'white',
    textDecoration: 'none'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  navWrapper: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-end'
  },
  navButton: {
    marginRight: theme.spacing(8)
  }
}))

const DesktopNavbar = () => {
  const employeeContext = useContext(EmployeeContext)
  const employerContext = useContext(EmployerContext)
  const classes = useStyles()
  useTheme()
  if(employeeContext){
    const { user, handleLogout } = employeeContext
    return (
      <>
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <Link
              to="/landing"
              style={{
                textDecoration: 'none',
                color: 'white'
              }}
            >
              <Typography variant="h6" className={classes.title}>
                Magnify
              </Typography>
            </Link>
            {user.email && (
              <div className={classes.navWrapper}>
                <Badge
                  variant="dot"
                  color="secondary"
                  className={classes.navButton}
                >
                  <Link
                    to="/survey"
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Button color="inherit">Survey</Button>
                  </Link>
                </Badge>
                <Badge
                  variant="dot"
                  color="secondary"
                  className={classes.navButton}
                >
                  <Link
                    to="/result"
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Button color="inherit">Result</Button>
                  </Link>
                </Badge>
                <Badge
                  variant="dot"
                  color="secondary"
                  className={classes.navButton}
                >
                  <Link
                    to="/interview"
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Button color="inherit">Interview</Button>
                  </Link>
                </Badge>
                <Badge
                  variant="dot"
                  color="secondary"
                  className={classes.navButton}
                >
                  <Link
                    to="/vacancies"
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Button color="inherit">Vacancy</Button>
                  </Link>
                </Badge>
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge variant="dot" color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <Link to="/profile" style={{ color: 'white' }}>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                </Link>
                <Button onClick={handleLogout} color="inherit">
                  Log out
                </Button>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </>
    )
  }
  else{
    const { user, handleLogout } = employerContext
    return(
      <>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Link
            to="/landing"
            style={{
              textDecoration: 'none',
              color: 'white'
            }}
          >
            <Typography variant="h6" className={classes.title}>
              Magnify
            </Typography>
          </Link>
          {user.email && (
            <div className={classes.navWrapper}>
              <Badge
                variant="dot"
                color="secondary"
                className={classes.navButton}
              >
                <Link
                  to="/vacancy"
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Button color="inherit">Vacancy</Button>
                </Link>
              </Badge>
              <Badge
                variant="dot"
                color="secondary"
                className={classes.navButton}
              >
                <Link
                  to="/delegates"
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Button color="inherit">Delegates</Button>
                </Link>
              </Badge>
              <Badge
                variant="dot"
                color="secondary"
                className={classes.navButton}
              >
                <Link
                  to="/employees"
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Button color="inherit">Employees</Button>
                </Link>
              </Badge>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge variant="dot" color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Link to="/profile" style={{ color: 'white' }}>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Link>
              <Button onClick={handleLogout} color="inherit">
                Log out
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
    )
  }
  
}

export default DesktopNavbar