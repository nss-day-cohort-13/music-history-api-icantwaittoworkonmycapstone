from django.db import models


class Artists(models.Model):
  artist_name = models.CharField(max_length=100)


  # This representation is used any time a base string representation
  # is needed, such as the web browseable API interface provide by
  # the framework.
  def __str__(self):
    return "{}: {}".format(self.id, self.artist_name)


  #The related_name attribute specifies the name of the reverse relation
  #from the User model back to your model.
  # related_name='albums'
class Albums(models.Model):
  album_name = models.CharField(max_length=100)
  artist_ID = models.ForeignKey(Artists, on_delete = models.CASCADE)


  def __str__(self):
    return "{}: {}".format(self.id, self.album_name)

class Tracks(models.Model):
  track_name = models.CharField(max_length=100)
  album_ID= models.ForeignKey(Albums, on_delete = models.CASCADE)


  def __str__(self):
    return "{}: {}".format(self.id, self.track_name)
