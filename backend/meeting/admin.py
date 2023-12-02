from django.contrib import admin
from .models import Meeting

class MeetingAdmin(admin.ModelAdmin):
  fields = ('user', 'is_current')

admin.site.register(Meeting, MeetingAdmin)