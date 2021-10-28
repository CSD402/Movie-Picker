from django.db import models

# Create your models here.


'''User Model to save the user information'''
class User(models.Model):
    firstname = models.CharField(max_length=200, null=False, default="John") 
    lastname = models.CharField(max_length=200, null=True)
    email_id = models.EmailField()

