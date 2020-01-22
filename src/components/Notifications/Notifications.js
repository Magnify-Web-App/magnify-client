import React, { useContext } from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import CancelIcon from '@material-ui/icons/Cancel'
import MaterialTable from 'material-table'
import { EmployeeContext } from '../../context/employeeContext'

export default function Notification() {
  const [state, setState] = React.useState({
    columns1: [
      { title: 'Notification', field: 'notification' },
      { title: 'Company', field: 'company' },
      { title: 'Vacancy', field: 'vacancy' },
      { title: 'Salary', field: 'salary' }, //type: 'numeric'
      {
        title: 'Action',
        field: 'action',
        render: rowData => {
          return (
            <>
              <CheckCircleIcon />
              <CancelIcon />
            </>
          )
        }
      }
    ],
    columns2: [
      { title: 'Notification', field: 'notification' },
      { title: 'Delegate', field: 'delegate' },
      { title: 'Vacancy', field: 'vacancy' },
      { title: 'Result', field: 'result' }
    ],
    data1: [
      {
        notification: 'Interview',
        company: 'MYOB',
        vacancy: 'Junior Developer',
        salary: '$30,000 - $70,000',
        description:
          'Vacancy description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel viverra diam. Nulla a enim quis erat rutrum auctor ut in metus. Sed quis porta augue, a porta mauris. Etiam eu odio quis erat pharetra lobortis. Aenean sed porttitor velit, sit amet varius ipsum. Quisque semper orci vitae ultricies iaculis. Nulla imperdiet eros justo, eget accumsan velit efficitur sed. Duis sed velit lorem. Integer semper risus eget orci congue, et mollis elit elementum.'
      },
      {
        notification: 'Interview',
        company: 'IBM',
        vacancy: 'Developer',
        salary: '$60,000 - $90,000',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel viverra diam. Nulla a enim quis erat rutrum auctor ut in metus. Sed quis porta augue, a porta mauris. Etiam eu odio quis erat pharetra lobortis. Aenean sed porttitor velit, sit amet varius ipsum. Quisque semper orci vitae ultricies iaculis. Nulla imperdiet eros justo, eget accumsan velit efficitur sed. Duis sed velit lorem. Integer semper risus eget orci congue, et mollis elit elementum.'
      }
    ],
    data2: [
      {
        notification: 'Accepted',
        delegate: 'John Smith',
        vacancy: 'Junior Developer',
        result: '89%',
        message:
          'Thank you, for your invitaion please email me at @-------- the date, time and location!'
      },
      {
        notification: 'Accepted',
        delegate: 'Jane Doe',
        vacancy: 'Developer',
        result: '73%',
        message:
          'Thank you, for your invitaion please email me at @-------- the date, time and location!'
      }
    ]
  })
  const employeeContext = useContext(EmployeeContext)
  if (employeeContext) {
    return (
      <div className="container">
        <MaterialTable
          title="Notification"
          columns={state.columns1}
          data={state.data1}
          detailPanel={rowData => {
            return (
              <div
                style={{
                  paddingLeft: '20px',
                  paddingRight: '20px'
                }}
              >
                <p>{rowData.description}</p>
              </div>
            )
          }}
        />
      </div>
    )
  } else {
    return (
      <div className="container">
        <MaterialTable
          title="Notification"
          columns={state.columns2}
          data={state.data2}
          detailPanel={rowData => {
            return (
              <div
                style={{
                  paddingLeft: '20px',
                  paddingRight: '20px'
                }}
              >
                <p>{rowData.message}</p>
              </div>
            )
          }}
        />
      </div>
    )
  }
}
