from django import forms
from django.forms import ModelForm
from .models import *

class MovieSwipeForm(ModelForm):
    class Meta:
        model = Movie
        fields = ('movie_swiped',)
