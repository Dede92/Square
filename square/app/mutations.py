import graphene
from .models import PeopleCounter
from .types import PeopleCounterType

class CreateSeat(graphene.Mutation):
    room = graphene.String(required=True, default_value=None)
    people_id = graphene.String(required=True, default_value=None)
    status = graphene.Boolean()

    class Arguments:
        room = graphene.String()
        people_id = graphene.String()
        status = graphene.Boolean()

    def mutate(self, info, room, people_id, status):
        peopleCounter = PeopleCounter(room=room, people_id=people_id, status=status)
        peopleCounter.save()

        return PeopleCounter(
            room = peopleCounter.room,
            people_id = peopleCounter.people_id,
            status = peopleCounter.status,
        )

class EditSeat(graphene.Mutation):
    people_id = graphene.String()
    room = graphene.String()
    status = graphene.Boolean()

    class Arguments:
        people_id = graphene.String()
        room = graphene.String(required=True)
        status = graphene.Boolean(required=True)

    def mutate(self, info, people_id, status, room):
        poepleCounter = PeopleCounter.objects.get(pk=people_id)

        if poepleCounter.status != status:
            poepleCounter.status = status
        if poepleCounter.room != room:
            poepleCounter.room = room
        poepleCounter.save()

        return EditSeat(
            people_id = poepleCounter.people_id,
            room = poepleCounter.room,
            status = poepleCounter.status,
        )

class Mutation(graphene.ObjectType):
    createSeat = CreateSeat.Field()
    editSeat = EditSeat.Field()
