import React from 'react'
import MaterialTable from 'material-table'

export default function Vacancy() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Vacancy', field: 'vacancy' },
      { title: 'Salary', field: 'salary' }, //type: 'numeric'
      {
        title: 'Industry',
        field: 'Industry',
        lookup: { 1: 'Technology', 2: 'Developer' }
      },
      { title: 'Status', field: 'status' , lookup: {1: "Open", 2: "Closed"}}
    ],
    data: [
      {
        vacancy: 'Accountant',
        salary: '30000-70000',
        Industry: 2,
        status: 1
      },
      {
        vacancy: 'Teacher',
        salary: '70000-90000',
        Industry: 1,
        status: 2
      }
    ]
  })

  return (
    <div className="container">
      <MaterialTable
        title="Vacancy"
        columns={state.columns}
        data={state.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve()
                setState(prevState => {
                  const data = [...prevState.data]
                  data.push(newData)
                  return { ...prevState, data }
                })
              }, 600)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve()
                if (oldData) {
                  setState(prevState => {
                    const data = [...prevState.data]
                    data[data.indexOf(oldData)] = newData
                    return { ...prevState, data }
                  })
                }
              }, 600)
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve()
                setState(prevState => {
                  const data = [...prevState.data]
                  data.splice(data.indexOf(oldData), 1)
                  return { ...prevState, data }
                })
              }, 600)
            })
        }}
      />
    </div>
  )
}
