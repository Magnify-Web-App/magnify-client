import React, { useState } from 'react'
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
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
const AccordionWrapper = styled.div`
  border-style: ridge;
  background: #f4f4f4;
`
const AccordionHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`
const AccordionSubheader = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 2em;
  font-weight: 300;
  margin: 0;
`
const AccordionParagraph = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #191919;
  font-size: 1.2em;
  font-weight: 300;
  line-height: 1.5em;
  transition: all 0.5s ease-out;
  opacity: ${props => (props.activated ? 1 : 0)};
  max-height: ${props => (props.activated ? '30vh' : 0)};
  overflow-y: hidden;
`
const count = 0 //Show how many have applied
const AccordionInterviewsItem = props => {
  const [active, setActive] = useState(props.initialState)
  const toggleActive = () => {
    setActive(prevState => {
      return !prevState
    })
  }
  return (
    <AccordionWrapper
      onClick={toggleActive}
      data-testid="accordion-item-wrapper"
    >
      <AccordionHeaderWrapper>
        <AccordionSubheader>{props.header}</AccordionSubheader>
        <Button variant="contained" disabled>
          Open
        </Button>
        {active ? (
          <ArrowDropUpIcon
            color="secondary"
            fontSize="large"
            data-testid="drop-up"
          />
        ) : (
          <ArrowDropDownIcon
            color="secondary"
            fontSize="large"
            data-testid="drop-down"
          />
        )}
      </AccordionHeaderWrapper>
      <AccordionParagraph
        activated={active}
        data-testid="accordion-item-summary"
      >
        {props.summary}
        <Button
          variant="contained"
          color="primary"
          size="large"
          // className={classes.formControl}
          // onClick={next}
        >
          Aplicants {count}
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="/vacancyInfo"
        >
          Details
        </Button>
      </AccordionParagraph>
    </AccordionWrapper>
  )
}
export default AccordionInterviewsItem
