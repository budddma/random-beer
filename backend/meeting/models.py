from django.db import models
from custom_user.models import CustomUser

class Meeting(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    is_current = models.BooleanField(default=True)
    date = models.DateField(null=True, blank=True)
    
    def __str__(self):
        date_info = "Текущая встреча" if self.is_current else "Встреча прошла " + str(self.date)
        return f"{self.user.name} - {date_info}"
