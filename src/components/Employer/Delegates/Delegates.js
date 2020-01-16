import React , { useState, useContext, useEffect } from 'react';
import MaterialTable from 'material-table';
import styled from 'styled-components'
import GeneralButton from '../../Button/GeneralButton';
import { EmployerContext } from '../../../context/employerContext';

const StyledWrapper = styled.div`
  border: solid #283593;
  margin: 5vh auto;
  border-radius: 10px;
  max-width: max-content;
  padding: 5vh 3vw;
  margin: 3vw;
  overflow: scroll;
`

const Delegates = () => {
  const employerContext = useContext(EmployerContext)
  const { user, getDelegates } = employerContext
  const [selected, setSelected] = useState([])
  const [data, setData] = useState([]);
  const columns = [
    { title: 'Name', field: 'displayName' ,filtering: false},
    { title: 'Email', field: 'email',filtering: false },
    { title: 'Rating', field: 'rating' ,filtering: false},
    { title: 'Industry', field: 'category'},
  ]
  console.log(user)
  useEffect(() => {
    const fetchDelegates = async() => {
      const delegates = await getDelegates("Computer")
      const optimisedDelegates = delegates.map((delegate) => {
        delegate.category = delegate.category.join()
        return delegate
      })
      console.log(optimisedDelegates)
      setData(optimisedDelegates)
    }
    fetchDelegates()
  }, [getDelegates])

  return (
    <>
      <StyledWrapper>
        <MaterialTable
          title="Delegates"
          columns={columns}
          data={data}
          options={{
            selection: true,
            filtering: true
          }}
          onSelectionChange={(rows) => setSelected(rows)}
        />
        <GeneralButton label="Invite"/>
      </StyledWrapper>
    </>
  );
}

export default Delegates