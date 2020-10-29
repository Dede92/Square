from graphene_django.types import DjangoObjectType
from .models import Sensor, PeopleCounter 


class SensorType(DjangoObjectType):
    class Meta:
        model = Sensor

class PeopleCounterType(DjangoObjectType):
    class Meta:
        model = PeopleCounter
