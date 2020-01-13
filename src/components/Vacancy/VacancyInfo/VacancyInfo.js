import React, { useState, useRef, useEffect, useReducer } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  Button,
  TextField,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
  makeStyles
} from '@material-ui/core'
import SelectInput from '@material-ui/core/Select/SelectInput'
import CompanyInfo from './Components/CompanyInfo'

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

const VacancyInfo = () => {
  return (
    <>
      <StyledWrapper>
        <HeaderWrapper>
          <StyledHeader>Vacancy Info</StyledHeader>

          <StyledWrapper>
            <CompanyInfo />
          </StyledWrapper>

          <StyledTitle>Industry Categories</StyledTitle>
          <StyledText>Information Technology</StyledText>

          <StyledTitle> Vacancy Description</StyledTitle>
          <StyledText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in
            elementum est. Aenean dolor est, scelerisque sed arcu at, venenatis
            laoreet justo. In rutrum, lacus at tincidunt ultricies, massa quam
            rhoncus ipsum, commodo suscipit elit erat vel arcu.
          </StyledText>

          <StyledTitle>Salary</StyledTitle>
          <StyledText>$90,000 - $120,000</StyledText>

          <StyledTitle>Available Positions</StyledTitle>
          <StyledText>N/A</StyledText>

          <StyledTitle>ACTIVE ?</StyledTitle>
          <StyledText>Open</StyledText>
        </HeaderWrapper>

        <Link to="/vacancies/edit">
          <Button
            variant="contained"
            color="primary"
            size="large"
            // className={classes.formControl}
            // onClick={next}
          >
            Edit
          </Button>
        </Link>
        
      </StyledWrapper>
    </>
  )
}

export default VacancyInfo
