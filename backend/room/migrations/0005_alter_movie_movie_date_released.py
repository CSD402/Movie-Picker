# Generated by Django 3.2.8 on 2021-10-29 16:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('room', '0004_alter_movie_movie_date_released'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='movie_date_released',
            field=models.DateField(null=True),
        ),
    ]
