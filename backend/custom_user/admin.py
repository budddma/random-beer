from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('avatar', 'name', 'city', 'birth_date', 'gender', 'about_me', 'meeting_format', 'interests')}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        (None, {'fields': ('avatar', 'name', 'city', 'birth_date', 'gender', 'about_me', 'meeting_format', 'interests')}),
    )

admin.site.register(CustomUser, CustomUserAdmin)
