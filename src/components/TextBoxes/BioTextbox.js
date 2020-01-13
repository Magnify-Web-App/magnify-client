import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'
import styled from 'styled-components'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    boxShadow: '5px 5px 8px rgb(163, 177, 198), -5px -5px 8px #FFFFFF',
    border: 'none'
  }
}))

const BioTextbox = props => {
  const classes = useStyles()
  const handleChange = event => {
    props.handleChange(event.target.value)
  }
  return (
    <>
      <TextField
        className={classes.formControl}
        id="outlined-multiline-static"
        label="Enter your Bio"
        defaultValue={props.current}
        fullWidth={true}
        multiline
        rows="10"
        variant="outlined"
        onChange={handleChange}
      />
    </>
  )
}

export default BioTextbox
