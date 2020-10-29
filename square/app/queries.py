import graphene
from .models import Sensor, PeopleCounter
from .types import SensorType, PeopleCounterType

class Query(graphene.ObjectType):
    all_sensors = graphene.List(SensorType)
    all_people_counters = graphene.List(PeopleCounterType)

    def resolve_all_sensors(self, info, **kwargs):
        return Sensor.objects.all()

    def resolve_all_people_counters(self, info, **kwargs):
        return PeopleCounter.objects.all()
