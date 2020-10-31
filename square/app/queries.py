import graphene
from .models import PeopleCounter
from .types import PeopleCounterType

class Query(graphene.ObjectType):
    all_people_counters = graphene.List(PeopleCounterType)
    get_people_counter = graphene.Field(graphene.Int, room=graphene.String(required=True))

    def resolve_all_people_counters(self, info, **kwargs):
        return PeopleCounter.objects.all()

    def resolve_get_people_counter(self, info, **kwargs):
        return PeopleCounter.objects.filter(room=kwargs['room'], status=1).count()
