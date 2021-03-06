import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  IconButton,
  Toolbar,
  AppBar,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Notifications from '@material-ui/icons/Notifications'

import ExitToApp from '@material-ui/icons/ExitToApp'
import Assignment from '@material-ui/icons/Assignment'
import AssignmentTurnedIn from '@material-ui/icons/AssignmentTurnedIn'
import MeetingRoom from '@material-ui/icons/MeetingRoom'
import GroupAddIcon from '@material-ui/icons/GroupAdd'
import GroupIcon from '@material-ui/icons/Group'
import { Link } from 'react-router-dom'
import { EmployeeContext } from '../../context/employeeContext'
import { EmployerContext } from '../../context/employerContext'
import StarsIcon from '@material-ui/icons/Stars'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    color: 'white',
    textDecoration: 'none'
  },
  title: {
    flexGrow: 1
  },
  list: {
    width: '75vw',
    height: '100vh'
  },
  banner: {
    height: '20vh',
    backgroundColor: '#283593'
  },
  navWrapper: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-end'
  },
  navigation: {
    height: '65vh',
    display: 'flex',
    flexDirection: 'column',
    justifycontent: 'flex-end',
    flexdirection: 'column',
    flex: 1
  }
})

const DrawerNavbar = props => {
  const employeeContext = useContext(EmployeeContext)
  const employerContext = useContext(EmployerContext)
  let logout
  if (employeeContext) {
    logout = employeeContext.handleLogout
  } else {
    logout = employerContext.handleLogout
  }
  const classes = useStyles()
  const [drawer, setdrawer] = useState({
    left: false
  })
  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setdrawer({ ...drawer, [side]: open })
  }

  const sideList_employee = side => {
    return (
      <div
        data-testid="employee-navbar"
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer('left', false)}
        onKeyDown={toggleDrawer('left', false)}
      >
        <div className={classes.banner}></div>
        <List className={classes.navigation}>
          <Link
            data-testid="navigation-survey"
            to="/survey"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <ListItem button key="Survey" data-testid="test-survey">
              <ListItemIcon>
                <Assignment />
              </ListItemIcon>
              <ListItemText primary="Survey" />
            </ListItem>
          </Link>
          <Link
            data-testid="navigation-result"
            to="/result"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <ListItem button key="Result" data-testid="test-result">
              <ListItemIcon>
                <AssignmentTurnedIn />
              </ListItemIcon>
              <ListItemText primary="Result" />
            </ListItem>
          </Link>
          <Link
            data-testid="navigation-vacancies"
            to="/vacancies"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <ListItem button key="Vacancy" data-testid="test-vacancy">
              <ListItemIcon>
                <MeetingRoom />
              </ListItemIcon>
              <ListItemText primary="Vacancy" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link
            to="/notifications"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <ListItem
              button
              key="Account Settings"
              data-testid="test-account-settings"
            >
              <ListItemIcon>
                <Notifications />
              </ListItemIcon>
              <ListItemText primary="Notifications" />
            </ListItem>
          </Link>
          <Link
            to="/profile"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <ListItem
              button
              key="Account Settings"
              data-testid="test-account-settings"
            >
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="Account Settings" />
            </ListItem>
          </Link>
          <ListItem
            button
            data-testid="test-logout"
            key="Log Out"
            onClick={logout}
          >
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItem>
        </List>
      </div>
    )
  }

  const sideList_employer = side => {
    return (
      <div
        data-testid="employer-navbar"
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer('left', false)}
        onKeyDown={toggleDrawer('left', false)}
      >
        <div className={classes.banner}></div>
        <List className={classes.navigation}>
          <Link
            data-testid="navigation-companyvacancies"
            to="/vacancy"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <ListItem button key="Vacancy" data-testid="test-vacancy">
              <ListItemIcon>
                <Assignment />
              </ListItemIcon>
              <ListItemText primary="Vacancy" />
            </ListItem>
          </Link>
          <Link
            data-testid="navigation-delegates"
            to="/delegates"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <ListItem button key="Delegates" data-testid="test-delegates">
              <ListItemIcon>
                <GroupAddIcon />
              </ListItemIcon>
              <ListItemText primary="Delegates" />
            </ListItem>
          </Link>
          <Link
            data-testid="navigation-premium"
            to="/premium"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <ListItem button key="Premium" data-testid="test-premium">
              <ListItemIcon>
                <StarsIcon />
              </ListItemIcon>
              <ListItemText primary="Become Premium" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link
            to="/notifications"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <ListItem
              button
              key="Account Settings"
              data-testid="test-account-settings"
            >
              <ListItemIcon>
                <Notifications />
              </ListItemIcon>
              <ListItemText primary="Notifications" />
            </ListItem>
          </Link>
          <Link
            to="/profile"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <ListItem
              button
              key="Account Settings"
              data-testid="test-account-settings"
            >
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="Account Settings" />
            </ListItem>
          </Link>
          <ListItem
            button
            data-testid="test-logout"
            key="Log Out"
            onClick={logout}
          >
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItem>
        </List>
      </div>
    )
  }
  return (
    <>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton
            edge="start"
            onClick={toggleDrawer('left', true)}
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            data-testid="navigation-menu"
          >
            <MenuIcon />
          </IconButton>
          <Link
            to="/landing"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <Typography variant="h6" className={classes.title}>
              Magnify
            </Typography>
          </Link>
          <div className={classes.navWrapper}></div>
        </Toolbar>
      </AppBar>
      <Drawer
        open={drawer.left}
        onClose={toggleDrawer('left', false)}
        className={classes.drawer}
      >
        {employeeContext ? sideList_employee() : sideList_employer()}
      </Drawer>
    </>
  )
}

export default DrawerNavbar
