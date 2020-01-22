import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { MediaContext } from '../../../context/mediaContext'
import { EmployeeContext } from '../../../context/employeeContext'
import { 
  Chip,
  Avatar
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import styled from 'styled-components'
import EditButton from '../../Button/EditButton'

const ProfileWrapper = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
  width: ${props => (props.media ? '40vw' : '80vw')};
  padding: 30px;
  min-height: 50vh;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 1), -9px -9px 16px #ffffff;
`

const ProfilePicture = styled.img`
  border-radius: 100%;
  width: ${props => (props.media ? '25vh' : '25vh')};
  height: ${props => (props.media ? '25vh' : '25vh')};
  color: #283593;
  border: solid 10px #28359380;
`

const DisplayName = styled.h1`
  font-family: 'Roboto', sans-serif;
  margin: 0;
  margin-top: 3vh;
  font-weight: 400;
  color: #283593;
`

const Email = styled.h3`
  font-family: 'Roboto', sans-serif;
  margin: 0;
  font-weight: 300;
  color: #000000;
  opacity: 0.5;
`

const Subheader = styled.h2`
  font-family: 'Roboto', sans-serif;
  margin: 0;
  font-weight: 400;
  color: #ffa726;
  margin-top: 1.5vh;
`

const Categories = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  opacity: 0.8;
  max-width: ${(props) => props.media ? "40vw" : "inherit"};
  flex-wrap: wrap;
`

const Bio = styled.p`
  color: #283593;
  font-family: 'Roboto', sans-serif;
  margin-top: 1.5vh;
  font-weight: 300;
  text-align: center;
`

const AbsoluteWrapper = styled.div`
  justify-self: flex-start;
  align-self: flex-end;
  height: 0;
  overflow: visible;
`

const useStyles = makeStyles(theme => ({
  chip: {
    margin: "1vw 1vw"
  }
})) 

const EmployeeProfile = () => {
  const classes = useStyles()
  const { media } = useContext(MediaContext)
  const { user } = useContext(EmployeeContext)
  console.log(user)
  if (user.email) {
    return (
      <>
        <ProfileWrapper media={media ? media.toString() : null}>
          <ProfileContainer media={media ? media.toString() : null}>
            <AbsoluteWrapper>
              <Link to="/profile/edit">
                <EditButton/>
              </Link>
            </AbsoluteWrapper>
            <ProfilePicture
              data-testid="profile-picture"
              src={user.photos}
              alt="profile-pic"
              media={media ? media.toString() : null}
            />
            <DisplayName data-testid="profile-name">{user.displayName}</DisplayName>
            <Email data-testid="profile-email">{user.email}</Email>
            <Subheader>Industry Category</Subheader>
              <Categories media={media} data-testid="profile-industries">
                {user.category.map((category, index) =>{
                return(
                  <Chip
                    key={`category-${index}`}
                    className={classes.chip}
                    avatar={<Avatar>{category.charAt(0)}</Avatar>}
                    label={category}
                    clickable
                    color="primary"
                  />
                )
              })}
              </Categories>
            <Bio data-testid="profile-bio">{user.bio}</Bio>
          </ProfileContainer>
        </ProfileWrapper>
      </>
    )
  } else {
    return <Redirect to="/" />
  }
}

export default EmployeeProfile
