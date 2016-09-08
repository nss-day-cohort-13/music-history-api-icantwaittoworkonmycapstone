angular.module("mh")
  .controller("TracksCtrl", [
    "$http",
    "$routeParams",
    "$timeout",
    "$scope",
    "RootFactory",
  function ($http, $routeParams, $timeout, $scope, RootFactory) {
    $scope.headline = "Tracks"
    $scope.tracks = null

    RootFactory.getApiRoot()
      .then(
        root => {
          $http.get(`${root.tracks}`)
            .then(res => $scope.tracks = res.data)
          $timeout()
        },
        err => console.log("error: ", err)
      )

    $scope.addNewTrack = (track) => {
      if (track !== null) {
        RootFactory.getApiRoot()
          .then(
            root => $http.post(root.tracks, {track_name: track}),
            err => console.log("error: ", err)
          )
          .then(
          res => {
            $scope.artists.push(res.data);
            $scope.newArtist = "";
            $timeout()
          }
        )
      } else {
        alert("Track is blank!")
      }
    }

    $scope.deletetrack = (trackId) => {
      console.log("trackId: ", trackId);
      RootFactory.getApiRoot()
        .then(
          root => $http.delete(`${root.tracks}${trackId}/`),
          err => console.log("error: ", err)
        )
        .then(
            res => {
              $scope.artists.push(res.data);
              $scope.newArtist = "";
              $timeout()
            }
          )
    }

  }])
