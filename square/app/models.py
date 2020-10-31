from django.db import models
import uuid
# Create your models here.

class PeopleCounter(models.Model):
    room = models.CharField(max_length=256)
    people_id = models.CharField(max_length=256, primary_key=True, default=uuid.uuid4())
    status = models.BooleanField(default=0)
