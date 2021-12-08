from django.urls import path, include
from .views import *

# Define routes for all the URL paths 
urlpatterns = [
    path('rooms', RoomView.as_view()),
    path('addroom', CreateRoomView.as_view()),
    path('movies', MovieView.as_view()),
    path('swipe', SwipeView.as_view()),
    path('bestmovie', PickBestMovie.as_view()),
    path('moremovies', GetMoreMovies.as_view()),
]