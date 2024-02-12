from rest_framework import serializers
from .models import Meeting
from custom_user.serializers import CustomUserSerializer

class MeetingSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer()
    class Meta:
        model = Meeting
        fields = ['id', 'user', 'is_current', 'date']
