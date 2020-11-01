query_get_people_counter = '''
query getPeopleCounter($room:String!){
    getPeopleCounter(room:$room) {
        room
        statusIn
        statusOut
    }
}
'''

query_all_people_counter = '''
query allPeopleCounters{
    allPeopleCounters{
        room
        statusIn
        statusOut
        createdAt
        updatedAt
    }
}
'''