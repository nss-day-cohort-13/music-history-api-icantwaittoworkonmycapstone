angular.module("mh")
	.controller("AlbumsCtrl", [
		"$http",
		"$timeout",
		"$scope",
		"RootFactory",
	function ($http, $timeout, $scope, RootFactory) {
		$scope.headline = "Albums"
		$scope.albums = null
		$scope.artists = null
		$scope.apiRoot = null


		RootFactory.getApiRoot()
			.then(
				root => {
					$scope.apiRoot = root
					$http.get(`${root.albums}`)
						.then(res => $scope.albums = res.data)
				},
				err => console.log("error: ", err)
			)
			.then(
				() => {
					$http.get($scope.apiRoot.artists)
						.then(res => $scope.artists = res.data)
				}
			)

		$scope.deleteAlbum = (key, albumId) => {
			console.log("albumId: ", albumId);
			RootFactory.getApiRoot()
				.then(
					root => $http.delete(`${root.albums}${albumId}/`),
					err => console.log("error: ", err)
				)
				.then(
					res => {
						$scope.albums.splice(key, 1)
					}
				)
		}

		$scope.addNewAlbum = (artist, album) => {
			console.log("artist: ", artist);
			console.log("album: ", album);
			if (artist !== null && album !== null) {
				RootFactory.getApiRoot()
					.then(
						root => $http.post(root.albums, {album_name: album, artist_ID: artist}),
						err => console.log("error: ", err)
					)
					.then(
						res => {
							$scope.albums.push(res.data);
							$scope.newAlbum = "";
							$timeout()
						}
					)
			} else {
				alert("Fill out all the fields!")
			}
		}
	}])
