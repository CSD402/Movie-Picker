from django.db import models
from django.contrib.auth.hashers import make_password, check_password
from django.contrib.postgres.fields import ArrayField
from django.http.response import StreamingHttpResponse

# Create your models here.

'''Profile Model to save the user information'''
class Profile(models.Model):
    firstname = models.CharField(max_length=200, null=False, default="John") 
    lastname = models.CharField(max_length=200, null=True)
    email = models.EmailField(default='email@email.com')
    password = models.CharField(max_length=500, null=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True)
    date_updated = models.DateTimeField(auto_now=True, null=True)
    profile_picture = models.ImageField(upload_to='profile', blank=True, null=True)
    # movies_seen = ArrayField(models.CharField(max_length=200), default=list)
    

    # Override the __str__ method to return the firstname and lastname
    def __str__(self):
        return self.firstname + " " + self.lastname
 
    ''' Functions to get users by various filtering methods '''
    @staticmethod
    def get_user_by_email(email):
        try: 
            return Profile.objects.get(email=email)
        
        except:
            return False 

    ''' Function to set password to the given value '''
    def set_password(self, password):
        
        # Hash the password
        password = make_password(password)
        self.password = password
    
    def is_exists(self):
        ''' Check whether a user exists in the database '''
        if Profile.objects.filter(email=self.email): 
            return True
        else:
            return False
    
    ''' Function to register the data in the database '''
    def register(self):
        self.save()