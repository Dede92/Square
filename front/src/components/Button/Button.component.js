import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
      flexGrow: 1,
  },
}));

const ButtonComponent = (props) => {
  const {data, handleOnClick} = props
  const classes = useStyles();

  return (
  <div>
    <Button variant="contained" color="primary" onClick={handleOnClick}>Show occupancy</Button>
    <div>
      {data}
    </div>
  </div>
  )
}

export default ButtonComponent;