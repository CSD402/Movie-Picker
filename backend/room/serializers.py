from itertools import product
from django.db.models import fields
from rest_framework import serializers
from .models import *

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        # fields = ('movie_name','movie_description','movie_genre','movie_date_released')
        fields = '__all__'
