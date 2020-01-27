import React, { useState, useContext, useEffect } from 'react'
import MaterialTable from 'material-table'
import styled from 'styled-components'
import GeneralButton from '../../Button/GeneralButton'
import { MediaContext } from '../../../context/mediaContext'
import { EmployeeContext } from '../../../context/employeeContext'

const StyledWrapper = styled.div`
  padding: ${props => (props.media ? '5vh 15vw' : '5vw 2vw')};
  overflow: scroll;
`

// Title, description, creator, salary, industry, applicants, isOpen

const VacanciesList = () => {
  const mediaContext = useContext(MediaContext)
  const employeeContext = useContext(EmployeeContext)
  const [selected, setSelected] = useState([])
  const [data, setData] = useState()
  const { media } = mediaContext
  const { user, getAllVacancies, updateVacancyById } = employeeContext

  const applyToSelected = () => {
    selected.forEach(async vacancy => {
      if (!vacancy.applicants.includes(user)) {
        vacancy.applicants.push(user)
        await updateVacancyById(vacancy)
      }
    })
    alert('succesfully apply vacancy')
  }

  useEffect(() => {
    async function fetchVacancies() {
      let vacancies = await getAllVacancies()
      setData(vacancies)
    }
    fetchVacancies()
  }, [getAllVacancies])

  const columns = [
    { title: 'Title', field: 'title' },
    { title: 'Company', field: 'creator.companyName' },
    { title: 'Salary', field: 'salary' },
    {
      title: 'Industry',
      field: 'industry',
      lookup: {
        1: 'Aerospace',
        2: 'Transport',
        3: 'Computer',
        4: 'Telecommunication',
        5: 'Agriculture',
        6: 'Construction',
        7: 'Education',
        8: 'Pharmaceutical',
        9: 'Food',
        10: 'Health care',
        11: 'Hospitality',
        12: 'Entertainment',
        13: 'News Media',
        14: 'Energy',
        15: 'Manufacturing',
        16: 'Music',
        17: 'Mining',
        18: 'Worldwide web',
        19: 'Electronics'
      }
    },
    { title: 'Description', field: 'description' }
  ]

  return (
    <>
      <StyledWrapper data-testid="vacancy-table" media={media}>
        <MaterialTable
          title="Vacancy List"
          columns={columns}
          data={data}
          options={{
            selection: true,
            pageSize: 10
          }}
          onSelectionChange={rows => {
            setSelected(rows)
          }}
        />
        <GeneralButton
          label="Apply"
          testid="apply-button"
          handleClick={applyToSelected}
        />
      </StyledWrapper>
    </>
  )
}

export default VacanciesList
