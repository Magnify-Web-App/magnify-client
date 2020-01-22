import React, { useContext , useState } from 'react'
import { MediaContext }  from '../../../context/mediaContext'
import styled from 'styled-components'
import CategorySelect from '../CategorySelect/CategorySelect'
import BioTextbox from '../../TextBoxes/BioTextbox'
import { EmployeeContext } from '../../../context/employeeContext'
import { useHistory } from "react-router-dom";
import SalarySelect from './SalarySelect'
import GeneralButton from '../../Button/GeneralButton'

const RegisterationBackground = styled.div`
  height: 100vh;
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

const RegistrationFormWrapper = styled.div`
  max-width:  ${(props)=> props.media ? "40vw" : "min-content"};
  padding: 0 5vw;
  max-height: max-content;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  background-color: #FFFFFF;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 1), -9px -9px 16px #FFFFFF;
  padding-bottom: 5vh;
`

const RegisterHeader = styled.h1`
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  font-size: 2.5em;
  margin: 2vh 0;
`

const RegistrationPage = (props) => {
  const mediaContext = useContext(MediaContext)
  const employeeContext = useContext(EmployeeContext)
  const [category, setCategory] = useState([])
  const [salary, setSalary] = useState('')
  const [biography, setBiography] = useState('')
  const { media } = mediaContext;
  const { user, handleUpdate } = employeeContext
  let history = useHistory()
  const handleClick = () => {
    const editedUser = user
    if(category.length > 0){
      editedUser.category = category
      editedUser.bio = biography
      editedUser.salary = salary
      editedUser.current = {
        current_section: "A",
        current_count: 1
      }
      handleUpdate(editedUser)
      history.push('/profile')
    }
  }
  return (
    <>
      <RegisterationBackground data-testid="register-form">
        <RegistrationFormWrapper  media={media ? media.toString() : null}>
          <RegisterHeader>Create your account</RegisterHeader>
          <SalarySelect handleChange={setSalary}/>
          <CategorySelect handleChange={setCategory}/>
          <BioTextbox handleChange={setBiography} label="Enter your bio"/>
          <GeneralButton label="Create Account" handleClick={handleClick}/>
        </RegistrationFormWrapper>
      </RegisterationBackground>
    </>
  )
}

export default RegistrationPage