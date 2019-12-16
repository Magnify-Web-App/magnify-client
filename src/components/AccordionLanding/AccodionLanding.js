import React from 'react'
import styled from 'styled-components'
import AccordionLandingItem from './AccodionLandingItem'
import Fab from '@material-ui/core/Fab'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { Link } from 'react-router-dom'

const AccordionWrapper = styled.ul`
  list-style: none;
  padding: 0;
  width: 40vw;
`

const StyledIntroWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 40vw;
  height: auto;
`

const IntroHeader = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 3em;
  background: linear-gradient(0.25turn, #b973f9, #6ed3fc, #b973f9, #6ed3fc);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 300;
`

const FabWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const placeHolderSummary =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, mi sed aliquet tempor, nulla velit ornare neque, sed imperdiet odio sem a ex. Praesent sed nunc mi. Cras facilisis, tortor a ullamcorper viverra, velit. '

const AccordionLanding = () => {
  return (
    <AccordionWrapper data-testid="accordion-wrapper">
      <StyledIntroWrapper>
        <IntroHeader>Why Magnify?</IntroHeader>
      </StyledIntroWrapper>
      <AccordionLandingItem
        header="Lorem Ipsum"
        summary={placeHolderSummary}
        initialState={true}
      />
      <AccordionLandingItem
        header="Lorem Ipsum"
        summary={placeHolderSummary}
        initialState={false}
      />
      <AccordionLandingItem
        header="Lorem Ipsum"
        summary={placeHolderSummary}
        initialState={false}
      />
      <FabWrapper>
        <Link to="/survey">
          <Fab aria-label="join-us" variant="extended" color="secondary">
            Do the survey
            <FavoriteIcon />
          </Fab>
        </Link>
      </FabWrapper>
    </AccordionWrapper>
  )
}

export default AccordionLanding
