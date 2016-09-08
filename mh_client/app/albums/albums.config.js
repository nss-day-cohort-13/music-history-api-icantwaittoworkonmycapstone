angular.module("mh")
	.config(($routeProvider) => {
			$routeProvider
				.when("/albums", {
					controller: "AlbumsCtrl",
					// controllerAs: "albumsCtrl",
					templateUrl: "/app/albums/albums.html"
				})
				.when("/albums/:albumId", {
					controller: "AlbumDetailCtrl",
					// controllerAs: "albumDetailCtrl",
					templateUrl: "/app/albums/albumDetail.html"

				})
		})
