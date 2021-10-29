from django.shortcuts import render
from django.db.models import query
from django.shortcuts import render
from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.filters import SearchFilter
from django.contrib.auth.hashers import make_password, check_password
from rest_framework.views import APIView
from django.http import HttpResponse, JsonResponse
from itertools import chain
from rest_framework import viewsets

# Custom  modules
from .models import *
from .serializers import *

# Create your views here.

class ProfilePageView(APIView):

    # Define a class variables 
    serializer_class = ProfileSerializer
    queryset = []

    def get(self, request):

        ''' GET Request Handler: Display all the customers queried by the user ID '''
        
        # Collect the id for the store to be displayed
        user_id = request.GET.get('id')

        if user_id:
            # Query the database for the user id
            queryset = Profile.objects.filter(id=user_id)

        else: 
            # Get all the data from the database
            queryset = Profile.objects.all()
        
        return Response(ProfileSerializer(queryset, many=True).data)

class RegisterUser(APIView):
    
        ''' Register a new user '''
    
        serializer_class = RegisterUserSerializer
    
        def post(self, request, format=None): 
    
            ''' POST Request Handler: Register a new user '''

            # Serializer instance 
            serializer = self.serializer_class(data=request.data)

            # Data to be returned 
            data = {}

            # Check if the serializer is valid
            if serializer.is_valid():
                
                new_user = serializer.save()

                data['success'] = True
                data['email'] = new_user.email
                data['firstname'] = new_user.firstname
                data['lastname'] = new_user.lastname

            else: 
                data = serializer.errors
            
            return Response(data)

class LoginUser(APIView):
    pass 