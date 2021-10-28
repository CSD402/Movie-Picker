from django.contrib import admin
from .models import * 

# Register your models here.

'''
Configure Admin Side Views for each model:
This controls how they appear on the admin view panel
'''

class AdminProfile(admin.ModelAdmin):
    list_display = ['id', 'firstname', 'lastname', 'email', 'date_created']


''' Model Registration '''
admin.site.register(Profile, AdminProfile)