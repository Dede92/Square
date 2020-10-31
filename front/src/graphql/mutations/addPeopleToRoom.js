import { gql } from '@apollo/client';

export default gql`
mutation createSeat($room:String!, $status:String!, $peopleId:String!){
    createSeat(room:$room, peopleId:$peopleId, status:$status){
        room
        peopleId
        status
    }
}
`;
