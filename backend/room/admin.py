from django.contrib import admin
from .models import * 

# Register your models here.

'''
Configure Admin Side Views for each model:
This controls how they appear on the admin view panel
'''

class AdminProfile(admin.ModelAdmin):
    list_display = ['id', 'movie_name', 'movie_description', 'movie_genre', 'movie_date_released']


''' Model Registration '''
admin.site.register(Movie, AdminProfile)
