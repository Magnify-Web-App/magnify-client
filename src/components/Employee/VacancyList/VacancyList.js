import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import ApplyButton from '../../Button/ApplyButton'
import { 
  Paper,
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead,  
  TablePagination, 
  Checkbox,
  TableRow } from '@material-ui/core'

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 3vh;
`
const StyledHeader = styled.h1`
  color: #283593;
  font-size: 2em;
  line-height: 0;
`

const StyledWrapper = styled.div`
  border: solid #283593;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5vh auto;
  border-radius: 10px;
  height: auto;
  width: 70%;
  min-width: 320px;
  max-width: max-content;
  padding: 5vh 3vw;
`

const columns = [
  { id: 'company_name', label: 'Company Name', minWidth: 150 },
  {
    id: 'vacancy_name',
    label: 'Vacancy',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString(),
  },
  {
    id: 'salary',
    label: 'Salary',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString(),
  },
  {
    id: 'industry',
    label: 'Industry',
    minWidth: 170,
    align: 'right',
    format: value => value.toFixed(2),
  },
  {
    id: 'apply',
    label: 'Apply',
    minWidth: 80,
    align: 'right',
    format: value => value.toFixed(2),
  },
];

function createData(company_name, vacancy_name, salary, industry, id) {
  return { company_name, vacancy_name, salary, industry, id };
}

const rows = [
  createData('MYOB', 'Developer', "10000 - 50000", 'Information Technology', 1),
  createData('MYOB', 'Developer', "10000 - 50000", 'Information Technology', 2),
  createData('MYOB', 'Developer', "10000 - 50000", 'Information Technology', 3),
  createData('Mantel', 'Developer', "10000 - 50000", 'Information Technology', 4),
  createData('Mantel', 'Developer', "10000 - 50000", 'Information Technology', 5),
  createData('Mantel', 'Developer', "10000 - 50000", 'Information Technology', 6),
  createData('NAB', 'Developer', "10000 - 50000", 'Information Technology', 7),
  createData('NAB', 'Developer', "10000 - 50000", 'Information Technology', 8),
  createData('NAB', 'Developer', "10000 - 50000", 'Information Technology', 9),
  createData('JB-HiFi', 'Developer', "10000 - 50000", 'Information Technology', 10),
  createData('JB-HiFi', 'Developer', "10000 - 50000", 'Information Technology', 11),
  createData('JB-HiFi', 'Developer', "10000 - 50000", 'Information Technology', 12),
  createData('Fresho', 'Developer', "10000 - 50000", 'Information Technology', 13),
  createData('Fresho', 'Developer', "10000 - 50000", 'Information Technology', 14),
  createData('Fresho', 'Developer', "10000 - 50000", 'Information Technology', 15),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 550,
    minHeight: 550,
    overflowX: "hidden"
  },
});

const VacanciesList = () => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selected, setSelected] = useState([])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const isSelected = id => selected.indexOf(id) !== -1;

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  return (
    <>
      <StyledWrapper>
        <HeaderWrapper>
          <StyledHeader>Vacancies List</StyledHeader>
        </HeaderWrapper>
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map(column => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                    const isItemSelected = isSelected(row.id);
                    return (
                      <TableRow 
                      hover 
                      role="checkbox" 
                      tabIndex={-1} 
                      key={row.code}
                      selected={isItemSelected}
                      onClick={event => handleClick(event, row.id)}
                      >
                        {columns.map(column => {
                          const value = row[column.id];
                          if(column.id === 'apply'){
                            return(
                              <TableCell key={column.id} align={column.align}>
                                <Checkbox
                                  value={row.id}
                                  checked={isItemSelected}
                                  inputProps={{ 'aria-label': `${row.vacancy_name}` }}
                                />
                              </TableCell>
                            )
                          }
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number' ? column.format(value) : value}
                            </TableCell>
                          );
                        })}
                        
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>
          <ApplyButton/>
      </StyledWrapper>
    </>
  )
}

export default VacanciesList