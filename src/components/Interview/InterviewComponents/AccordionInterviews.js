import React from 'react'
import styled from 'styled-components'
import AccordionInterviewsItem from './AccordionInterviewsItem'
import { Link } from 'react-router-dom'
const AccordionWrapper = styled.ul`
  list-style: none;
  padding: 0;
  width: 40vw;
`
const placeHolderSummary =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, mi sed aliquet tempor, nulla velit ornare neque, sed imperdiet odio sem a ex. Praesent sed nunc mi. Cras facilisis, tortor a ullamcorper viverra, velit. '
const AccordionInterviews = () => {
  return (
    <AccordionWrapper data-testid="accordion-wrapper">
      <AccordionInterviewsItem
        header="Lorem Ipsum"
        summary={placeHolderSummary}
        initialState={true}
      />
      <AccordionInterviewsItem
        header="Lorem Ipsum"
        summary={placeHolderSummary}
        initialState={false}
      />
      <AccordionInterviewsItem
        header="Lorem Ipsum"
        summary={placeHolderSummary}
        initialState={false}
      />
    </AccordionWrapper>
  )
}
export default AccordionInterviews
