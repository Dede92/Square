import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { DateTimePicker } from '@material-ui/pickers';

const useStyles = makeStyles(() => ({
  formControl: {
    margin: '10em 0em 1em 0em',
  }
}));

const SelectorComponent = (props) => {
  const classes = useStyles();
  const {roomValue, handleRoomValue, clearedDate, handleClearedDateChange} = props;

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="select-sensor">Sensor</InputLabel>
      <Select
        labelId="simple-select-label"
        id="demo-simple-select"
        value={roomValue}
        onChange={handleRoomValue}
      >
        <MenuItem value="stand_by">StandBy</MenuItem>
        <MenuItem value="room_a">Room A</MenuItem>
        <MenuItem value="room_b">Room B</MenuItem>
        <MenuItem value="room_c">Room C</MenuItem>
      </Select>
      <DateTimePicker
        clearable
        value={clearedDate}
        onChange={handleClearedDateChange}
        helperText="Clear Initial State"
      />

    </FormControl>
  )
}

export default SelectorComponent;