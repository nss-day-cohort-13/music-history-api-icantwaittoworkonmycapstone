angular.module("mh")
	.controller("ArtistsCtrl", [
		"$http",
		"$timeout",
		"$scope",
		"RootFactory",
	function ($http, $timeout, $scope, RootFactory) {
		$scope.headline = "Artists"
		$scope.artists = null

		RootFactory.getApiRoot()
			.then(
				root => {
					$http.get(`${root.artists}`)
						.then(res => $scope.artists = res.data)
					$timeout()
				},
				err => console.log("error: ", err)
			)

		$scope.addNewArtist = (artist) => {
			if (artist !== null) {
				RootFactory.getApiRoot()
					.then(
						root => $http.post(root.artists, {artist_name: artist}),
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
				alert("Artist is blank!")
			}
		}

		$scope.deleteArtist = (key, artistId) => {
			console.log("artistId: ", artistId);
			RootFactory.getApiRoot()
				.then(
					root => $http.delete(`${root.artists}${artistId}/`),
					err => console.log("error: ", err)
				)
				.then(
					res => {
						$scope.artists.splice(key, 1)
					}
				)
		}

	}])
