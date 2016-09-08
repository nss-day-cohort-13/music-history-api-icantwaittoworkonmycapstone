angular.module("mh")
  .controller("TrackDetailCtrl", [
    "$http",
    "$routeParams",
    "$timeout",
    "$scope",
    "RootFactory",
  function ($http, $routeParams, $timeout, $scope, RootFactory) {
    $scope.headline = "TrackDetail"

    RootFactory.getApiRoot()
      .then(
        root => {
          $http.get(`${root.tracks}${$routeParams.trackId}`)
            .then(res => $scope.track= res.data)
        },
        err => console.log("error", err)
      )
  }])
