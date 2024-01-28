from rest_framework import serializers
from .models import CustomUser

class CustomUserSerializer(serializers.ModelSerializer):
  class Meta:
    model = CustomUser
    fields = ['id', 'avatar', 'name', 'city', 'birth_date', 'gender', 'about_me', 'meeting_format', 'interests', 'age']