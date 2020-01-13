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

const ActivitySelect = props => {
  const classes = useStyles()
  const [Activity, setActivity] = React.useState('')

  const inputLabel = React.useRef(null)
  const [labelWidth, setLabelWidth] = React.useState(0)
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth)
  }, [])

  const handleChange = event => {
    setActivity(event.target.value)
  }
  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          Active
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={Activity}
          onChange={handleChange}
          labelWidth={labelWidth}
        >
          <MenuItem value="">
            <em>open by default</em>
          </MenuItem>
          <MenuItem value={1}>OPEN</MenuItem>
          <MenuItem value={2}>CLOSED</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default ActivitySelect
