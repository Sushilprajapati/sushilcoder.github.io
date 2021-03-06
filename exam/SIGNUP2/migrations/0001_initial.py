# Generated by Django 3.0.5 on 2020-06-16 11:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='My_Student1',
            fields=[
                ('s_id', models.CharField(max_length=15, primary_key=True, serialize=False)),
                ('s_name', models.CharField(max_length=20)),
                ('course', models.CharField(max_length=20)),
                ('semester', models.IntegerField()),
                ('DOB', models.DateField()),
                ('Email', models.CharField(max_length=40, unique=True)),
                ('Phone', models.CharField(max_length=12, unique=True)),
                ('status', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='one_time_access_check',
            fields=[
                ('student_id_user', models.CharField(max_length=15, primary_key=True, serialize=False)),
                ('access_check_status', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Student_signup_record1',
            fields=[
                ('college_id', models.CharField(max_length=15, primary_key=True, serialize=False)),
                ('s_name', models.CharField(max_length=20)),
                ('semester', models.IntegerField()),
                ('D_O_B', models.DateField()),
                ('password', models.CharField(default=0, max_length=15)),
            ],
        ),
    ]
