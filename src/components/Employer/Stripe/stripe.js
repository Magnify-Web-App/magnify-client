import React, { Component } from 'react'
import { Elements, StripeProvider } from 'react-stripe-elements'
import CheckoutForm from './form'
import { PaymentTwoTone } from '@material-ui/icons'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  max-width: 100vw;
  width: max-content;
  padding: 2%;
  background-color: #FFFFFF;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 1), -9px -9px 16px #ffffff;
`

const FallbackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`
class Stripe extends Component {
  render() {
    return (
      <FallbackWrapper>
        <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
          <Elements>
            <Wrapper>
              <PaymentTwoTone />
              <CheckoutForm />
            </Wrapper>
          </Elements>
        </StripeProvider>
      </FallbackWrapper>
    )
  }
}

export default Stripe
