import gql from 'graphql-tag';

export default gql`
query getAllSensor{
    allSensors {
        id
        label
    }
}
`;