import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    margin: '4em 0em 1em 0.5em',
  },
  display: {
    fontSize: 40,
  },
}));

const ButtonComponent = (props) => {
  const {data, handleOnClick} = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={handleOnClick}>Show occupancy</Button>
      <div className={classes.display}>
        {data}
      </div>
    </div>
  )
}

export default ButtonComponent;