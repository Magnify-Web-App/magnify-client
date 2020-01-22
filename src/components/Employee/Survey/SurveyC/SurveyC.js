import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/styles'
import {
  FormControl,
  Button,
  Select,
  MenuItem,
  InputLabel
} from '@material-ui/core'

import SurveySlider from '../SurveySlider/SurveySlider'

const survey = require('../Survey.json')

const StyledWrapper = styled.div`
  background-color: #FFFFFF;
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

const StyledOption = styled.p`
  color: #283593;
  font-size: 1em;
  text-align: left;
`

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
    margin: theme.spacing(2),
    minWidth: '120px'
  },
  radioControl: {
    display: 'flex',
    flexDirection: 'column'
  }
}))

const SelectOptions = props => {
  const inputLabel = useRef(null)
  const [labelWidth, setLabelWidth] = useState(0)
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth)
  }, [])

  const { count, index, result, setResult, setShowNext, updateCurrent } = props
  const defaultOption = ''
  const [selectedOption, setSelectedOption] = useState(defaultOption)

  useEffect(() => {
    setSelectedOption(result[count - 1][index] || defaultOption)
  }, [index, result, count])

  useEffect(() => {
    if (result[count - 1].length > 3) {
      result[count - 1].includes(undefined) || result[count - 1].includes(null)
        ? setShowNext(false)
        : setShowNext(true)
    } else setShowNext(false)
  }, [result, count, setShowNext])

  const saveResult = async select => {
    const temp_result = result
    temp_result[count - 1][index] = select
    updateCurrent("C", count)
    setResult(temp_result)
    setSelectedOption(select)
    if (result[count - 1].length > 3) {
      result[count - 1].includes(undefined) || result[count - 1].includes(null)
        ? setShowNext(false)
        : setShowNext(true)
    } else setShowNext(false)
  }
  return (
    <>
      <InputLabel id="select-label" ref={inputLabel}>
        Select
      </InputLabel>
      <Select
        labelId="select-label"
        id="select-outlined"
        variant="outlined"
        value={selectedOption}
        onChange={e => {
          saveResult(e.target.value)
        }}
        labelWidth={labelWidth}
      >
        <MenuItem value="1">1</MenuItem>
        <MenuItem value="2">2</MenuItem>
        <MenuItem value="3">3</MenuItem>
        <MenuItem value="4">4</MenuItem>
      </Select>
    </>
  )
}

const SurveyC = props => {
  const classes = useStyles()
  const { setSection, result, setResult, count, dispatch, updateCurrent } = props
  const [showNext, setShowNext] = useState(false)
  if (!result[count - 1]) result[count - 1] = []
  const totalQuestion = survey[0]['C']['questions'].length
  let currentQuestion = survey[0]['C']['questions'][count - 1]

  const next = () => {
    if (count < totalQuestion) {
      dispatch('increment')
    }
  }
  const back = () => {
    if (count > 1) dispatch('decrement')
  }

  const g_OptionWrapper = () => {
    return Array.from(Array(4)).map((ele, index) => {
      return (
        <OptionWrapper key={currentQuestion['options'][index]}>
          <StyledOption>{currentQuestion['options'][index]}</StyledOption>
          <FormControl className={classes.formControl} variant="outlined">
            <SelectOptions
              updateCurrent={updateCurrent}
              count={count}
              index={index}
              result={result}
              setResult={setResult}
              setShowNext={setShowNext}
            />
          </FormControl>
        </OptionWrapper>
      )
    })
  }

  return (
    <>
      <StyledWrapper data-testid="survey-c">
        <HeaderWrapper>
          <StyledHeader>Section C</StyledHeader>
          <StyledSubheader>Question {count}</StyledSubheader>
        </HeaderWrapper>
        <StyledQuestion>{currentQuestion['question']}</StyledQuestion>
        {g_OptionWrapper()}

        {count === totalQuestion ? (
          <Button
            variant="contained"
            color="secondary"
            size="large"
            className={classes.formControl}
            onClick={() => {
              dispatch(1)
              setSection('D')
            }}
            disabled={showNext ? false : true}
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
            disabled={showNext ? false : true}
          >
            Next Question
          </Button>
        )}
        {count === 1 ? (
          <Button
            variant="contained"
            color="secondary"
            size="large"
            className={classes.formControl}
            onClick={() => {
              dispatch(32)
              setSection('B')
            }}
          >
            Back to Section B
          </Button>
        ) : (
          <Button variant="outlined" color="secondary" onClick={back}>
            Back
          </Button>
        )}
        <SurveySlider
          currentQuestion={count}
          sectionLength={result.length}
          dispatch={dispatch}
        />
        <StyledIndex>{count}/5</StyledIndex>
      </StyledWrapper>
    </>
  )
}

export default SurveyC
