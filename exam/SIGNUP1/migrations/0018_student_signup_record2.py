# Generated by Django 3.0.5 on 2020-06-16 06:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('SIGNUP1', '0017_student_signup_record1_email'),
    ]

    operations = [
        migrations.CreateModel(
            name='Student_signup_record2',
            fields=[
                ('college_id', models.CharField(max_length=15, primary_key=True, serialize=False)),
                ('s_name', models.CharField(max_length=20)),
                ('semester', models.IntegerField()),
                ('D_O_B', models.DateField(default='2000-12-04')),
                ('password', models.CharField(default=0, max_length=15)),
            ],
        ),
    ]
