angular.module("mh")
	.config(($routeProvider) => {
			$routeProvider
				.when("/artists", {
					controller: "ArtistsCtrl",
					// controllerAs: "artistsCtrl",
					templateUrl: "/app/artists/artists.html"
				})
				.when("/artists/:artistId", {
					controller: "ArtistDetailCtrl",
					// controllerAs: "artistDetailCtrl",
					templateUrl: "/app/artists/artistDetail.html"

				})
		})
