from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from tracks.models import Artists, Albums, Tracks
from tracks.serializers import ArtistsSerializer, AlbumsSerializer, TracksSerializer

# @api_view(['GET'])
# def api_root(request, format=None):
#     return Response({
#         "artists": reverse("artist-list", request=request, format=format),
#         "albums": reverse("album-list", request=request, format=format),
#         "tracks": reverse("track-list", request=request, format=format)
#     })



class ArtistsList(viewsets.ModelViewSet):
    queryset = Artists.objects.all()
    serializer_class = ArtistsSerializer


class AlbumsList(viewsets.ModelViewSet):
    queryset = Albums.objects.all()
    serializer_class = AlbumsSerializer


class TracksList(viewsets.ModelViewSet):
    queryset = Tracks.objects.all()
    serializer_class = TracksSerializer

