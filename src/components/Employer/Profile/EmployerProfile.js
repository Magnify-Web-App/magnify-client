import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { MediaContext } from '../../../context/mediaContext'
import { EmployerContext } from '../../../context/employerContext'
import styled from 'styled-components'
import EditButton from '../../Button/EditButton'

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5vh 0;
`

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  width: ${props => (props.media ? '40vw' : '80vw')};
  padding: 30px;
  min-height: 50vh;
  max-height: max-content;
  max-width: ${props => (props.media ? '40vw' : '80vw')};
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 1), -9px -9px 16px #ffffff;
`
const ProfilePicture = styled.img`
  border-radius: 100%;
  width: ${props => (props.media ? '25vh' : '25vh')};
  height: ${props => (props.media ? '25vh' : '25vh')};
  color: #283593;
  border: solid 10px #28359380;
`

const AbsoluteWrapper = styled.div`
  justify-self: flex-start;
  align-self: flex-end;
  height: 0;
  overflow: visible;
`
const LittleHeader = styled.h2`
  display: flex;
  justify-content: left;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  margin: 0;
  font-weight: 300;
  color: #283593;
`
const Info = styled.h3`
  font-family: 'Roboto', sans-serif;
  text-align: center;
  font-size: 1.2em;
  margin: 0;
  font-weight: 300;
  color: #000000;
`

const Flexing = styled.h3`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  margin: 0;
  margin-top: 3vh;
  font-weight: 400;
  color: #283593;
`
const RepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-color: lightgray;
  min-height: auto;
  max-width: 90%;
`

const EmployerProfile = () => {
  const { media } = useContext(MediaContext)
  const { user } = useContext(EmployerContext)
  console.log(user)
  if (user.email) {
    return (
      <>
        <ProfileWrapper media={media ? media.toString() : null}>
          <ProfileContainer media={media ? media.toString() : null}>
            <AbsoluteWrapper>
              <Link to="/profile/edit">
                <EditButton />
              </Link>
            </AbsoluteWrapper>
            <ProfilePicture
              src={user.photos}
              alt="avatar"
            />
            <RepWrapper>
              <Flexing>
                <LittleHeader>Company rep:</LittleHeader>
                <Info>{user.displayName}</Info>
              </Flexing>
              <Flexing>
                <LittleHeader>Company rep email:</LittleHeader>
                <Info> {user.email}</Info>
              </Flexing>
              <Flexing>
                <LittleHeader>Company Name:</LittleHeader>
                <Info>{user.companyName}</Info>
              </Flexing>
              <Flexing>
                <LittleHeader>Company Address:</LittleHeader>
                <Info>{user.address}</Info>
              </Flexing>
              <Flexing>
                <LittleHeader>Company Description:</LittleHeader>
                <Info>{user.description}</Info>
              </Flexing>
            </RepWrapper>
            
          </ProfileContainer>
        </ProfileWrapper>
      </>
    )
  } else {
    return <Redirect to="/" />
  }
}
export default EmployerProfile
