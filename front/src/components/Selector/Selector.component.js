import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectorComponent = (props) => {
  const classes = useStyles();
  const {roomValue, handleRoomValue} = props;

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="select-sensor">Sensor</InputLabel>
      <Select
        labelId="simple-select-label"
        id="demo-simple-select"
        value={roomValue}
        onChange={handleRoomValue}
      >
        <MenuItem value="None">None</MenuItem>
        <MenuItem value="room_a">Room A</MenuItem>
        <MenuItem value="room_b">Room B</MenuItem>
        <MenuItem value="room_c">Room C</MenuItem>
      </Select>
    </FormControl>
  )
}

export default SelectorComponent;