# Generated by Django 3.2.8 on 2021-11-01 19:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('roomfeature', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='room_id',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='roomfeature.room'),
        ),
    ]