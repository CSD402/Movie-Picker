from rest_framework import serializers
from .models import *

''' Room View Serializer '''
class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'


''' Serializer for movies '''
class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = '__all__'

''' Serializer to create a room '''
class CreateRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ['room_description']


    # Function to create the room and save details 
    def create_room(self):

        new_room = Room(
            room_description = self.validated_data['room_description'],
        ) 
        
        # Create the room code and save it 
        room_code = generate_unique_code(6)
        print("THIS IS ROOM CODE", room_code)
        new_room.room_code = room_code 

        new_room.save()

        return new_room