# Generated by Django 3.0.5 on 2020-06-09 07:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('GALLERY', '0004_add_image_s_img_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='upload',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img_add', models.ImageField(default='', upload_to='pics')),
            ],
        ),
        migrations.DeleteModel(
            name='add_image',
        ),
    ]
