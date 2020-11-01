from django.db import models
from datetime import date
# Create your models here.


class PeopleCounter(models.Model):
    id = models.AutoField(primary_key=True)
    room = models.CharField(max_length=256)
    people_id = models.CharField(max_length=256)
    status_in = models.IntegerField(default=0)
    status_out = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
