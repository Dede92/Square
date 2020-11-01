import gql from 'graphql-tag';

export default gql`
query getPeopleCounter($room:String!, $atInstant:String){
    getPeopleCounter(room:$room, atInstant:$atInstant) {
        room
        statusIn
        statusOut
    }
}
`;