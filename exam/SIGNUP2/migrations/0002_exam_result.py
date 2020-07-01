# Generated by Django 3.0.5 on 2020-07-01 17:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('SIGNUP2', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Exam_result',
            fields=[
                ('Student_ID', models.CharField(max_length=15, primary_key=True, serialize=False)),
                ('True_false_result', models.CharField(blank=True, max_length=1, null=True)),
                ('Multiple_choice_result', models.CharField(blank=True, max_length=1, null=True)),
                ('Short_answer', models.CharField(blank=True, max_length=600, null=True)),
                ('Medium_answer', models.TextField(blank=True, null=True)),
                ('Long_answer', models.TextField(blank=True, null=True)),
            ],
        ),
    ]
