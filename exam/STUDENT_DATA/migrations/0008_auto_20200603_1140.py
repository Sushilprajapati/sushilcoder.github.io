# Generated by Django 3.0.5 on 2020-06-03 11:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('STUDENT_DATA', '0007_auto_20200603_1101'),
    ]

    operations = [
        migrations.RenameField(
            model_name='student_signup_record',
            old_name='username',
            new_name='s_name',
        ),
    ]
