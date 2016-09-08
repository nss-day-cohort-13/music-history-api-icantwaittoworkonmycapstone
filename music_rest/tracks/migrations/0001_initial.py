# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2016-09-08 15:11
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Albums',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('album_name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Artists',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('artist_name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Tracks',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('track_name', models.CharField(max_length=100)),
                ('album_ID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tracks.Albums')),
            ],
        ),
        migrations.AddField(
            model_name='albums',
            name='artist_ID',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tracks.Artists'),
        ),
    ]