import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/styles'
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
  Button
} from '@material-ui/core'

import SurveySlider from '../SurveySlider/SurveySlider'

const survey = require('../Survey.json')

const StyledWrapper = styled.div`
  border: solid #283593;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5vh auto;
  border-radius: 10px;
  height: auto;
  width: 70%;
  min-width: 320px;
  max-width: max-content;
  padding: 5vh 3vw;
`

const StyledQuestion = styled.p`
  color: #283593;
  font-size: 1.3em;
  text-align: center;
`

const StyledHeader = styled.h1`
  color: #283593;
  font-size: 2em;
  line-height: 0;
`

const StyledSubheader = styled.h2`
  color: #ffa726;
  font-size: 1.5em;
  line-height: 0;
  opacity: 0.5;
`

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledIndex = styled.p`
  color: #283593;
  font-size: 1em;
  line-height: 0;
  opacity: 0.5;
`

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(2)
  },
  radioControl: {
    display: 'flex',
    flexDirection: 'column'
  }
}))

const SurveyA = props => {
  const classes = useStyles()
  const { setSection, result, setResult, count, dispatch } = props
  console.log(count)
  const defaultSelect = '1'
  const [selectedValue, setSelectedValue] = useState(defaultSelect)
  const totalQuestion = survey[0]['A']['questions'].length
  let currentQuestion = survey[0]['A']['questions'][count - 1]
  const description = survey[0]['A']['description']
  useEffect(() => {
    setSelectedValue(result[count - 1] || defaultSelect)
  }, [result, count])

  const saveResult = async (select, count) => {
    const temp_result = result
    temp_result[count - 1] = select
    setResult(temp_result)
    setSelectedValue(select)
  }

  const next = () => {
    if (count < totalQuestion) {
      saveResult(selectedValue, count)
      dispatch('increment')
    }
  }
  const back = () => {
    if (count > 1) dispatch('decrement')
  }

  return (
    <>
      <StyledWrapper>
        <HeaderWrapper>
          <StyledHeader>Section A</StyledHeader>
          <StyledSubheader>Question {count}</StyledSubheader>
        </HeaderWrapper>
        <StyledQuestion>{description}</StyledQuestion>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" color="secondary">
            Options
          </FormLabel>
          <RadioGroup
            aria-label="position"
            name="position"
            value={selectedValue}
            column="true"
            onChange={e => saveResult(e.target.value, count)}
          >
            <FormControlLabel
              value="1"
              control={<Radio color="secondary" />}
              label={currentQuestion['options'][0]}
              labelPlacement="end"
            />
            <FormControlLabel
              value="2"
              control={<Radio color="secondary" />}
              label={currentQuestion['options'][1]}
              labelPlacement="end"
            />
            <FormControlLabel
              value="3"
              control={<Radio color="secondary" />}
              label={currentQuestion['options'][2]}
              labelPlacement="end"
            />
          </RadioGroup>
        </FormControl>

        {count === totalQuestion ? (
          <Button
            variant="contained"
            color="secondary"
            size="large"
            className={classes.formControl}
            onClick={() => {
              saveResult(selectedValue, count)
              dispatch(1)
              setSection('B')
            }}
            disabled={selectedValue ? false : true}
          >
            Next Section
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.formControl}
            onClick={next}
            disabled={selectedValue ? false : true}
          >
            Next Question
          </Button>
        )}
        {count === 1 ? null : (
          <Button variant="outlined" color="secondary" onClick={back}>
            Back
          </Button>
        )}
        <SurveySlider
          currentQuestion={count}
          sectionLength={result.length}
          dispatch={dispatch}
        />
        <StyledIndex>{count}/15</StyledIndex>
      </StyledWrapper>
    </>
  )
}

export default SurveyA
