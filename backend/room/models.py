from django.db import models
from django.contrib.auth.hashers import make_password, check_password
from django.contrib.postgres.fields import ArrayField
from django.http.response import StreamingHttpResponse

# Create your models here.
class Movie(models.Model):

    movie_name = models.CharField(max_length=300) # unique id for room
    movie_description = models.TextField(default='')
    movie_genre = models.CharField(max_length=100)
    movie_date_released = models.DateField(null=True)
    
    # movie_image = models.ImageField(upload_to='profile', blank=True, null=True)

     # Override the __str__ method to return the firstname and lastname
    def __str__(self):
        return self.movie_name

    def is_exists(self):
        ''' Check whether a user exists in the database '''
        if Movie.objects.get(movie_name=self.movie_name): 
            return True
        else:
            return False
