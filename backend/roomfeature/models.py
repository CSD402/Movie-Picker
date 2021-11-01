from django.db import models
from django.contrib.auth.hashers import make_password, check_password
from django.http.response import StreamingHttpResponse
from django.utils.crypto import get_random_string


import random
import string

''' Utility functions '''

# Generate a random string of length n
def generate_unique_code(n):

    while True: 
        code = get_random_string(n)
        
        # Check if the code is unique
        if Room.objects.get(room_code=code):
            break 
    
    return code

# Create your models here.
''' Class designed to hold the details of a room '''
class Room(models.Model):
    
        room_code = models.CharField(max_length=10, null=True, unique=True) # unique id for room
        room_description = models.CharField(default='', max_length=300)     
        created_at = models.DateTimeField(auto_now_add=True)
        # room_image = models.ImageField(upload_to='room_images', blank=True, null=True)

        def __str__(self):
            return self.room_code

# Create your models here.
class Movie(models.Model):

    movie_name = models.CharField(max_length=300) # unique id for room
    movie_description = models.TextField(default='')
    movie_genre = models.CharField(max_length=100, null=True)
    num_votes = models.IntegerField(default=0)
    
    # which room is the movie associated with 
    room_id = models.ForeignKey(Room, on_delete=models.CASCADE, default=1)

     # Override the __str__ method to return the firstname and lastname
    def __str__(self):
        return self.movie_name