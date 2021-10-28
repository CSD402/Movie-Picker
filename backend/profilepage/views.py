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

        # Get all the data from the database
        queryset = Profile.objects.all()
        
        return Response(ProfileSerializer(queryset, many=True).data)