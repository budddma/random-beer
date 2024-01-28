from rest_framework import viewsets, permissions
from .serializers import MeetingSerializer
from .models import Meeting

class MeetingViewSet(viewsets.ModelViewSet):
    serializer_class = MeetingSerializer
    queryset = Meeting.objects.all()
    permission_classes = [permissions.IsAuthenticated]