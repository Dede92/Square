import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { withStyles } from "@material-ui/core/styles";
import GetOccupancy from 'containers/getOccupancy.container';
import ADD_PEOPLE_TO_ROOM from 'mutations/addPeopleToRoom'
import uuid from 'react-uuid'
import SelectorComponent from 'components/Selector';

const styles = (theme) => ({
    root: {
      flexGrow: 1,
      margin: '2em',
      marginTop: '7em',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

function MainPage() {
  const [roomValue, setRoomValue] = useState('')
  const [createSeat, { data }] = useMutation(ADD_PEOPLE_TO_ROOM); 

  const handleRoomValue = (value) => {
    setRoomValue(value.target.value)
  }
  useEffect(() => {
    createSeat({ variables: {room: roomValue, peopleId: uuid(), status: 0} })
  }, []);

  return (
    <React.Fragment>
      <SelectorComponent roomValue={roomValue} handleRoomValue={handleRoomValue}/>
      <GetOccupancy room={roomValue}/>
    </React.Fragment>
  )
}

export default withStyles(styles, { withTheme: true })(MainPage);