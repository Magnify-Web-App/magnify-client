import React, { useContext, useState, useEffect, useRef } from 'react'
import MaterialTable from 'material-table'
import { EmployerContext } from '../../../context/employerContext'
import DoneIcon from '@material-ui/icons/Done'
import CloseIcon from '@material-ui/icons/Close'
import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'Avatar',
    field: 'avatar',
    render: rowData => (
      <img style={{ height: 36, borderRadius: '50%' }} src={rowData.photos} />
    )
  },
  { title: 'Name', field: 'displayName', filtering: false },
  { title: 'Email', field: 'email', filtering: false },
  { title: 'Rating', field: 'rating', filtering: false },
  { title: 'Industry', field: 'category' },
  {
    title: 'Interview',
    render: rowData => {
      return (
        <Link to={{ pathname: '/delegates' }}>
          <DoneIcon />
        </Link>
      )
    }
  },
  { title: 'Decline', render: rowData => <CloseIcon /> }
]

const dummy = [
  {
    displayName: 'Jimmy',
    email: 'jimmyjimmy@gmail.com',
    rating: '70%',
    category: 'Computer',
    photos:
      'https://media-exp2.licdn.com/dms/image/C5603AQGdMNSnZWPuyw/profile-displayphoto-shrink_800_800/0?e=1585180800&v=beta&t=H7Kcuq0grVO0i0pvvtsCHNw0e_b3vaAXMpKlolZP2ak'
  },
  {
    displayName: 'Michael',
    email: 'mich.my@gmail.com',
    rating: '59%',
    category: 'Computer',
    photos:
      'https://media-exp2.licdn.com/dms/image/C5603AQGdMNSnZWPuyw/profile-displayphoto-shrink_800_800/0?e=1585180800&v=beta&t=H7Kcuq0grVO0i0pvvtsCHNw0e_b3vaAXMpKlolZP2ak'
  },
  {
    displayName: 'Daniel',
    email: 'daniel.dan@gmail.com',
    rating: '44%',
    category: 'Computer',
    photos:
      'https://media-exp2.licdn.com/dms/image/C5603AQGdMNSnZWPuyw/profile-displayphoto-shrink_800_800/0?e=1585180800&v=beta&t=H7Kcuq0grVO0i0pvvtsCHNw0e_b3vaAXMpKlolZP2ak'
  },
  {
    displayName: 'Sam',
    email: 'samuel.sam@gmail.com',
    rating: '33%',
    category: 'Computer',
    photos:
      'https://media-exp2.licdn.com/dms/image/C5603AQGdMNSnZWPuyw/profile-displayphoto-shrink_800_800/0?e=1585180800&v=beta&t=H7Kcuq0grVO0i0pvvtsCHNw0e_b3vaAXMpKlolZP2ak'
  }
]

const Applicants = props => {
  const employerContext = useContext(EmployerContext)
  const {
    updateVacancyById,
    user,
    createNewVacancy,
    companyVacancies,
    getAllVacanciesOfCompany,
    deleteVacancyById
  } = employerContext
  const [applicants, setApplicants] = useState(dummy)

  const focus = useRef(null)
  useEffect(() => {
    setApplicants(generateApplicants())
  }, [])

  const generateApplicants = () => {
    console.log(props.applicants)
    if (props.applicants.length > 0) {
      let data = []
      props.applicants.forEach(app => {
        data.push({
          displayName: app.displayName,
          email: app.email,
          rating: app.score.rating,
          category: app.category,
          photos: app.photos
        })
      })
      focus.current.focus()
      return data
    } else {
      return dummy
    }
  }
  return (
    <div ref={focus} tabIndex="0">
      <br />
      <MaterialTable
        title="Applicants"
        columns={columns}
        data={applicants}
        options={{
          pageSize: 5
        }}
      />
      <br />
    </div>
  )
}

export default Applicants
