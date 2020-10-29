from django.contrib import admin
from .models import Sensor, PeopleCounter
# Register your models here.

admin.site.register(Sensor)
admin.site.register(PeopleCounter)
