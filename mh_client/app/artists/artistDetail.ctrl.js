angular.module("mh")
	.controller("ArtistDetailCtrl", [
		"$http",
		"$routeParams",
		"$timeout",
		"$scope",
		"RootFactory",
	function ($http, $routeParams, $timeout, $scope, RootFactory) {
		$scope.headline = "Artist Detail"

		RootFactory.getApiRoot()
			.then(
				root => {
					$http.get(`${root.artists}${$routeParams.artistId}`)
						.then(res => $scope.artist = res.data)
				},
				err => console.log("error", err)
			)
	}])
