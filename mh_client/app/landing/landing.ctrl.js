'use strict'

angular.module("mh")
	.controller("LandingCtrl", [
		"$scope",
		"$http",
		"RootFactory",
		"$timeout",
		function($scope, $http, RootFactory, $timeout) {
			$scope.title = "Look at all these traxxxx!!!!!";
			$scope.apiRoot = null;
			$scope.heading2 = "All Tracks";
			$scope.artists_heading = "Artists";
			$scope.albums_heading = "Albums";
			$scope.selectedArtist = "";
			$scope.selectedAlbum = "";

			RootFactory.getApiRoot()
				.then(
					root => {
						$scope.apiRoot = root;
						$http.get(`${root.tracks}`)
							.then(
								res => {
									$scope.tracks = res.data
									console.log("tracks", $scope.tracks);
							});
						$timeout();
					},
					err => console.log("error", err)
				)
				.then(
					() => {
						$http.get(`${$scope.apiRoot.artists}`)
							.then(
								res => {
									$scope.artists = res.data
							});
						$timeout();
					},
					err => console.log("error", err)
				)
				.then(
					() => {
						$http.get(`${$scope.apiRoot.albums}`)
							.then(
								res => {
									$scope.albums = res.data
								});
							$timeout();
						},
						err => console.log("error", err)
				);


		}
	]);

