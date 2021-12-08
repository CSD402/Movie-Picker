from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.filters import SearchFilter
from django.contrib.auth.hashers import make_password, check_password
from rest_framework.serializers import Serializer
from rest_framework.views import APIView, View
from django.http import HttpResponse, JsonResponse
from itertools import chain
import pandas as pd
import json
import ast 
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
        room_code = request.GET.get('room_code')

        if room_id: 
            # Get the room data
            queryset = Room.objects.filter(id=room_id)
        
        if room_code:
            # Get the room data
            queryset = Room.objects.filter(room_code=room_code)

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
            data['room_id'] = new_room.id
            data['room_code'] = new_room.room_code
            data['room_desc'] = new_room.room_description
            data['created_at'] = new_room.created_at


            '''Get a list of 5 movies'''

            # Read the data 
            movie_data = pd.read_csv('movies_metadata.csv')

            # Get 10 movies from the data
            movie_sample_df = movie_data.sample(10)

            for i in range(10):
                
                movie_genre_list = ast.literal_eval(movie_sample_df.iloc[i]['genres'])[0]
                genre = movie_genre_list['name']
                movie = Movie(movie_name=movie_sample_df.iloc[i]['title'], 
                                movie_description=movie_sample_df.iloc[i]['overview'], 
                                movie_genre=genre, 
                                room_id=new_room)

                # Save the movie
                movie.save()

        

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

    serializer_class = MovieSerializer

    def get(self, request):
        
        # Collect room ID and movie ID 
        movie_id = request.GET.get('movie_id')

        # Filter movie based on movie and room id
        movie = Movie.objects.get(id=movie_id)

        # Get new votes 
        new_votes = movie.num_votes + 1

        # Update the movie votes
        movie.num_votes = new_votes
        movie.save()

        # Add success data 
        data = {
            'success': True,
            'movie_name': movie.movie_name,
            'id': movie.id,
            'num_votes': movie.num_votes
        }
        return Response(data)

''' Define a view to get the best movie in a room '''
class PickBestMovie(APIView): 
    
    def get(self, request):

        queryset = []

        # Collect the room ID 
        room_id = request.GET.get('room_id')

        queryset = Movie.get_best_room_movie(room_id)

        # Return the movie data
        return Response(MovieSerializer(queryset).data)

''' Define a view to get more movies in a room '''
class GetMoreMovies(APIView):

    def get(self, request):

        # Collect the room ID
        room_id = request.GET.get('room_id')

        # Get room obj to enter in the movie field
        room_obj = Room.objects.get(id=room_id)

        # Read the data 
        movie_data = pd.read_csv('movies_metadata.csv')

        # Get 5 movies from the data
        movie_sample_df = movie_data.sample(5)

        for i in range(5):
            
            try: 
                movie_genre_list = ast.literal_eval(movie_sample_df.iloc[i]['genres'])[0]
                genre = movie_genre_list['name']
                movie = Movie(movie_name=movie_sample_df.iloc[i]['title'], 
                                movie_description=movie_sample_df.iloc[i]['overview'], 
                                movie_genre=genre, 
                                room_id=room_obj)
            except: 
                genre = 'No genre'
                movie = Movie(movie_name=movie_sample_df.iloc[i]['title'], 
                                movie_description=movie_sample_df.iloc[i]['overview'], 
                                movie_genre=genre, 
                                room_id=room_obj)

            # Save the movie
            movie.save()

        # Return the movie data
        return Response({'success': True, 
                        'room_id': room_id})