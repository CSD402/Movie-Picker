from django.contrib import admin
from .models import * 

# Register your models here.

'''
Configure Admin Side Views for each model:
This controls how they appear on the admin view panel
'''

class RoomAdmin(admin.ModelAdmin):
    list_display = ['id', 'room_code', 'room_description', 'created_at'] 

class MovieAdmin(admin.ModelAdmin):
    list_display = ['id', 'movie_name', 'movie_description', 'movie_genre', 'num_votes', 'room_id']

''' Model Registration '''
admin.site.register(Movie, MovieAdmin)
admin.site.register(Room, RoomAdmin)