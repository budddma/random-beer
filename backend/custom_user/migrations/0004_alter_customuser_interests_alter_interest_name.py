# Generated by Django 4.2.7 on 2024-01-28 02:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('custom_user', '0003_alter_customuser_interests'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='interests',
            field=models.ManyToManyField(blank=True, to='custom_user.interest'),
        ),
        migrations.AlterField(
            model_name='interest',
            name='name',
            field=models.CharField(choices=[('lt', 'Литература'), ('dr', 'Рисование'), ('cpp', 'C++'), ('ort', 'Православие'), ('ml', 'ML'), ('py', 'Python')], max_length=30),
        ),
    ]
