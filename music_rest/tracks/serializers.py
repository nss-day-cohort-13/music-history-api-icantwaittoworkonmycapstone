from rest_framework import serializers
from tracks.models import Artists, Albums, Tracks

class TracksSerializer(serializers.HyperlinkedModelSerializer):

  class Meta:
    model = Tracks
    fields = ('id', 'url', 'track_name', 'album_ID')


class ArtistsSerializer(serializers.HyperlinkedModelSerializer):

  class Meta:
    model = Artists
    fields = ('id', 'url', 'artist_name')


class AlbumsSerializer(serializers.HyperlinkedModelSerializer):

  class Meta:
    model = Albums
    fields = ('id', 'url', 'album_name', 'artist_ID')

