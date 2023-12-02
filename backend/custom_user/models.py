from django.db import models
from django.contrib.auth.models import AbstractUser
from datetime import date

MEETINGS_FORMATS = [
	('online', 'Онлайн'),
	('offline', 'Оффлайн'),
	('any', 'Любой'),
]

INTEREST_CHOICES = [
	('literature', 'Литература'),
	('drawing', 'Рисование'),
	('cpp', 'C++'),
    ('orthodoxy', 'Православие'),
    ('ml', 'ML'),
    ('py', 'Python'),
]

class Interest(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class CustomUser(AbstractUser):
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)
    name = models.CharField(max_length=30)
    city = models.CharField(max_length=30, blank=True, default="")
    birth_date = models.DateField(null=True, blank=True)
    gender = models.CharField(max_length=1, choices=[('M', 'Мужской'), ('F', 'Женский')])
    about_me = models.TextField(blank=True, default="")
    meeting_format = models.CharField(max_length=10, choices=MEETINGS_FORMATS, default='any')
    interests = models.ManyToManyField('Interest', choices=INTEREST_CHOICES, blank=True)

    @property
    def age(self):
        if self.birth_date:
            today = date.today()
            age = today.year - self.birth_date.year - ((today.month, today.day) < (self.birth_date.month, self.birth_date.day))
            return age
        return None
