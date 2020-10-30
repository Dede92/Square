from django.db import models

# Create your models here.

class Sensor(models.Model):
    label = models.CharField(max_length=256)


class PeopleCounter(models.Model):
    sensor = models.CharField(max_length=256)
    name = models.CharField(max_length=256)
