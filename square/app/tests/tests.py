from django.test import TestCase as DjangoTestCase
from snapshottest import TestCase as SnapshotTestCase
from graphene.test import Client
from ..schema import schema
from .queries import query_get_people_counter, query_all_people_counter
from .mutations import mutation_add_people_to_room
# Create your tests here.


class SquareTest(DjangoTestCase, SnapshotTestCase):
    # Fixtures
    fixtures = ['sample']

    def test_query_get_people_counter(self):
        client = Client(schema)
        executed = client.execute(query_get_people_counter,
                                  variables={'room': 'room_a'})
        self.assertMatchSnapshot(executed)

    def test_query_all_people_counter(self):
        client = Client(schema)
        executed = client.execute(query_all_people_counter)
        self.assertMatchSnapshot(executed)

    def test_mutation_add_people_to_room(self):
        client = Client(schema)
        executed = client.execute(mutation_add_people_to_room,
                                  variables={
                                      'room': 'room_b',
                                      'peopleId': 'Mac',
                                      'statusIn': 0,
                                      'statusOut': 1
                                  })
        self.assertMatchSnapshot(executed)
