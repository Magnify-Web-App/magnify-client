import React, { useContext } from 'react'
import { MediaContext } from '../../context/mediaContext'

import LoginButton from '../Button/LoginButton'
import styled from 'styled-components'

import { Redirect } from 'react-router-dom'

const LoginBackground = styled.div`
  height: 100vh;
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: ${props => (props.media ? '0 20vw' : '0 5vw')};
  background-color: #eaeff7;
`

const LoginHeader = styled.h1`
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  font-size: 4em;
  margin: 3vh 0;
`

const LoginSubHeader = styled.h2`
  font-family: 'Nunito', sans-serif;
  font-weight: 300;
  margin: 1vh 0;
`

const LoginFormWrapper = styled.div`
  background-color: #dde6f4;
  width: 100%;
  height: 70%;
  border-radius: 30px;
  margin-top: 10vh;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 1), -9px -9px 16px #ffffff;
`

const LoginSection = styled.div`
  width: 50%;
  background-image: url('https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
  background-size: cover;
  filter: grayscale(30%);
`

const LoginForm = styled.div`
  display: flex;
  width: ${props => (props.media ? '50%' : '100%')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function LoginPage(props) {
  const mediaContext = useContext(MediaContext)
  const { user } = props.user
  const { media } = mediaContext
  if (!user) {
    return (
      <>
        <LoginBackground media={media ? media.toString() : null}>
          <LoginFormWrapper>
            {media ? <LoginSection></LoginSection> : null}
            <LoginForm media={media ? media.toString() : null}>
              <LoginHeader>Login</LoginHeader>
              <LoginSubHeader>Hello, User</LoginSubHeader>
              <LoginSubHeader>Welcome to Magnify</LoginSubHeader>
              <LoginButton userType={'Employee'}></LoginButton>
              <LoginButton userType={'Employer'}></LoginButton>
            </LoginForm>
          </LoginFormWrapper>
        </LoginBackground>
      </>
    )
  } else {
    return <Redirect to="/landing" />
  }
}

export default LoginPage
