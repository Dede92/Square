from graphene_django.types import DjangoObjectType
from .models import PeopleCounter 

class PeopleCounterType(DjangoObjectType):
    class Meta:
        model = PeopleCounter
