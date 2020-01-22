import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { MediaContext } from '../../../context/mediaContext'
import { EmployerContext } from '../../../context/employerContext'
import SaveButton from '../../Button/GeneralButton'
import CloseIcon from '@material-ui/icons/Close'
import Textfield from '../../TextBoxes/Textfield'
import BioTextbox from '../../TextBoxes/BioTextbox'
import GeneralButton from '../../Button/GeneralButton'

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
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
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

const EmployerProfileEdit = () => {
  const { media } = useContext(MediaContext)
  const { user, handleUpdate } = useContext(EmployerContext)
  const [companyName, setCompanyName] = useState(user.companyName)
  const [companyAddress, setCompanyAddress] = useState(user.address)
  const [description, setDescription] = useState(user.description)
  console.log(user.companyName)
  let history = useHistory()
  const handleClick = () => {
    const editedUser = user
    editedUser.companyName = companyName
    editedUser.address = companyAddress
    editedUser.description = description
    handleUpdate(editedUser)
    history.push('/profile')
  }
  return (
    <>
      <ProfileWrapper media={media ? media.toString() : null}>
        <ProfileContainer media={media ? media.toString() : null}>
          <AbsoluteWrapper>
            <Link to="/profile">
              <CloseIcon />
            </Link>
          </AbsoluteWrapper>
          <ProfilePicture
            media={media ? media.toString() : null}
            src={user.photos}
            alt="avatar"
          />
          <Flexing>
            <LittleHeader>Company rep:</LittleHeader>
            <Info>{user.displayName}</Info>
          </Flexing>
          <Flexing>
            <LittleHeader>Company rep email:</LittleHeader>
            <Info> {user.email}</Info>
          </Flexing>
          <Textfield defaultValue={companyName} label="Company Name" handleChange={setCompanyName}/>
          <Textfield defaultValue={companyAddress} label="Address" handleChange={setCompanyAddress}/>
          <BioTextbox current={description} handleChange={setDescription} label="Company description"/>
          <GeneralButton label="Update Account" handleClick={handleClick}/>
        </ProfileContainer>
      </ProfileWrapper>
    </>
  )
}
export default EmployerProfileEdit
