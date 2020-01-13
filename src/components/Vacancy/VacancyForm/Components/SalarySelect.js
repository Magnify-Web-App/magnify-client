import React from 'react'
import {
  MenuItem,
  InputLabel,
  Select,
  FormControl,
  makeStyles
} from '@material-ui/core'
import SelectInput from '@material-ui/core/Select/SelectInput'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}))

const SalarySelect = props => {
  const classes = useStyles()
  const [Salary, setSalary] = React.useState('')

  const inputLabel = React.useRef(null)
  const [labelWidth, setLabelWidth] = React.useState(0)
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth)
  }, [])

  const handleChange = event => {
    setSalary(event.target.value)
  }
  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          Salary
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={Salary}
          onChange={handleChange}
          labelWidth={labelWidth}
        >
          <MenuItem value={1}>$0 - $40,000</MenuItem>
          <MenuItem value={2}>$40,000 - $60,000</MenuItem>
          <MenuItem value={3}>$60,000 - $80,000</MenuItem>
          <MenuItem value={4}>$80,000 - $100,000</MenuItem>
          <MenuItem value={5}>$100,000 - $120,000</MenuItem>
          <MenuItem value={6}>$120,000 - $150,000</MenuItem>
          <MenuItem value={7}>$150,000 - $200,000</MenuItem>
          <MenuItem value={8}>$200,000 +</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default SalarySelect
