angular.module("mh")
  .controller("AlbumDetailCtrl", [
    "$http",
    "$routeParams",
    "$timeout",
    "$scope",
    "RootFactory",
  function ($http, $routeParams, $timeout, $scope, RootFactory) {
    $scope.headline = "AlbumDetail"
    $scope.artist = null
    $scope.album = null
    let logError = (err) => console.log("error", err);


    RootFactory.getApiRoot()
      .then(
        root => $http.get(root.albums + $routeParams.albumId),
          logError
      )
      .then(
        albumRes => {
          $scope.album= albumRes.data;
          return $http.get($scope.album.artist_ID);
        },
        logError
      )
      .then(
          artistRes => {
            $scope.artist = artistRes.data;
            $timeout();
          },
          logError
        )
  }])
