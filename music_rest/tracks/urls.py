from rest_framework import routers
from django.conf.urls import url, include
from tracks import views


router = routers.DefaultRouter()
router.register(r'artists', views.ArtistsList)
router.register(r'albums', views.AlbumsList)
router.register(r'tracks', views.TracksList)




urlpatterns = [
    url(r'^', include(router.urls)),
]
