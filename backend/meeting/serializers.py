from rest_framework import serializers
from .models import Meeting, CustomUser
from custom_user.serializers import CustomUserSerializer

class MeetingSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=CustomUser.objects.all())

    class Meta:
        model = Meeting
        fields = ['id', 'user', 'is_current', 'date']
