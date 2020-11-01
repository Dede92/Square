from graphene_django.types import DjangoObjectType
from graphene import String, Int, ObjectType
from .models import PeopleCounter


class PeopleCounterType(DjangoObjectType):
    class Meta:
        model = PeopleCounter


class PeopleCountType(ObjectType):
    room = String()
    status_in = Int()
    status_out = Int()
