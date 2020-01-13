import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  IconButton,
  Toolbar,
  AppBar,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import ExitToApp from '@material-ui/icons/ExitToApp'
import Assignment from '@material-ui/icons/Assignment'
import AssignmentTurnedIn from '@material-ui/icons/AssignmentTurnedIn'
import People from '@material-ui/icons/People'
import MeetingRoom from '@material-ui/icons/MeetingRoom'
import { EmployeeContext } from '../../context/employeeContext'
import { Link } from 'react-router-dom'

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
    width: '50vw',
    height: '100vh'
  },
  banner: {
    height: '20vh',
    backgroundColor: 'purple'
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

const DrawerNavbar = () => {
  const employeeContext = useContext(EmployeeContext)
  const { user, handleLogout } = employeeContext

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

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <div className={classes.banner}></div>
      <List className={classes.navigation}>
        <Link to="/survey" style={{ color: 'inherit', textDecoration: 'none' }}>
          <ListItem button key="Survey" data-testid="test-survey">
            <ListItemIcon>
              <Assignment />
            </ListItemIcon>
            <ListItemText primary="Survey" />
          </ListItem>
        </Link>
        <Link to="/result" style={{ color: 'inherit', textDecoration: 'none' }}>
          <ListItem button key="Result" data-testid="test-result">
            <ListItemIcon>
              <AssignmentTurnedIn />
            </ListItemIcon>
            <ListItemText primary="Result" />
          </ListItem>
        </Link>
        <Link
          to="/interview"
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          <ListItem button key="Interview" data-testid="test-interview">
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary="Interview" />
          </ListItem>
        </Link>
        <Link
          to="/vacancy"
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
          onClick={handleLogout}
        >
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText primary="Log Out" />
        </ListItem>
      </List>
    </div>
  )

  return (
    <>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          {user.email && (
            <IconButton
              edge="start"
              onClick={toggleDrawer('left', true)}
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          )}
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
        {sideList('left')}
      </Drawer>
    </>
  )
}

export default DrawerNavbar
