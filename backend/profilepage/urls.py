from django.urls import path, include
from .views import *

# Define routes for all the URL paths 
urlpatterns = [
    path('users', ProfilePageView.as_view()),
    path('register', RegisterUser.as_view()),
    path('login', LoginUser.as_view()),
]