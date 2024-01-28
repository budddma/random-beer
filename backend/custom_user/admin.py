from django.contrib import admin
from .models import CustomUser, Interest

admin.site.register(Interest)
admin.site.register(CustomUser)