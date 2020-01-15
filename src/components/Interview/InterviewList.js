import React, { useState, useRef, useEffect, useReducer } from 'react'

import styled from 'styled-components'
import { Button, makeStyles } from '@material-ui/core'
import InterviewTable from './InterviewComponents/InterviewTable'
import AcceptButton from '../Button/AcceptButton'
import DeclineButton from '../Button/DeclineButton'
import TableCell from '@material-ui/core/TableCell'
import Checkbox from '@material-ui/core/Checkbox'

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
function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };


const InterviewList = () => {
  return (
    <>
      <StyledWrapper>
        <HeaderWrapper>
          <StyledHeader>Interview List</StyledHeader>
          {/* <StyledWrapper><CompanyInfo /></StyledWrapper> */}
          {/* -----------------------------------make accordion interviews------------------------------------------- */}
          <InterviewTable />
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'select all desserts' }}
            />
          </TableCell>
          {/* ----------------------------------\/Wrap in div\/----------------------------------- */}
          <AcceptButton />
          <DeclineButton />
          {/* ----------------------------------^Wrap in div^----------------------------------- */}
        </HeaderWrapper>
      </StyledWrapper>
    </>
  )
}

export default InterviewList
