from django.db import models
from django.db.models.constraints import CheckConstraint

# Create your models here.


'''Customer Model to save the user information'''
class Customer(models.Model):
    firstname = models.CharField(max_length=200, null=False, default="John") 
    lastname = models.CharField(max_length=200, null=True)
    email = models.EmailField(max_length=200, null=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True)
    date_updated = models.DateTimeField(auto_now=True, null=True) 

