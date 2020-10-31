import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { withStyles } from "@material-ui/core/styles";
import GetOccupancy from 'containers/getOccupancy.container';
import ADD_PEOPLE_TO_ROOM from 'mutations/addPeopleToRoom';
import EDIT_PEOPLE from 'mutations/editPeople';
import uuid from 'react-uuid';
import SelectorComponent from 'components/Selector';
import { Beforeunload } from 'react-beforeunload';

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
  const [roomValue, setRoomValue] = useState('stand_by')
  const [user, setUser] = useState({})
  const [createSeat] = useMutation(ADD_PEOPLE_TO_ROOM);
  const [editSeat] = useMutation(EDIT_PEOPLE);
  
  const handleRoomValue = (value) => {
    setRoomValue(value.target.value)
    editSeat({variables: {room: value.target.value, peopleId: user.id, status: 1}});
  }

  useEffect(() => {
    const id = uuid()
    setUser({id})
    createSeat({ variables: {room: roomValue, peopleId: id, status: 1}})
  }, []);

  const handleBeforeUnload = (event) => {
    event.preventDefault()
    editSeat({variables: {room: roomValue, peopleId: user.id, status: 0}});
  }

  return (
    <React.Fragment>
      <Beforeunload onBeforeunload={(event) => handleBeforeUnload(event)} />
      <SelectorComponent roomValue={roomValue} handleRoomValue={handleRoomValue}/>
      <GetOccupancy room={roomValue}/>
    </React.Fragment>
  )
}

export default withStyles(styles, { withTheme: true })(MainPage);