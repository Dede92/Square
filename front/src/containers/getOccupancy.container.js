import React from 'react';
import { useQuery } from '@apollo/client';
import ButtonComponent from 'components/Button'
import GET_PEOPLE_COUNTER from 'queries/getPeopleCounter';

const adatper = (input) => {
  return input.statusIn - input.statusOut
} 

export default (props) => {
  const {room} = props;
  const {data, error, loading, refetch} = useQuery(GET_PEOPLE_COUNTER, {
    variables: {room:''},
  });
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const handleOnClick = () => {
    refetch({room})
  }
    
  return (
    <div>
      <ButtonComponent data={adatper(data.getPeopleCounter)} handleOnClick={handleOnClick}/>
    </div>
  )
}