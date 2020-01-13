import React, { useState, useRef, useEffect, useReducer } from 'react'

import styled from 'styled-components'
import { Button, makeStyles } from '@material-ui/core'
import InterviewTable from './InterviewComponents/InterviewTable'
// import CompanyInfo from '..//VacancyInfo/Components/CompanyInfo'

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StyledHeader = styled.h1`
  color: #283593;
  font-size: 2em;
  line-height: 0;
`
const StyledTitle = styled.h2`
  color: #283593;
  font-size: 1.3em;
  text-align: center;
`
const StyledText = styled.p`
  font-size: 1em;
  font-weight: 300;
  height: auto;
  text-align: center;
`
const PlaceHolderText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, mi sed aliquet tempor, nulla velit ornare neque, sed imperdiet odio sem a ex.'
////////-------------------------------------------------------------------------------------

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

/* ========================================================================== */

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}))
/* ========================================================================== */

const InterviewList = () => {
  return (
    <>
      <StyledWrapper>
        <HeaderWrapper>
          <StyledHeader>Interview List</StyledHeader>
          {/* <StyledWrapper><CompanyInfo /></StyledWrapper> */}
          {/* -----------------------------------make accordion interviews------------------------------------------- */}
          <InterviewTable />
          {/* ----------------------------------\/Wrap in div\/----------------------------------- */}
          <Button
            variant="contained"
            color="primary"
            size="large"
            // className={classes.formControl}
            // onClick={next}
          >
            Accept
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            // className={classes.formControl}
            // onClick={next}
          >
            Decline
          </Button>
          {/* ----------------------------------^Wrap in div^----------------------------------- */}
        </HeaderWrapper>
      </StyledWrapper>
    </>
  )
}

export default InterviewList
