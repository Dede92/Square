# Generated by Django 3.1.2 on 2020-10-31 13:30

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_peoplecounter_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='peoplecounter',
            name='id',
        ),
        migrations.RemoveField(
            model_name='peoplecounter',
            name='name',
        ),
        migrations.AddField(
            model_name='peoplecounter',
            name='people_id',
            field=models.CharField(
                default=uuid.UUID('369085d4-f09f-43d4-84b8-8dba4493ee8f'),
                max_length=256,
                primary_key=True,
                serialize=False),
        ),
        migrations.AddField(
            model_name='peoplecounter',
            name='status',
            field=models.BooleanField(default=0),
        ),
    ]
