import gql from 'graphql-tag';

export default gql`
query getPeopleCounter($sensor:String!){
    getPeopleCounter(sensor:$sensor)
}
`;