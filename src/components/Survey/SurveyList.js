import React, { useState, useContext, useEffect, useReducer } from 'react'
import SaveIcon from '@material-ui/icons/Save'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import CloseIcon from '@material-ui/icons/Close'
import styled from 'styled-components'
import { green } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'
import { Fab, Snackbar, IconButton, SnackbarContent } from '@material-ui/core'
import SurveyA from './SurveyA'
import SurveyB from './SurveyB'
import SurveyC from './SurveyC'
import SurveyD from './SurveyD'
import { EmployeeContext } from '../../context/employeeContext'
import SurveyStepper from '../SurveyStepper/SurveyStepper'

const FabWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const useStyles = makeStyles(theme => ({
  success: {
    backgroundColor: green[600]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  }
}))

const count_reducer = (state, action) => {
  console.log("cr: " + state)
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return 1
    default:
      return isNaN(action) ? 1 : parseInt(action)
  }
}

const SurveyList = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const employeeContext = useContext(EmployeeContext)
  const { user, saveSurvey } = employeeContext
  const [resultA, setResultA] = useState([])
  const [resultB, setResultB] = useState([])
  const [resultC, setResultC] = useState([])
  const [resultD, setResultD] = useState([])
  const [section, setSection] = useState('A')
  const [count, dispatch] = useReducer(count_reducer, 1)

  useEffect(() => {
    if (user.survey) {
      setResultA(user.survey.surveyA || [])
      setResultB(user.survey.surveyB || [])
      setResultC(user.survey.surveyC || [])
      setResultD(user.survey.surveyD || [])
    }
    if (user.current) {
      setSection(user.current.current_section || 'A')
      dispatch(user.current.current_count || 'reset')
    }
  }, [user])

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const saving = () => {
    saveSurvey({
      surveyA: resultA,
      surveyB: resultB,
      surveyC: resultC,
      surveyD: resultD,
      count,
      section
    })
    handleClick()
  }

  const currestSection = () => {
    switch (section) {
      case 'A':
        return (
          <SurveyA
            setSection={setSection}
            result={resultA}
            setResult={setResultA}
            count={count}
            dispatch={dispatch}
          />
        )
      case 'B':
        return (
          <SurveyB
            setSection={setSection}
            result={resultB}
            setResult={setResultB}
            count={count}
            dispatch={dispatch}
          />
        )
      case 'C':
        return (
          <SurveyC
            setSection={setSection}
            result={resultC}
            setResult={setResultC}
            count={count}
            dispatch={dispatch}
          />
        )
      case 'D':
        return (
          <SurveyD
            setSection={setSection}
            result={resultD}
            setResult={setResultD}
            count={count}
            dispatch={dispatch}
          />
        )
      default:
        return null
    }
  }
  return (
    <>
      {currestSection()}
      {user.email ? (
        <>
          <FabWrapper>
            <SurveyStepper
              section={section}
              dispatch={dispatch}
              setSection={setSection}
              resultA={resultA}
              resultB={resultB}
              resultC={resultC}
              resultD={resultD}
            />
            <Fab
              aria-label="join-us"
              color="secondary"
              onClick={() => {
                saving()
              }}
            >
              <SaveIcon />
            </Fab>
          </FabWrapper>
        </>
      ) : null}
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <SnackbarContent
          message={
            <span id="message-id" className={classes.message}>
              <CheckCircleIcon className={classes.iconVariant} />
              Progress saved
            </span>
          }
          action={[
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon className={classes.icon} />
            </IconButton>
          ]}
          className={classes.success}
        />
      </Snackbar>
    </>
  )
}

export default SurveyList
