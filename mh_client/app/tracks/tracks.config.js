angular.module("mh")
  .config(($routeProvider) => {
      $routeProvider
        .when("/tracks", {
          controller: "TracksCtrl",
          // controllerAs: "tracksCtrl",
          templateUrl: "/app/tracks/tracks.html"
        })
        .when("/tracks/:trackId", {
          controller: "TrackDetailCtrl",
          // controllerAs: "artistDetailCtrl",
          templateUrl: "/app/tracks/trackDetail.html"

        })
    })
