import { gql } from '@apollo/client';

export default gql`
mutation editSeat($peopleId:String!, $status:Boolean!, $room:String!){
	editSeat(room:$room, status:$status, peopleId:$peopleId){
        peopleId
        room
        status
  }
}
`;
