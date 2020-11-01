# -*- coding: utf-8 -*-
# snapshottest: v1 - https://goo.gl/zC4yUc
from __future__ import unicode_literals

from snapshottest import Snapshot

snapshots = Snapshot()

snapshots['SquareTest::test_mutation_add_people_to_room 1'] = {
    'data': {
        'createSeat': {
            'peopleId': 'Mac',
            'room': 'room_b',
            'statusIn': 0,
            'statusOut': 1
        }
    }
}

snapshots['SquareTest::test_query_all_people_counter 1'] = {
    'data': {
        'allPeopleCounters': [{
            'createdAt': '2020-10-31T21:09:08.065205+00:00',
            'room': 'room_a',
            'statusIn': 1,
            'statusOut': 0,
            'updatedAt': '2020-10-31T21:09:08.065235+00:00'
        }, {
            'createdAt': '2020-10-31T21:09:41.554237+00:00',
            'room': 'room_a',
            'statusIn': 1,
            'statusOut': 0,
            'updatedAt': '2020-10-31T21:09:41.554257+00:00'
        }, {
            'createdAt': '2020-10-31T21:10:41.554237+00:00',
            'room': 'room_a',
            'statusIn': 0,
            'statusOut': 1,
            'updatedAt': '2020-10-31T21:10:41.554257+00:00'
        }]
    }
}

snapshots['SquareTest::test_query_get_people_counter 1'] = {
    'data': {
        'getPeopleCounter': {
            'room': 'room_a',
            'statusIn': 2,
            'statusOut': 1
        }
    }
}
