import graphene
from .models import PeopleCounter
from .types import PeopleCounterType, PeopleCountType
from django.db.models import Sum, Q


class Query(graphene.ObjectType):
    all_people_counters = graphene.List(PeopleCounterType)
    get_people_counter = graphene.Field(PeopleCountType,
                                        room=graphene.String(required=True),
                                        atInstant=graphene.String())

    def resolve_all_people_counters(self, info, **kwargs):
        return PeopleCounter.objects.all()

    def resolve_get_people_counter(self, info, **kwargs):
        q = Q()
        if 'room' in kwargs:
            q &= Q(room=kwargs['room'])
        if 'atInstant' in kwargs:
            q &= Q(created_at__lte=kwargs['atInstant'])
        a = PeopleCounter.objects.filter(q).aggregate(
            num_in=Sum('status_in'), num_out=Sum('status_out'))
        return {
            'room': kwargs['room'],
            'status_in': 0 if a['num_in'] is None else a['num_in'],
            'status_out': 0 if a['num_out'] is None else a['num_out'],
        }
