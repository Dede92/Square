mutation_add_people_to_room = '''
mutation createSeat($room:String!, $statusIn:Int!, $statusOut:Int!, $peopleId:String!){
    createSeat(room:$room, peopleId:$peopleId, statusIn:$statusIn, statusOut:$statusOut){
        room
        peopleId
        statusIn
        statusOut
    }
}
'''