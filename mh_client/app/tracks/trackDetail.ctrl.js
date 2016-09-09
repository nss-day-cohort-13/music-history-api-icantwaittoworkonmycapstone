angular.module("mh")
  .controller("TrackDetailCtrl", [
    "$http",
    "$routeParams",
    "$timeout",
    "$scope",
    "RootFactory",
  function ($http, $routeParams, $timeout, $scope, RootFactory) {
    $scope.headline = "TrackDetail"
    $scope.track = null
    $scope.album = null
    let logError = (err) => console.log("error", err);


    RootFactory.getApiRoot()
      .then(
        root => $http.get(root.tracks + $routeParams.trackId),
          logError
      )
      .then(
        trackRes => {
          $scope.track= trackRes.data;
          return $http.get($scope.track.album_ID);
        },
        logError
      )
      .then(
          albumRes => {
            $scope.album = albumRes.data;
            $timeout();
          },
          logError
        )
  }])
