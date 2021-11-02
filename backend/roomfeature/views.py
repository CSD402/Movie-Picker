from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.filters import SearchFilter
from django.contrib.auth.hashers import make_password, check_password
from rest_framework.serializers import Serializer
from rest_framework.views import APIView
from django.http import HttpResponse, JsonResponse
from itertools import chain
from rest_framework import viewsets

# Custom imports 
from .models import * 
from .serializers import *

# Create your views here.

''' Define a view to look at all the rooms '''
class RoomView(APIView):

    def get(self, request):

        serializer_class = RoomSerializer
        queryset = [] 

        # Collect the room ID 
        room_id = request.GET.get('room_id')

        if room_id: 
            # Get the room data
            queryset = Room.objects.filter(id=room_id)
        else: 
            queryset = Room.objects.all() 

        # Return the room data
        return Response(RoomSerializer(queryset, many=True).data)

''' View to create a room '''
class CreateRoomView(APIView):

    # Define the serializer class
    serializer_class = CreateRoomSerializer
    
    def post(self, request):
        
        # Serializer instance 
        serializer = self.serializer_class(data=request.data)

        # Data to be returned 
        data = {}

        # Check if the serializer is valid
        if serializer.is_valid():
            
            new_room = serializer.create_room()

            data['success'] = True
            data['room_code'] = new_room.room_code
            data['room_desc'] = new_room.room_description
            data['created_at'] = new_room.created_at

        else: 
            data = serializer.errors
        
        return Response(data)

''' Define a view to look at all the movies '''
class MovieView(APIView):

    def get(self, request):

        serializer_class = MovieSerializer
        queryset = []

        # Collect the movie ID and room ID 
        movie_id = request.GET.get('movie_id')
        room_id = request.GET.get('room_id')

        # Collect all the data
        queryset = Movie.objects.all()

        if movie_id:
            # Get the movie data
            queryset = Movie.objects.filter(id=movie_id)
        if room_id:
            # Get the movie data
            queryset = Movie.objects.filter(room_id=room_id)

        # Return the movie data
        return Response(MovieSerializer(queryset, many=True).data) 

''' Create a view to swipe over movies '''
class SwipeView(APIView):

    def get(self, request):
        
        # Collect room ID and movie ID 
        room_id = request.GET.get('room_id')
        movie_id = request.GET.get('movie_id')

        # Update value in the model 
        new_votes = Movie.objects.filter(room_id=room_id).filter(id=movie_id).num_votes + 1
        Movie.objects.filter(room_id=room_id).get(id=movie_id).update(num_votes=new_votes)