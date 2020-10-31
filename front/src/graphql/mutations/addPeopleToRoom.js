import { gql } from '@apollo/client';

export default gql`
mutation createSeat($room:String!, $statusIn:Int!, $statusOut:Int!, $peopleId:String!){
    createSeat(room:$room, peopleId:$peopleId, statusIn:$statusIn, statusOut:$statusOut){
        room
        peopleId
        statusIn
        statusOut
    }
}
`;
