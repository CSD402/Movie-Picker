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
from .forms import MovieSwipeForm

# Create your views here.

class RoomSwipeView(APIView):

    # Define a class variables 
    serializer_class = MovieSerializer
    queryset = []
    swiped_movies=[]

    def get(self, request):

        # Get the room id from the request
        movie_id = request.GET.get('id')
        
        if movie_id: 
            queryset = Movie.objects.filter(id=movie_id)

        else: 
            queryset = Movie.objects.all()
        
        print(queryset)
        print("BRUHHHH")
        
        form = MovieSwipeForm
        

        # return Response(MovieSerializer(queryset, many=True).data)
        return render(request,'swipe.html',{'details':queryset, 'form':form})

    def post(self, request):
        # movie_data = request.data.movie_swiped
        # my_rec = Movie.objects.get(id=request.id)
        
        form = MovieSwipeForm(request.POST)
        submitted = False
        if request.method == "POST":
            if form.is_valid():
                print("Getting here!!!!!!!")
                swiped = form.save(commit=False)
                if(swiped.movie_swiped):
                    swiped_movies.push(swiped)
                    print(swiped_movies)
                # return HttpResponse(form.data)
        else:
            form = MovieSwipeForm
            if 'submitted' in request.GET:
                submitted = True

        return render(request,'swipe.html',{'details':queryset, 'form':form,'submitted':submitted})
