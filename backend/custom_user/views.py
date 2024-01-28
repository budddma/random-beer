from rest_framework import viewsets, permissions
from .serializers import CustomUserSerializer
from .models import CustomUser

class CustomUserViewSet(viewsets.ModelViewSet):
    serializer_class = CustomUserSerializer
    queryset = CustomUser.objects.all()
    permission_classes = [permissions.IsAdminUser]