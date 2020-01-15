import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import red from '@material-ui/core/colors/red'

const DeclineButton = props => {
  const useStyles = makeStyles(theme => ({
    button: {
      alignSelf: 'flex-end',
      marginTop: '2vh',
      color: '#FFFFFF',
      background: red[600]
    }
  }))
  const classes = useStyles()
  return (
    <Button variant="contained" color="primary" className={classes.button}>
      Decline
    </Button>
  )
}

export default DeclineButton
