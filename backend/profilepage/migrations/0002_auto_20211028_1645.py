# Generated by Django 3.2.8 on 2021-10-28 11:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profilepage', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='password',
            field=models.CharField(default='pass', max_length=500),
        ),
        migrations.AddField(
            model_name='profile',
            name='profile_picture',
            field=models.ImageField(blank=True, null=True, upload_to='static/profile_images'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='email',
            field=models.EmailField(default='email@email.com', max_length=254),
        ),
    ]