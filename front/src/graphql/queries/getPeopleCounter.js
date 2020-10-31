import gql from 'graphql-tag';

export default gql`
query getPeopleCounter($room:String!){
    getPeopleCounter(room:$room)
}
`;