import React from 'react'
import styled from 'styled-components'
import AccordionVacanciesItem from './AccordionVacanciesItem'
import { Link } from 'react-router-dom'

const AccordionWrapper = styled.ul`
  list-style: none;
  padding: 0;
  width: 40vw;
`

const placeHolderSummary =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, mi sed aliquet tempor, nulla velit ornare neque, sed imperdiet odio sem a ex. Praesent sed nunc mi. Cras facilisis, tortor a ullamcorper viverra, velit. '

const AccordionVacancies = () => {
  return (
    <AccordionWrapper data-testid="accordion-wrapper">
      <AccordionVacanciesItem
        header="Lorem Ipsum"
        summary={placeHolderSummary}
        initialState={true}
      />
      <AccordionVacanciesItem
        header="Lorem Ipsum"
        summary={placeHolderSummary}
        initialState={false}
      />
      <AccordionVacanciesItem
        header="Lorem Ipsum"
        summary={placeHolderSummary}
        initialState={false}
      />
    </AccordionWrapper>
  )
}

export default AccordionVacancies
