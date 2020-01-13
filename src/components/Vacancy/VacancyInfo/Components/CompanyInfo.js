// will be replaced by employer profile props!!
import React from 'react'
import styled from 'styled-components'

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

const CompanyInfo = () => {
  return (
    <>
      <StyledTitle>Company Name</StyledTitle>
      <img
        src="https://img.icons8.com/dusk/64/000000/city.png"
        alt="Company Image"
      ></img>
      <StyledText>Description</StyledText>
      <StyledText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in elementum
        est. Aenean dolor est, scelerisque sed arcu at, venenatis laoreet justo.
      </StyledText>
    </>
  )
}

export default CompanyInfo
