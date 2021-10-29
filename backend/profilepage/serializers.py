from itertools import product
from django.db.models import fields
from rest_framework import serializers
from .models import *


''' Generic Serializer for Nested Queries '''
class RelatedFieldAlternative(serializers.PrimaryKeyRelatedField):
    def __init__(self, **kwargs):
        self.serializer = kwargs.pop('serializer', None)
        if self.serializer is not None and not issubclass(self.serializer, serializers.Serializer):
            raise TypeError('"serializer" is not a valid serializer class')

        super().__init__(**kwargs)

    def use_pk_only_optimization(self):
        return False if self.serializer else True

    def to_representation(self, instance):
        if self.serializer:
            return self.serializer(instance, context=self.context).data
        return super().to_representation(instance)


''' Profile Serializer '''
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

''' Register Customer Serializer Class '''
class RegisterUserSerializer(serializers.ModelSerializer):

    class Meta: 

        model = Profile
        fields = ('firstname', 'lastname', 'email', 'password')

        extra_kwargs = {
            'password' : {'write_only' : True}
        }
        
    # Function to save a new user 
    def create(self):
        
        new_user = Profile(
            email = self.validated_data['email'],
            firstname = self.validated_data['firstname'],
            lastname = self.validated_data['lastname'],
        )

        # Check if the email already exists
        if new_user.is_exists():
            raise serializers.ValidationError(
                {'error': 'Email already exists'
            })
        
        # Get the password
        password = self.validated_data['password']

        # Set the password and save the new registration 
        new_user.set_password(password)
        new_user.save()

        return new_user
        
